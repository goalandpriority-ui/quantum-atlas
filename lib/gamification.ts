// Shared client-side localStorage helpers for gamification features.
// All functions are safe to call during SSR (they check for `window`).

const STORAGE_KEYS = {
  dailyStreak: "qa_daily_streak",
  dailyHistory: "qa_daily_history",
  badges: "qa_badges",
  visitDates: "qa_visit_dates",
} as const;

function isClient() {
  return typeof window !== "undefined";
}

function safeGet<T>(key: string, fallback: T): T {
  if (!isClient()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown) {
  if (!isClient()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail silently
  }
}

// ---------- Daily Challenge streak tracking ----------

export type DailyHistoryEntry = { date: string; solved: boolean; attempts: number };

export function getTodayDateString(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export function getDailyHistory(): DailyHistoryEntry[] {
  return safeGet<DailyHistoryEntry[]>(STORAGE_KEYS.dailyHistory, []);
}

export function recordDailyResult(solved: boolean, attempts: number) {
  const today = getTodayDateString();
  const history = getDailyHistory();
  const existingIndex = history.findIndex((h) => h.date === today);
  const entry: DailyHistoryEntry = { date: today, solved, attempts };
  if (existingIndex >= 0) {
    history[existingIndex] = entry;
  } else {
    history.push(entry);
  }
  safeSet(STORAGE_KEYS.dailyHistory, history);
  return computeStreak(history);
}

export function computeStreak(history?: DailyHistoryEntry[]): { current: number; best: number } {
  const h = history || getDailyHistory();
  const solvedDates = new Set(h.filter((e) => e.solved).map((e) => e.date));

  let current = 0;
  const cursor = new Date();
  // Walk backward from today counting consecutive solved days
  while (true) {
    const dateStr = cursor.toISOString().slice(0, 10);
    if (solvedDates.has(dateStr)) {
      current++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  // Best streak: scan all solved dates for longest consecutive run
  const sortedDates = Array.from(solvedDates).sort();
  let best = 0;
  let run = 0;
  let prevDate: Date | null = null;
  for (const dateStr of sortedDates) {
    const d = new Date(dateStr);
    if (prevDate) {
      const diffDays = Math.round((d.getTime() - prevDate.getTime()) / 86400000);
      run = diffDays === 1 ? run + 1 : 1;
    } else {
      run = 1;
    }
    best = Math.max(best, run);
    prevDate = d;
  }

  return { current, best };
}

export function hasSolvedToday(): boolean {
  const today = getTodayDateString();
  return getDailyHistory().some((h) => h.date === today && h.solved);
}

export function getTodayAttempts(): number {
  const today = getTodayDateString();
  const entry = getDailyHistory().find((h) => h.date === today);
  return entry ? entry.attempts : 0;
}

// ---------- Badge / achievement tracking ----------

export type BadgeId =
  | "first-visit"
  | "first-daily-solve"
  | "streak-3"
  | "streak-7"
  | "streak-30"
  | "circuit-builder-used"
  | "quiz-completed"
  | "explorer-10-pages"
  | "explorer-50-pages"
  | "learning-level-7";

export const BADGE_INFO: Record<BadgeId, { name: string; description: string; icon: string }> = {
  "first-visit": { name: "Welcome", description: "Visited QuantumAtlas for the first time", icon: "👋" },
  "first-daily-solve": { name: "Quantum Solver", description: "Solved your first Daily Challenge", icon: "🧩" },
  "streak-3": { name: "Building Momentum", description: "3-day Daily Challenge streak", icon: "🔥" },
  "streak-7": { name: "Week of Qubits", description: "7-day Daily Challenge streak", icon: "⚡" },
  "streak-30": { name: "Quantum Devotee", description: "30-day Daily Challenge streak", icon: "💎" },
  "circuit-builder-used": { name: "Circuit Architect", description: "Built and ran a circuit in the Circuit Builder", icon: "🧰" },
  "quiz-completed": { name: "Self-Assessed", description: "Completed the Quantum Readiness Quiz", icon: "📋" },
  "explorer-10-pages": { name: "Curious Mind", description: "Visited 10 different pages on the site", icon: "🔍" },
  "explorer-50-pages": { name: "Deep Explorer", description: "Visited 50 different pages on the site", icon: "🗺️" },
  "learning-level-7": { name: "Quantum Scholar", description: "Reached Level 7 in the Learning Center", icon: "🎓" },
};

export function getBadges(): BadgeId[] {
  return safeGet<BadgeId[]>(STORAGE_KEYS.badges, []);
}

export function awardBadge(id: BadgeId): boolean {
  const current = getBadges();
  if (current.includes(id)) return false; // already has it
  safeSet(STORAGE_KEYS.badges, [...current, id]);
  return true; // newly awarded
}

export function hasBadge(id: BadgeId): boolean {
  return getBadges().includes(id);
}

// ---------- Page visit tracking (for explorer badges) ----------

export function recordPageVisit(path: string) {
  const visited = safeGet<string[]>("qa_visited_pages", []);
  if (!visited.includes(path)) {
    const updated = [...visited, path];
    safeSet("qa_visited_pages", updated);
    if (updated.length >= 10) awardBadge("explorer-10-pages");
    if (updated.length >= 50) awardBadge("explorer-50-pages");
  }
}

export function getVisitedPageCount(): number {
  return safeGet<string[]>("qa_visited_pages", []).length;
}
