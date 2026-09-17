import { reviewRules } from "./workshop/rules";
import { workshopCopy } from "./workshop/content";

const stateLabels = {
  ready: "Ready",
  review: "Review",
  missing: "Missing",
} as const;

export default function App() {
  return (
    <main>
      <header className="hero">
        <span className="eyebrow">{workshopCopy.area}</span>
        <h1>{workshopCopy.title}</h1>
        <p>{workshopCopy.description}</p>
        <button type="button">{workshopCopy.primaryAction}</button>
      </header>

      <section className="workflow" aria-label="Workflow">
        <article>
          <span>01</span>
          <h2>{workshopCopy.labels.input}</h2>
          <p>Capture the real request before the agent fills gaps with assumptions.</p>
        </article>
        <article>
          <span>02</span>
          <h2>{workshopCopy.labels.evidence}</h2>
          <p>Make the source of each important claim visible.</p>
        </article>
        <article>
          <span>03</span>
          <h2>{workshopCopy.labels.decision}</h2>
          <p>Keep approval and accountability with a named person.</p>
        </article>
      </section>

      <section className="review-panel" aria-labelledby="review-title">
        <div>
          <span className="eyebrow">Inspection gate</span>
          <h2 id="review-title">Would you accept this work?</h2>
        </div>
        <div className="rules">
          {reviewRules.map((rule) => (
            <article key={rule.id} className={`rule rule-${rule.state}`}>
              <div>
                <strong>{rule.label}</strong>
                <p>{rule.detail}</p>
              </div>
              <span>{stateLabels[rule.state]}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
