export type WorkshopCopy = {
  area: string;
  title: string;
  description: string;
  primaryAction: string;
  labels: {
    input: string;
    evidence: string;
    decision: string;
  };
};

export type ReviewRule = {
  id: string;
  label: string;
  detail: string;
  state: "ready" | "review" | "missing";
};
