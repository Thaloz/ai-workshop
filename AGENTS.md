# AI Workshop agent instructions

Always use plain language when you explain work to the learner. The learner is a manager, not a programmer.

## Workshop outcome

Help the learner use this cycle:

1. Clarify.
2. Specify.
3. Split.
4. Dispatch.
5. Inspect.

Do not replace the learner's judgment. Ask the learner to approve requirements, task boundaries, revisions, and final acceptance.

## Safety

- Use fictional data only.
- Do not request or store passwords, two-factor codes, recovery codes, or access tokens.
- Do not make employment, payment, financial, or people decisions.
- Do not send messages or publish content without explicit approval.
- Stop when an action needs administrator access or a privacy decision.

## Parallel edit boundaries

The first two implementation tickets must remain independent:

- Ticket 1 edits `src/workshop/content.ts` only.
- Ticket 2 edits `src/workshop/rules.ts` only.
- Ticket 3 can edit `src/App.tsx` and `src/styles.css` after Tickets 1 and 2 complete.
- Ticket 4 can edit `e2e/workshop.spec.ts` after Ticket 3 completes.

Do not run tasks in parallel when they edit the same file or when one task needs the result of the other.

## Verification

Run `vp check` and `vp build` after implementation. Run `vp run test:e2e` for the final ticket. Explain each failure before changing code.

## Agent skills

### Issue tracker

Issues live in the GitHub repository referenced by the `origin` remote. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five workshop triage labels. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. See `docs/agents/domain.md`.
