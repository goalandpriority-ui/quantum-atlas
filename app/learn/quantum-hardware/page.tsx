import Link from "next/link";
import QuantumStackDiagram from "@/components/diagrams/QuantumStackDiagram";

export const metadata = {
  title: "Quantum Hardware Explained | QuantumAtlas",
  description:
    "A tour of the major approaches to building qubits — superconducting circuits, trapped ions, photonics, neutral atoms, and topological qubits.",
};

export default function QuantumHardwarePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 4 · Hardware & Error Correction
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Hardware
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Building a quantum computer is one of the hardest engineering
          challenges in modern science. There's no single "right" way to
          build a qubit — instead, several fundamentally different physical
          approaches are being pursued in parallel, each with its own
          trade-offs. This article tours the major approaches and the key
          metrics used to compare them.
        </p>

        <h2>Superconducting qubits</h2>
        <p>
          Used by companies including IBM, Google, and Rigetti,{" "}
          <strong>superconducting qubits</strong> are tiny circuits made from
          superconducting materials — materials that conduct electricity with
          zero resistance below a certain temperature. These circuits are
          cooled to temperatures colder than outer space (a few thousandths
          of a degree above absolute zero) inside devices called dilution
          refrigerators.
        </p>
        <p>
          <strong>Advantages:</strong> Superconducting qubits can be
          manufactured using techniques adapted from the semiconductor
          industry, and gate operations are extremely fast (nanoseconds).{" "}
          <strong>Challenges:</strong> They require extreme cooling
          infrastructure, and coherence times (how long a qubit maintains its
          state) are relatively short compared to some other approaches.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <QuantumStackDiagram />
        </div>

        <h2>Trapped-ion qubits</h2>
        <p>
          Companies like IonQ and Quantinuum use{" "}
          <strong>trapped-ion qubits</strong> — individual atoms that have
          been stripped of an electron (making them charged "ions"), held in
          place by electromagnetic fields, and manipulated using precisely
          tuned lasers.
        </p>
        <p>
          <strong>Advantages:</strong> Trapped ions are naturally identical to
          each other (every ion of the same element is the same), have long
          coherence times, and tend to have high gate fidelity (accuracy).{" "}
          <strong>Challenges:</strong> Operations involving lasers are
          generally slower than electrical pulses, and scaling up to large
          numbers of ions while maintaining precise control is a significant
          engineering challenge.
        </p>

        <h2>Photonic qubits</h2>
        <p>
          <strong>Photonic quantum computers</strong> encode information in
          properties of particles of light (photons), such as polarization.
        </p>
        <p>
          <strong>Advantages:</strong> Photons don't require the extreme
          cooling that superconducting qubits do, and they're a natural fit
          for quantum communication and networking, since light is already
          how information travels over long distances (fiber optic cables).{" "}
          <strong>Challenges:</strong> Making photons reliably interact with
          each other — necessary for multi-qubit gates — is technically
          difficult.
        </p>

        <h2>Neutral atom qubits</h2>
        <p>
          <strong>Neutral atom</strong> approaches use arrays of uncharged
          atoms, held in place and arranged into custom patterns using laser
          "tweezers" (focused beams of light that can trap and move
          individual atoms).
        </p>
        <p>
          <strong>Advantages:</strong> Neutral atom arrays have shown promise
          for scaling to large numbers of qubits, since the laser-tweezer
          approach can arrange many atoms in flexible, reconfigurable
          patterns. <strong>Challenges:</strong> Like trapped ions, operations
          rely on precise laser control, and the field is relatively newer
          than superconducting and trapped-ion approaches.
        </p>

        <h2>Topological qubits</h2>
        <p>
          Pursued primarily by Microsoft,{" "}
          <strong>topological qubits</strong> are a more experimental approach
          that aims to encode quantum information in a way that's inherently
          resistant to certain types of errors, based on exotic physical
          phenomena predicted by theory but requiring extremely precise
          materials science to realize.
        </p>
        <p>
          <strong>Advantages:</strong> If realized successfully, topological
          qubits could dramatically reduce the error-correction overhead
          discussed in the previous article.{" "}
          <strong>Challenges:</strong> The underlying physical phenomena are
          extremely difficult to create and control reliably, and the
          approach remains earlier-stage than other technologies.
        </p>

        <h2>Key metrics for comparing quantum hardware</h2>
        <p>
          When comparing different quantum computers — whether different
          technologies or different generations of the same technology — a
          few key metrics matter more than raw qubit count alone:
        </p>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>What it measures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Qubit count</td>
              <td>How many physical qubits are on the chip or in the device</td>
            </tr>
            <tr>
              <td>Coherence time</td>
              <td>How long a qubit maintains its quantum state before decohering</td>
            </tr>
            <tr>
              <td>Gate fidelity</td>
              <td>How accurately a gate operation performs its intended transformation</td>
            </tr>
            <tr>
              <td>Connectivity</td>
              <td>Which qubits can directly interact with which others</td>
            </tr>
            <tr>
              <td>Gate speed</td>
              <td>How quickly operations can be performed</td>
            </tr>
          </tbody>
        </table>
        <p>
          A chip with a huge number of qubits but poor coherence times and
          low gate fidelity may, in practice, be less useful than a smaller
          chip with much higher quality — which is why "qubit count" alone is
          an incomplete (and sometimes misleading) headline number.
        </p>

        <h2>What's next?</h2>
        <p>
          You've now completed the core Learning Center — from your first
          qubit through algorithms and hardware. From here, explore the{" "}
          <Link href="/companies" className="text-quantum hover:underline">
            Companies Database
          </Link>{" "}
          to see how these technologies map onto real organizations, or
          revisit the{" "}
          <Link href="/guide/quantum-computing-complete-guide" className="text-quantum hover:underline">
            Complete Guide
          </Link>{" "}
          for a high-level recap of everything.
        </p>
        <p>
          <Link href="/learn" className="text-quantum hover:underline">
            ← Back to Learning Center
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Which qubit technology is "winning"?</h3>
        <p>
          There's no clear winner yet, and it's possible different
          technologies will end up best-suited for different applications
          (for example, photonic qubits for networking, superconducting or
          trapped-ion qubits for computation). Major companies are pursuing
          different bets, and the field is still evolving rapidly.
        </p>
        <h3>Why do quantum computers need to be so cold?</h3>
        <p>
          For superconducting qubits specifically, extreme cold is required
          both for the superconducting effect itself to occur, and to
          minimize thermal noise that would otherwise disturb the delicate
          quantum states. Other technologies (like trapped ions and
          photonics) have different — sometimes less extreme — environmental
          requirements.
        </p>
        <h3>Can I build or buy a quantum computer myself?</h3>
        <p>
          Building one from scratch requires highly specialized facilities and
          expertise. However, several companies offer cloud access to real
          quantum hardware, allowing anyone to write and run small quantum
          programs over the internet without owning the physical device.
        </p>
      </div>
    </article>
  );
}
