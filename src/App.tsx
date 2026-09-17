import { useMemo, useRef, useState } from "react";
import { clients, initialActivity } from "./workshop/content";
import { healthLabels, reviewChecks } from "./workshop/rules";
import type { ActivityItem, Client, HealthState } from "./workshop/types";

type Filter = "all" | HealthState;
type IconName = "pulse" | "clients" | "activity" | "arrow" | "spark" | "check";

function Icon({ name }: { name: IconName }) {
  const paths = {
    pulse: <path d="M3 12h4l2.2-6 4.1 12 2.2-6H21" />,
    clients: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3.5 2.4-5 5.5-5s4.9 1.5 5.5 5M16 5.5a3 3 0 0 1 0 5.5M17 14c2.2.3 3.4 1.7 3.8 4" />
      </>
    ),
    activity: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
      </>
    ),
    arrow: <path d="m9 18 6-6-6-6" />,
    spark: <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export default function App() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Client>(clients[0]);
  const [activity, setActivity] = useState<ActivityItem[]>(initialActivity);
  const [approved, setApproved] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const detailRef = useRef<HTMLElement>(null);
  const visibleClients = useMemo(
    () => clients.filter((client) => filter === "all" || client.health === filter),
    [filter],
  );
  const counts = {
    healthy: clients.filter((client) => client.health === "healthy").length,
    watch: clients.filter((client) => client.health === "watch").length,
    risk: clients.filter((client) => client.health === "at-risk").length,
  };

  function selectClient(client: Client) {
    setSelected(client);
    setNotice("");
    requestAnimationFrame(() => detailRef.current?.focus());
  }

  function approveAction() {
    if (approved.includes(selected.id)) return;
    setApproved((items) => [...items, selected.id]);
    setActivity((items) => [
      {
        id: `${selected.id}-${Date.now()}`,
        title: "Action approved",
        detail: `${selected.name} plan approved for manager follow-up`,
        time: "Now",
      },
      ...items,
    ]);
    setNotice("Plan approved. No client message was sent.");
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Icon name="pulse" />
          </span>
          <strong>Thaloz Pulse</strong>
        </div>
        <nav aria-label="Main navigation">
          <a className="active" href="#clients">
            <Icon name="clients" />
            Clients
          </a>
          <a href="#activity">
            <Icon name="activity" />
            Activity
          </a>
        </nav>
        <div className="demo-label">
          <span />
          Fictional demo data
        </div>
      </aside>

      <main>
        <header className="topbar">
          <div>
            <span className="overline">OPERATIONS</span>
            <h1>Client happiness</h1>
          </div>
          <div className="avatar" aria-label="Signed in as Alex Morgan">
            AM
          </div>
        </header>

        <section className="summary-grid" aria-label="Client health summary">
          <article className="portfolio">
            <div>
              <span>Portfolio health</span>
              <strong>76</strong>
              <small>/100</small>
            </div>
            <div className="mini-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              <b>↑ 3 points</b> this month
            </p>
          </article>
          <article>
            <span>Healthy clients</span>
            <strong>{counts.healthy}</strong>
            <p>Stable or improving</p>
          </article>
          <article>
            <span>Needs attention</span>
            <strong className="amber">{counts.watch}</strong>
            <p>Review this week</p>
          </article>
          <article>
            <span>At risk</span>
            <strong className="coral">{counts.risk}</strong>
            <p>Action required</p>
          </article>
        </section>

        <section className="workspace" id="clients">
          <div className="client-list">
            <div className="section-head">
              <div>
                <h2>Client portfolio</h2>
                <p>Prioritized from current delivery signals</p>
              </div>
              <div className="filters" aria-label="Filter clients">
                {(["all", "at-risk", "watch", "healthy"] as Filter[]).map((item) => (
                  <button
                    key={item}
                    className={filter === item ? "selected" : ""}
                    onClick={() => setFilter(item)}
                  >
                    {item === "all" ? "All" : healthLabels[item]}
                  </button>
                ))}
              </div>
            </div>
            <div className="table" role="table" aria-label="Clients">
              <div className="table-row table-header" role="row">
                <span>Client</span>
                <span>Health</span>
                <span>Score</span>
                <span>Last contact</span>
                <span />
              </div>
              {visibleClients.map((client) => (
                <button
                  type="button"
                  aria-label={`Review ${client.name}`}
                  className={`table-row client-row ${selected.id === client.id ? "current" : ""}`}
                  key={client.id}
                  onClick={() => selectClient(client)}
                >
                  <span className="client-name">
                    <i>{client.name.charAt(0)}</i>
                    <span>
                      <b>{client.name}</b>
                      <small>{client.accountLead}</small>
                    </span>
                  </span>
                  <span>
                    <em className={`status ${client.health}`}>
                      <i />
                      {healthLabels[client.health]}
                    </em>
                  </span>
                  <span className="score">
                    <b>{client.score}</b>
                    <small className={client.trend < 0 ? "down" : "up"}>
                      {client.trend > 0 ? "+" : ""}
                      {client.trend}
                    </small>
                  </span>
                  <span>{client.lastContact}</span>
                  <span className="row-arrow">
                    <Icon name="arrow" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <aside
            className="detail-panel"
            ref={detailRef}
            tabIndex={-1}
            aria-label={`${selected.name} review`}
          >
            <div className="detail-title">
              <span className={`status ${selected.health}`}>
                <i />
                {healthLabels[selected.health]}
              </span>
              <h2>{selected.name}</h2>
              <p>Account lead · {selected.accountLead}</p>
            </div>
            <div className="score-panel">
              <div
                className={`score-ring ${selected.health}`}
                style={{ "--score": selected.score } as React.CSSProperties}
              >
                <strong>{selected.score}</strong>
                <small>/100</small>
              </div>
              <div>
                <span>Health score</span>
                <b className={selected.trend < 0 ? "down" : "up"}>
                  {selected.trend > 0 ? "+" : ""}
                  {selected.trend} points
                </b>
                <small>Last 30 days</small>
              </div>
            </div>
            <div className="insight">
              <span>
                <Icon name="spark" />
                AI summary
              </span>
              <p>{selected.summary}</p>
            </div>
            <div className="evidence">
              <h3>Observed evidence</h3>
              {selected.evidence.map((item) => (
                <p key={item}>
                  <Icon name="check" />
                  {item}
                </p>
              ))}
            </div>
            <div className="next-action">
              <span>PROPOSED NEXT ACTION</span>
              <p>{selected.nextAction}</p>
              {reviewChecks.map((check) => (
                <small key={check}>
                  <Icon name="check" />
                  {check}
                </small>
              ))}
            </div>
            <button
              className={`approve ${approved.includes(selected.id) ? "done" : ""}`}
              onClick={approveAction}
            >
              {approved.includes(selected.id) ? "Plan approved" : "Approve follow-up plan"}
            </button>
            {notice && (
              <p className="notice" role="status">
                {notice}
              </p>
            )}
          </aside>
        </section>

        <section className="activity-section" id="activity">
          <div>
            <span className="overline">AUDIT TRAIL</span>
            <h2>Recent activity</h2>
          </div>
          {activity.slice(0, 3).map((item) => (
            <article key={item.id}>
              <i />
              <div>
                <b>{item.title}</b>
                <p>{item.detail}</p>
              </div>
              <time>{item.time}</time>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
