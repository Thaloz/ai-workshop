import { execFileSync } from "node:child_process";

const labels = [
  ["needs-triage", "Needs initial classification", "BFDADC"],
  ["needs-info", "Needs information from a person", "D4C5F9"],
  ["ready-for-agent", "Ready for an agent to start", "00CBA3"],
  ["ready-for-human", "Needs human review or action", "865FFF"],
  ["wontfix", "Will not continue", "E4E669"],
];

function run(args) {
  return execFileSync("gh", args, { encoding: "utf8", stdio: "pipe" }).trim();
}

try {
  run(["auth", "status"]);
  const repository = run(["repo", "view", "--json", "nameWithOwner", "--jq", ".nameWithOwner"]);
  console.log(`Configuring workshop labels in ${repository}`);

  for (const [name, description, color] of labels) {
    run(["label", "create", name, "--description", description, "--color", color, "--force"]);
    console.log(`Ready: ${name}`);
  }

  console.log("GitHub workshop setup complete.");
} catch (error) {
  console.error("GitHub workshop setup failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
