# Thaloz AI Workshop Starter

This is the public starter for the manager workshop. It contains fictional data only.

## What you will learn

You will use Codex to:

1. Clarify a role-specific idea.
2. Publish a specification.
3. Split the work into four linked tickets.
4. Dispatch two independent tickets in parallel.
5. Inspect and revise the delivered work.
6. Run a repeatable Playwright check.

You do not need to learn programming syntax. You remain responsible for requirements, access, review, and acceptance.

## Create your private project

1. Select **Use this template**.
2. Select your personal GitHub account as the owner.
3. Select **Private** visibility.
4. Create the repository.
5. Invite the workshop facilitator as a collaborator.
6. Open or clone the repository in Codex.

## Prepare the repository

Ask Codex to run these steps and show the evidence:

```bash
vp install
vp run setup:github
npx skills@latest add mattpocock/skills
vp check
vp build
```

Restart Codex if the installed skills do not appear.

## Select your brief

- `briefs/design.md`
- `briefs/administration-finance.md`
- `briefs/people-care.md`
- `briefs/talent.md`
- `briefs/operations.md`
- `briefs/ceo.md`

## The ticket graph

```text
Ticket 1: role language ---------\
                                  > Ticket 3: integrated experience --> Ticket 4: Playwright verification
Ticket 2: decision rules --------/
```

Tickets 1 and 2 may run together because they use separate edit boundaries. Ticket 3 must wait for both.

## Common commands

```bash
vp dev
vp check
vp build
vp run test:e2e
```

## Safety

- Use only fictional information in this workshop.
- Do not add credentials or access tokens to the repository.
- Do not automate employment, payment, or other consequential decisions.
- Review every external action before approval.
