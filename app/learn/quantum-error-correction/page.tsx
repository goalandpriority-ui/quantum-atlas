import Link from "next/link";
import ErrorCorrectionDiagram from "@/components/diagrams/ErrorCorrectionDiagram";

export const metadata = {
  title: "Quantum Error Correction Explained | QuantumAtlas",
  description:
    "How quantum computers fight decoherence and noise — physical vs logical qubits, error correction codes, and the path to fault-tolerant quantum computing.",
};

export default function QuantumErrorCorrectionPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 4 · Hardware & Error Correction
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Error Correction
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Every algorithm and every gate discussed so far has assumed
          qubits behave perfectly. In reality, qubits are extraordinarily
          fragile, and errors creep in constantly.{" "}
          <strong>Quantum Error Correction (QEC)</strong> is the field
          dedicated to detecting and fixing these errors — and it's widely
          considered the single biggest barrier between today's experimental
          machines and tomorrow's transformative ones.
        </p>

        <h2>Why errors are a bigger problem in quantum computing</h2>
        <p>
          Classical computers experience errors too, but they're
          extraordinarily rare and easy to fix — a classical bit is either 0
          or 1, and "majority voting" across redundant copies works well.
          Quantum computing faces three compounding challenges:
        </p>
        <ul>
          <li>
            <strong>Decoherence.</strong> Any unwanted interaction between a
            qubit and its environment — stray electromagnetic fields,
            vibrations, temperature fluctuations — can cause it to lose its
            quantum state. The longer a computation takes, the more
            opportunities decoherence has to strike.
          </li>
          <li>
            <strong>Continuous errors.</strong> A classical bit either flips
            or doesn't. A qubit's state is described by continuous values
            (the probability amplitudes), so errors can be tiny, partial
            shifts — not just clean flips — making them harder to detect and
            categorize.
          </li>
          <li>
            <strong>The no-cloning theorem.</strong> You can't simply "make a
            backup copy" of a qubit's state the way you'd copy a file,
            because quantum mechanics forbids creating an identical copy of
            an unknown quantum state. Classical error correction's simplest
            trick — redundancy through copying — isn't directly available.
          </li>
        </ul>

        <h2>Physical qubits vs. logical qubits</h2>
        <p>
          The solution to all three challenges is to spread the information
          of <strong>one</strong> reliable "logical" qubit across{" "}
          <strong>many</strong> imperfect "physical" qubits, using clever
          encoding schemes that allow errors to be detected and corrected
          without ever directly "looking at" (and thus collapsing) the
          underlying quantum information.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <ErrorCorrectionDiagram />
        </div>

        <p>
          This is why you'll often see two very different numbers discussed
          in quantum computing news: the number of <strong>physical
          qubits</strong> on a chip (which can be in the hundreds or
          thousands today) and the number of <strong>logical qubits</strong>{" "}
          that those physical qubits could support after error correction
          (which, with current overheads, would be a much smaller number).
        </p>

        <h2>The basic idea: encoding and syndrome measurement</h2>
        <p>
          A simplified illustration: in a classical "repetition code," you
          might represent a single bit using three copies (0 becomes 000, 1
          becomes 111). If one copy flips due to noise (e.g., 010), majority
          voting reveals the original value was 0 and corrects the error.
        </p>
        <p>
          Quantum error correction codes use a more sophisticated version of
          this idea. Multiple physical qubits are entangled together to encode
          one logical qubit. Periodically, special measurements called{" "}
          <strong>syndrome measurements</strong> are performed — these reveal{" "}
          <em>whether</em> and <em>where</em> an error occurred, without
          revealing the actual quantum information being protected. Based on
          the syndrome, a correction can be applied to fix the error.
        </p>

        <h2>Surface codes and the threshold theorem</h2>
        <p>
          The most widely studied approach for near-term hardware is the{" "}
          <strong>surface code</strong>, which arranges physical qubits in a
          2D grid with neighboring qubits performing local syndrome
          measurements. Surface codes are popular because they only require
          qubits to interact with their immediate neighbors — a good match
          for how superconducting and other chip-based qubits are physically
          laid out.
        </p>
        <p>
          A foundational result called the <strong>threshold theorem</strong>{" "}
          states that if the error rate of individual physical qubits and
          gates is below a certain threshold, then increasing the number of
          physical qubits per logical qubit can drive the logical error rate
          arbitrarily low — in principle allowing arbitrarily long
          computations. Getting hardware error rates reliably below this
          threshold, and then scaling up the number of physical qubits per
          logical qubit, is the central challenge of the field.
        </p>

        <h2>NISQ vs. fault-tolerant quantum computing</h2>
        <p>
          Today's quantum computers are often described as being in the{" "}
          <strong>NISQ era</strong> — "Noisy Intermediate-Scale Quantum."
          These machines have enough physical qubits to be interesting, but
          not enough error correction overhead to create many (or any) fully
          protected logical qubits. Algorithms designed for the NISQ era
          (like variational algorithms) try to extract useful results despite
          this noise.
        </p>
        <p>
          The long-term goal is <strong>fault-tolerant quantum
          computing</strong> — machines with enough error-corrected logical
          qubits, running for long enough, to execute algorithms like Shor's
          Algorithm at a scale that matters. Closing this gap is widely
          viewed as requiring continued improvements in both the quality
          (error rates) and quantity (count) of physical qubits.
        </p>

        <h2>What's next?</h2>
        <p>
          Error correction is fundamentally about hardware — the physical
          qubits, their error rates, and how they're wired together. Let's
          take a tour of how quantum hardware is actually built.
        </p>
        <p>
          <Link href="/learn/quantum-hardware" className="text-quantum hover:underline">
            Continue to: Quantum Hardware →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>How many physical qubits are needed for one logical qubit?</h3>
        <p>
          It depends on the error correction code and the physical error
          rates of the hardware, but commonly discussed estimates for surface
          codes range from dozens to over a thousand physical qubits per
          logical qubit. Reducing this overhead is a major research goal.
        </p>
        <h3>Can software fix quantum errors without special hardware?</h3>
        <p>
          Error correction requires extra physical qubits and specific
          control sequences, so it's a combination of hardware design and
          software/control systems working together — not something that can
          be added purely in software after the fact.
        </p>
        <h3>Why don't we just use better-quality qubits instead of error correction?</h3>
        <p>
          Improving individual qubit quality is also an active and important
          area of research, and the two approaches go hand in hand: better
          physical qubits reduce the error-correction overhead needed, but
          some form of error correction is expected to remain necessary for
          large, long-running computations regardless of how good individual
          qubits become.
        </p>
      </div>
    </article>
  );
}
