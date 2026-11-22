import type { ComponentType } from "react";
import {
  ChshCalculator,
  TeleportationFidelityCalculator,
  EntanglementCalculator,
  GroverCalculator,
  SimulationMemoryCalculator,
} from "./CalcSetA";
import {
  SurfaceCodeCalculator,
  CircuitSuccessCalculator,
  CoherenceCalculator,
  MitigationCalculator,
  ShotCountCalculator,
} from "./CalcSetB";
import {
  SpeedupBreakEvenCalculator,
  RsaEstimatorCalculator,
  SensingPrecisionCalculator,
  PhotonLossCalculator,
  RydbergCalculator,
} from "./CalcSetC";
import {
  MoscaCalculator,
  PqcSizeCalculator,
  SymmetricSecurityCalculator,
  PasswordQuantumCalculator,
  QkdRateCalculator,
} from "./CalcSetD";

// Not a client module on purpose: server pages index this map and render the client components it holds.
export const calculatorTools: Record<string, ComponentType> = {
  "chsh-bell-test-calculator": ChshCalculator,
  "teleportation-fidelity-calculator": TeleportationFidelityCalculator,
  "two-qubit-entanglement-calculator": EntanglementCalculator,
  "grover-search-calculator": GroverCalculator,
  "classical-simulation-memory-calculator": SimulationMemoryCalculator,
  "surface-code-overhead-calculator": SurfaceCodeCalculator,
  "circuit-success-probability-calculator": CircuitSuccessCalculator,
  "coherence-gate-error-calculator": CoherenceCalculator,
  "error-mitigation-overhead-calculator": MitigationCalculator,
  "shot-count-calculator": ShotCountCalculator,
  "quadratic-speedup-breakeven-calculator": SpeedupBreakEvenCalculator,
  "rsa-break-resource-estimator": RsaEstimatorCalculator,
  "quantum-sensing-precision-calculator": SensingPrecisionCalculator,
  "photon-loss-budget-calculator": PhotonLossCalculator,
  "rydberg-blockade-radius-calculator": RydbergCalculator,
  "mosca-migration-risk-calculator": MoscaCalculator,
  "pqc-size-bandwidth-calculator": PqcSizeCalculator,
  "symmetric-key-quantum-security-calculator": SymmetricSecurityCalculator,
  "password-quantum-guessing-calculator": PasswordQuantumCalculator,
  "qkd-key-rate-distance-calculator": QkdRateCalculator,
};
