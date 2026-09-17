import type { WorkshopCopy } from "./types";

export type LearningHorizon = "days" | "weeks" | "months";
export type CapabilityItem = { name: string; explanation: string; connection: string };
export type LearnableTechnology = CapabilityItem & {
  horizon: LearningHorizon;
  prerequisite: string;
};
export type AdjacentTechnology = {
  priorTechnology: string;
  transferableCapability: string;
  targetTechnology: string;
  remainingGap: string;
};
export type ScreeningQuestion = { question: string; purpose: string; neutralFollowUps: string[] };
export type RoleBrief = {
  id: "software-engineering" | "data" | "infrastructure" | "security";
  name: string;
  explanation: string;
  outcomes: string[];
  assumptions: string[];
  durableCapabilities: CapabilityItem[];
  roleSpecificKnowledge: CapabilityItem[];
  learnableTechnologies: LearnableTechnology[];
  irrelevantPreferences: string[];
  adjacentTechnologies: AdjacentTechnology[];
  screeningQuestions: ScreeningQuestion[];
  investigationAreas: string[];
  technicalInterviewerTopics: string[];
};

export const workshopCopy: WorkshopCopy = {
  area: "Talent",
  title: "Technical recruiting briefing assistant",
  description:
    "Prepare for a technical search with plain-language role guidance, transferable capabilities, and clear handoffs for specialist judgment.",
  primaryAction: "Build role briefing",
  labels: { input: "Role intake", evidence: "Briefing evidence", decision: "Human approval" },
};

export const supportedRoleFamilies = [
  "Software engineering",
  "Data",
  "Infrastructure",
  "Security",
] as const;

export const safetyNotice =
  "Use fictional role information only. Do not enter candidate names, CVs, interview notes, answers, or other personal information. This briefing does not score, rank, compare, recommend, or make employment decisions, and it does not contact candidates.";

export const briefingSections = [
  "Role explanation",
  "Outcomes and assumptions",
  "Capability classification",
  "Adjacent technologies",
  "Recruiter screening guide",
  "Areas to investigate",
  "Technical-interviewer handoff",
] as const;

const capability = (name: string, explanation: string, connection: string): CapabilityItem => ({
  name,
  explanation,
  connection,
});
const learnable = (
  name: string,
  explanation: string,
  connection: string,
  horizon: LearningHorizon,
  prerequisite: string,
): LearnableTechnology => ({ name, explanation, connection, horizon, prerequisite });
const adjacent = (
  priorTechnology: string,
  transferableCapability: string,
  targetTechnology: string,
  remainingGap: string,
): AdjacentTechnology => ({
  priorTechnology,
  transferableCapability,
  targetTechnology,
  remainingGap,
});
const question = (
  text: string,
  purpose: string,
  ...neutralFollowUps: string[]
): ScreeningQuestion => ({ question: text, purpose, neutralFollowUps });

