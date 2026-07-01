"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getBadges,
  BADGE_INFO,
  computeStreak,
  getDailyHistory,
  getVisitedPageCount,
  BadgeId,
  awardBadge,
} from "@/lib/gamification";

export default function BadgesPage() {
  const [earned, setEarned] = useState<BadgeId[]>([]);
  const [streak, setStreak] = useState({ current: 0, best: 0 });
  const [visitedCount, setVisitedCount] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Award "first-visit" badge just for arriving
    awardBadge("first-visit");
    setEarned(getBadges());
    setStreak(computeStreak());
    setVisitedCount(getVisitedPageCount());
    setSolvedCount(getDailyHistory().filter((h) => h.solved).length);
    setMounted(true);
  }, []);

  const allBadgeIds = Object.keys(BADGE_INFO) as BadgeId[];
  const earnedSet = new Set(earned);
  const earnedBadges = allBadgeIds.filter((id) => earnedSet.has(id));
  const lockedBadges = allBadgeIds.filter((id) => !earnedSet.has(id));

  if (!mounted) return null;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Your Progress
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Badges & Achievements
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Earn badges by exploring the site, solving Daily Challenges, and
        building streaks. Progress is saved in your browser — no account
        needed.
      </p>

      {/* Stats summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-quantum">{earnedBadges.length}</p>
          <p className="text-xs text-ink-muted">Badges earned</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-collapse">🔥 {streak.current}</p>
          <p className="text-xs text-ink-muted">Current streak</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-ink">{solvedCount}</p>
          <p className="text-xs text-ink-muted">Challenges solved</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-ink">{visitedCount}</p>
          <p className="text-xs text-ink-muted">Pages visited</p>
        </div>
      </div>

      {/* Earned badges */}
      {earnedBadges.length > 0 && (
        <div className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">
            Earned ({earnedBadges.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {earnedBadges.map((id) => {
              const info = BADGE_INFO[id];
              return (
                <div
                  key={id}
                  className="rounded-xl border-2 border-quantum bg-quantum-50 p-5 text-center"
                >
                  <p className="text-3xl mb-2">{info.icon}</p>
                  <p className="font-semibold text-ink text-sm mb-1">{info.name}</p>
                  <p className="text-xs text-ink-muted leading-tight">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Locked badges */}
      {lockedBadges.length > 0 && (
        <div className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">
            Locked ({lockedBadges.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {lockedBadges.map((id) => {
              const info = BADGE_INFO[id];
              return (
                <div
                  key={id}
                  className="rounded-xl border border-line bg-paper p-5 text-center opacity-50"
                >
                  <p className="text-3xl mb-2 grayscale">🔒</p>
                  <p className="font-semibold text-ink-muted text-sm mb-1">{info.name}</p>
                  <p className="text-xs text-ink-soft leading-tight">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* How to earn more */}
      <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-3">
          How to earn more badges
        </p>
        <div className="space-y-2 text-sm">
          <Link href="/daily-challenge" className="flex justify-between rounded-lg bg-paper border border-line px-4 py-3 hover:border-quantum transition-colors">
            <span className="text-ink">🧩 Solve Daily Challenges</span>
            <span className="text-ink-soft">→ streak badges</span>
          </Link>
          <Link href="/circuit-builder" className="flex justify-between rounded-lg bg-paper border border-line px-4 py-3 hover:border-quantum transition-colors">
            <span className="text-ink">🧰 Use the Circuit Builder</span>
            <span className="text-ink-soft">→ Circuit Architect</span>
          </Link>
          <Link href="/quiz" className="flex justify-between rounded-lg bg-paper border border-line px-4 py-3 hover:border-quantum transition-colors">
            <span className="text-ink">📋 Complete the Readiness Quiz</span>
            <span className="text-ink-soft">→ Self-Assessed</span>
          </Link>
          <div className="flex justify-between rounded-lg bg-paper border border-line px-4 py-3">
            <span className="text-ink">🗺️ Explore 50 pages</span>
            <span className="text-ink-soft">{visitedCount}/50 visited</span>
          </div>
        </div>
        <p className="text-xs text-ink-soft mt-4">
          Note: badges are stored in your browser's local storage. Clearing site data or switching browsers will reset your progress.
        </p>
      </div>
    </div>
  );
}
