import type { HealthState } from "./types";

export const healthLabels: Record<HealthState, string> = {
  healthy: "Healthy",
  watch: "Watch",
  "at-risk": "At risk",
};

export const reviewChecks = [
  "The recommendation cites observed evidence.",
  "A named manager approves the action.",
  "No client message is sent automatically.",
];