export const roleBriefs: RoleBrief[] = [
  {
    id: "software-engineering",
    name: "Software engineering",
    explanation:
      "A software engineer turns a product or operational need into reliable software. The role includes understanding the problem, making design trade-offs, writing and reviewing code, testing changes, and learning from what happens in production.",
    outcomes: [
      "Deliver a safe, tested change for a fictional customer-facing service.",
      "Leave the service easier to understand and operate than before the change.",
    ],
    assumptions: [
      "The team will confirm seniority, ownership boundaries, and on-call expectations with the hiring manager.",
      "Named languages and frameworks are context until tied to an approved responsibility.",
    ],
    durableCapabilities: [
      capability(
        "Problem decomposition",
        "Breaks a broad need into small, testable changes.",
        "Supports predictable delivery and useful technical discussions.",
      ),
      capability(
        "Reliable implementation",
        "Builds software that is understandable, testable, and safe to change.",
        "Connects directly to maintainable product outcomes.",
      ),
      capability(
        "Collaboration and communication",
        "Makes decisions and trade-offs understandable to teammates.",
        "Enables shared ownership without treating communication style as a technical proxy.",
      ),
    ],
    roleSpecificKnowledge: [
      capability(
        "Service and API design",
        "Understands how software components exchange data and responsibilities.",
        "Needed when the role owns a fictional order service and its integrations.",
      ),
      capability(
        "Production support",
        "Knows how to investigate and safely correct a live service problem.",
        "Required when the role includes incident response or on-call work.",
      ),
    ],
    learnableTechnologies: [
      learnable(
        "TypeScript",
        "A language that adds useful type checks to JavaScript.",
        "Can support a fictional web-service team’s codebase.",
        "weeks",
        "Comfort reading code, testing behavior, and working with data structures.",
      ),
      learnable(
        "A team’s web framework",
        "A library with conventions for organizing a web application.",
        "The framework is a local tool choice, not the durable capability itself.",
        "weeks",
        "Understanding of HTTP, application structure, and debugging.",
      ),
    ],
    irrelevantPreferences: [
      "Exact framework, editor, or operating-system preference when the underlying capability transfers.",
      "Prestige credentials or familiarity with a particular employer.",
    ],
    adjacentTechnologies: [
      adjacent(
        "Python",
        "Writing tested, maintainable application code",
        "TypeScript",
        "The person may need practice with TypeScript’s type system and the team’s web conventions.",
      ),
    ],
    screeningQuestions: [
      question(
        "Tell me about a change you made to a service and how you checked that it worked.",
        "Explores the person’s experience connecting implementation, testing, and outcomes.",
        "What was your part?",
        "What did you learn after release?",
      ),
      question(
        "Describe a technical trade-off you explained to teammates.",
        "Surfaces decision-making and collaboration through real work.",
        "What options did you consider?",
        "How did the team decide what to do next?",
      ),
    ],
    investigationAreas: [
      "Clarify which production responsibilities are expected and what support is available.",
      "Ask for another concrete example when a claim is broad or the person’s contribution is unclear; treat the gap as an invitation to investigate, not a rejection signal.",
      "Do not use communication style, career gaps, credentials, or employer familiarity as substitutes for evidence of technical work.",
    ],
    technicalInterviewerTopics: [
      "Architecture depth and service boundaries",
      "Code quality and testing trade-offs",
      "Production troubleshooting and performance decisions",
      "Any contested or specialist technical claim",
    ],
  },
  {
    id: "data",
    name: "Data",
    explanation:
      "A data professional makes information trustworthy and useful for decisions. Depending on the role, they define measures, move and transform data, analyze patterns, or build models while explaining uncertainty and limitations.",
    outcomes: [
      "Produce a reproducible answer to a fictional product question with its limits made clear.",
      "Help the team use a trustworthy measure or dataset for an agreed decision.",
    ],
    assumptions: [
      "The hiring manager will confirm whether the role is analytics, engineering, science, or a combination.",
      "A named query language or platform is environment context until its responsibility is clear.",
    ],
    durableCapabilities: [
      capability(
        "Question framing",
        "Turns a business question into a clear, answerable data question.",
        "Links analysis to an observable decision or outcome.",
      ),
      capability(
        "Data quality reasoning",
        "Checks whether data is complete, consistent, and fit for use.",
        "Protects decisions from hidden measurement problems.",
      ),
      capability(
        "Clear explanation",
        "Communicates findings, assumptions, and uncertainty in plain language.",
        "Keeps stakeholders able to review the reasoning.",
      ),
    ],
    roleSpecificKnowledge: [
      capability(
        "Metric definitions",
        "Understands how the team defines measures such as activation or retention.",
        "Needed for a fictional product analytics role.",
      ),
      capability(
        "Data privacy context",
        "Recognizes constraints on collecting and using sensitive data.",
        "An immediate safety need for data access and reporting.",
      ),
    ],
    learnableTechnologies: [
      learnable(
        "SQL dialect",
        "A language for asking questions of structured data.",
        "The exact dialect is a team environment choice.",
        "weeks",
        "Relational data concepts and careful question framing.",
      ),
      learnable(
        "A team’s orchestration tool",
        "Schedules and monitors repeatable data workflows.",
        "Useful after the person understands dependencies and failure handling.",
        "weeks",
        "Pipeline design, testing, and operational troubleshooting.",
      ),
    ],
    irrelevantPreferences: [
      "A specific dashboard product when the person can explain measures and evidence clearly.",
      "Credentials, presentation style, or employer familiarity as substitutes for data-work evidence.",
    ],
    adjacentTechnologies: [
      adjacent(
        "R",
        "Reproducible analysis and statistical reasoning",
        "Python",
        "The person may need practice with Python packaging, team conventions, and the target data libraries.",
      ),
    ],
    screeningQuestions: [
      question(
        "Tell me about a dataset you questioned before using it.",
        "Explores how the person finds quality issues and limits overclaiming.",
        "What did you check?",
        "How did the finding affect the work?",
      ),
      question(
        "Describe a time your analysis changed after someone challenged an assumption.",
        "Explores openness to review and transparent reasoning.",
        "What evidence did you revisit?",
        "What did you communicate afterward?",
      ),
    ],
    investigationAreas: [
      "Clarify whether the role is analytics, engineering, science, or a deliberate combination.",
      "Ask for a concrete example when a result is stated without its data source, uncertainty, or scope.",
      "Do not infer technical ability from credentials, presentation style, career gaps, or recognizable employers.",
    ],
    technicalInterviewerTopics: [
      "Data modeling and pipeline design",
      "Statistical or modeling judgment",
      "Data quality and privacy trade-offs",
      "Specialist claims or disputed technical answers",
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    explanation:
      "An infrastructure professional helps software run safely and consistently. They automate environments, improve delivery and observability, manage reliability trade-offs, and respond to operational problems.",
    outcomes: [
      "Make a fictional service’s delivery or operation more repeatable and observable.",
      "Improve recovery from a defined failure without hiding the remaining risk.",
    ],
    assumptions: [
      "The team will confirm service ownership, access boundaries, and the real on-call arrangement.",
      "A cloud provider or automation product is learnable context when systems fundamentals are present.",
    ],
    durableCapabilities: [
      capability(
        "Systems thinking",
        "Sees how services, dependencies, people, and failure modes interact.",
        "Supports reliable outcomes across the whole service.",
      ),
      capability(
        "Automation and repeatability",
        "Replaces fragile manual steps with documented, testable workflows.",
        "Reduces avoidable operational risk.",
      ),
      capability(
        "Incident learning",
        "Investigates impact and improves systems without blame.",
        "Turns operational experience into safer future work.",
      ),
    ],
    roleSpecificKnowledge: [
      capability(
        "Reliability practices",
        "Uses monitoring, service objectives, and recovery plans to manage reliability.",
        "Required for a fictional customer-facing platform.",
      ),
      capability(
        "On-call constraints",
        "Understands escalation, handoff, and sustainable support expectations.",
        "Must be confirmed with the hiring manager rather than assumed.",
      ),
    ],
    learnableTechnologies: [
      learnable(
        "A cloud provider",
        "A platform offering managed computing and storage services.",
        "Provider-specific knowledge can follow general systems skills.",
        "months",
        "Networking, operating systems, automation, and failure analysis.",
      ),
      learnable(
        "Infrastructure as code tool",
        "Describes environments so they can be reviewed and recreated.",
        "The syntax is learnable when the underlying environment model is sound.",
        "weeks",
        "Version control, configuration management, and dependency reasoning.",
      ),
    ],
    irrelevantPreferences: [
      "A particular cloud brand when the role’s systems and reliability capabilities transfer.",
      "A certification or polished communication style as a substitute for operational evidence.",
    ],
    adjacentTechnologies: [
      adjacent(
        "A private data center",
        "Capacity planning, networking, and failure recovery",
        "Cloud infrastructure",
        "The person may need practice with provider APIs, managed services, and cloud cost controls.",
      ),
    ],
    screeningQuestions: [
      question(
        "Tell me about an operational problem you investigated from first signal to recovery.",
        "Explores troubleshooting, communication, and learning from production work.",
        "What evidence guided your next step?",
        "What changed after the incident?",
      ),
      question(
        "Describe a manual process you made more repeatable.",
        "Explores automation and the safety checks around it.",
        "What could still go wrong?",
        "How did others review or use the change?",
      ),
    ],
    investigationAreas: [
      "Confirm the actual on-call schedule, escalation path, and recovery expectations.",
      "Ask for evidence of personal contribution when incident stories remain only at team level.",
      "Do not treat a career gap, communication style, credential, or unfamiliar employer as an operational proxy.",
    ],
    technicalInterviewerTopics: [
      "Architecture and reliability trade-offs",
      "Production troubleshooting",
      "Security implications of infrastructure changes",
      "Performance, capacity, and recovery planning",
    ],
  },
  {
    id: "security",
    name: "Security",
    explanation:
      "A security professional helps a team understand and reduce technology risk. The work may include threat modeling, secure design, detection, response, or governance, always balancing protection with the system’s real use.",
    outcomes: [
      "Make a fictional system’s material risks and practical mitigations understandable to its owners.",
      "Help the team verify that an agreed security control reduces the intended risk.",
    ],
    assumptions: [
      "The hiring manager will confirm the security specialty, authority, and escalation responsibilities.",
      "A scanning product or cloud control is learnable context, not proof of security judgment by itself.",
    ],
    durableCapabilities: [
      capability(
        "Risk-based reasoning",
        "Connects a possible weakness to impact, likelihood, and practical controls.",
        "Keeps security work tied to meaningful safety outcomes.",
      ),
      capability(
        "Adversarial curiosity",
        "Asks how a system could fail or be misused and tests those assumptions.",
        "Improves defensive design without relying on trivia.",
      ),
      capability(
        "Responsible communication",
        "Makes risk understandable and coordinates action across teams.",
        "Supports timely remediation and shared accountability.",
      ),
    ],
    roleSpecificKnowledge: [
      capability(
        "Threat modeling",
        "Examines assets, trust boundaries, threats, and mitigations for a system.",
        "Needed when the role reviews a fictional payments workflow.",
      ),
      capability(
        "Incident response",
        "Coordinates evidence, containment, recovery, and learning during a security event.",
        "Required only if response work is part of the approved role scope.",
      ),
    ],
    learnableTechnologies: [
      learnable(
        "A security scanning platform",
        "Automates checks for selected classes of weakness.",
        "The product is learnable after security reasoning and signal interpretation.",
        "weeks",
        "Threat concepts, software basics, and careful evidence review.",
      ),
      learnable(
        "A team’s cloud security controls",
        "Provider-specific settings that help protect identities, networks, and data.",
        "Tool familiarity can follow foundational security and cloud knowledge.",
        "months",
        "Access control, networking, logging, and risk-based prioritization.",
      ),
    ],
    irrelevantPreferences: [
      "A particular scanning product when the person can reason about risk and evidence.",
      "Credentials, confidence, or familiarity with a named employer as substitutes for security work.",
    ],
    adjacentTechnologies: [
      adjacent(
        "Application security reviews",
        "Finding abuse paths and explaining mitigations",
        "Cloud security",
        "The person may need practice with provider identity models, network boundaries, and shared-responsibility details.",
      ),
    ],
    screeningQuestions: [
      question(
        "Tell me about a security concern you investigated and how you chose what to do next.",
        "Explores evidence-based risk reasoning and practical prioritization.",
        "What assumptions did you test?",
        "Who needed to understand the trade-off?",
      ),
      question(
        "Describe a time a secure recommendation had to fit an existing system or workflow.",
        "Explores how the person balances protection, usability, and implementation reality.",
        "What constraint shaped the approach?",
        "How did you verify the change?",
      ),
    ],
    investigationAreas: [
      "Clarify whether the role focuses on application, cloud, detection, response, governance, or another specialty.",
      "Ask for the evidence and scope behind broad claims; uncertainty should lead to specialist review, not rejection.",
      "Do not use confidence, credentials, career gaps, or employer familiarity as technical evidence.",
    ],
    technicalInterviewerTopics: [
      "Security judgment and threat modeling",
      "Architecture and secure-design trade-offs",
      "Production or incident troubleshooting",
      "Specialist claims and contested technical answers",
    ],
  },
];
