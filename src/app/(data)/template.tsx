const legalAiServices = [
    {
        name: "AI-Powered Legal Research",
        description: "Quickly find relevant case laws, statutes, and legal precedents using AI.",
        category: "Legal Research & Case Law Analysis",
        icon: "/search.png",
        slug: "ai_powered_legal_research",
        form: [
            { label: "Research Query", type: "text", placeholder: "Enter legal issue or query" },
            { label: "Jurisdiction", type: "text", placeholder: "Optional: Specify jurisdiction" },
            { label: "Date Range", type: "text", placeholder: "Optional: Specify date range" }
        ],
        aiPrompt: "Perform legal research using the query: [Research Query]. Consider jurisdiction: [Jurisdiction] and date range: [Date Range] if provided. Return relevant case laws, statutes, and legal precedents with citations."
    },
    {
        name: "Case Summarization",
        description: "Summarizes lengthy judgments and legal documents into concise insights.",
        category: "Legal Research & Case Law Analysis",
        icon: "/data-analyst.png",
        slug: "case-summarization",
        form: [
            { label: "Document Text", type: "textarea", placeholder: "Paste the legal document text here" },
            { label: "Summary Length", type: "text", placeholder: "Optional: Specify desired summary length" }
        ],
        aiPrompt: "Summarize the following legal document text: [Document Text]. Provide a concise summary highlighting key points and conclusions. Adjust the summary length if specified."
    },
    {
        name: "Statutory Interpretation",
        description: "AI-powered explanations of complex legal provisions and statutes.",
        category: "Legal Research & Case Law Analysis",
        icon: "/book.png",
        slug: "statutory-interpretation",
        form: [
            { label: "Statute Text", type: "textarea", placeholder: "Enter the statute or legal provision text" },
            { label: "Context or Specific Question", type: "textarea", placeholder: "Optional: Provide context or specific questions for interpretation" }
        ],
        aiPrompt: "Interpret the following statute or legal provision: [Statute Text]. Consider the context or specific question: [Context or Specific Question]. Provide a detailed explanation and analysis of its legal meaning."
    },
    /* 
    {
        name: "Contract & Agreement Drafting",
        description: "Auto-generates legal contracts and agreements based on templates and client input.",
        category: "Document Automation & Drafting",
        icon: "/editing.png",
        slug: "contract-agreement-drafting",
        form: [
            { label: "Contract Type", type: "text", placeholder: "e.g., NDA, Employment, Sales Agreement" },
            { label: "Parties Involved", type: "textarea", placeholder: "List all parties involved in the contract" },
            { label: "Key Terms", type: "textarea", placeholder: "Outline the key terms and conditions" },
            { label: "Effective Date", type: "date", placeholder: "Select the effective date" },
            { label: "Jurisdiction", type: "text", placeholder: "Enter applicable jurisdiction" }
        ],
        aiPrompt: "Draft a [Contract Type] contract between [Parties Involved] including the following terms: [Key Terms]. The contract should be effective from [Effective Date] and comply with the laws of [Jurisdiction]. Ensure the agreement is comprehensive and legally sound."
    },
    */
    {
        name: "Pleadings & Legal Briefs",
        description: "Assists in drafting motions, petitions, and legal arguments.",
        category: "Document Automation & Drafting",
        icon: "/file.png",
        slug: "pleadings-legal-briefs",
        form: [
            { label: "Case Summary", type: "textarea", placeholder: "Provide a summary of the case" },
            { label: "Legal Issues", type: "textarea", placeholder: "List the legal issues involved" },
            { label: "Relevant Statutes/Precedents", type: "textarea", placeholder: "Mention any relevant statutes or precedents" },
            { label: "Desired Outcome", type: "textarea", placeholder: "Specify the desired legal outcome" }
        ],
        aiPrompt: "Based on the case summary: [Case Summary], legal issues: [Legal Issues], and relevant precedents: [Relevant Statutes/Precedents], draft a persuasive legal brief or pleading that advocates for [Desired Outcome]."
    },
    /* 
    {
        name: "Clause Suggestion & Risk Analysis",
        description: "AI suggests relevant clauses and identifies potential risks in contracts.",
        category: "Document Automation & Drafting",
        icon: "/warning.png",
        slug: "clause-suggestion-risk-analysis",
        form: [
            { label: "Contract/Clause Text", type: "textarea", placeholder: "Enter the contract or clause text" },
            { label: "Areas of Concern", type: "textarea", placeholder: "Optional: Specify any particular concerns or focus areas" }
        ],
        aiPrompt: "Analyze the provided contract or clause text: [Contract/Clause Text]. Suggest additional relevant clauses and identify potential risks or compliance issues, particularly focusing on: [Areas of Concern]."
    },
    */
    {
        name: "Contract Review & Analysis",
        description: "Detects errors, missing clauses, and compliance issues in contracts.",
        category: "Legal Due Diligence & Compliance",
        icon: "/clipboard.png",
        slug: "contract-review-analysis",
        form: [
            { label: "Contract Text", type: "textarea", placeholder: "Paste the contract text here" },
            { label: "Review Focus", type: "text", placeholder: "Optional: Specify focus areas (e.g., errors, missing clauses)" }
        ],
        aiPrompt: "Review the following contract text: [Contract Text]. Identify any errors, missing clauses, or compliance issues. Provide clear suggestions for improvement, particularly focusing on: [Review Focus]."
    },
    {
        name: "Regulatory Compliance Check",
        description: "Ensures legal documents adhere to specific laws and regulations.",
        category: "Legal Due Diligence & Compliance",
        icon: "/security.png",
        slug: "regulatory-compliance-check",
        form: [
            { label: "Document Text", type: "textarea", placeholder: "Enter the legal document text" },
            { label: "Relevant Regulations or Jurisdiction", type: "text", placeholder: "Specify the relevant regulations or jurisdiction" }
        ],
        aiPrompt: "Assess the following legal document: [Document Text]. Evaluate its compliance with the specified regulations or jurisdiction: [Relevant Regulations or Jurisdiction]. Highlight any areas needing adjustments to meet legal standards."
    },
    /* 
    {
        name: "Intellectual Property (IP) Management",
        description: "Tracks trademarks, copyrights, and patents to ensure proper management.",
        category: "Legal Due Diligence & Compliance",
        icon: "/certificate.png",
        slug: "intellectual-property-management",
        form: [
            { label: "IP Type", type: "text", placeholder: "e.g., Trademark, Copyright, Patent" },
            { label: "IP Name/Title", type: "text", placeholder: "Enter the name or title" },
            { label: "Registration Number", type: "text", placeholder: "Enter the registration number (if applicable)" },
            { label: "Date of Registration", type: "date", placeholder: "Select the date of registration" },
            { label: "Additional Details", type: "textarea", placeholder: "Optional: Provide any additional information" }
        ],
        aiPrompt: "Manage the following intellectual property details: [IP Type] - [IP Name/Title], Registration Number: [Registration Number], Date of Registration: [Date of Registration]. Provide recommendations for proper management and alerts for renewals or potential issues, considering: [Additional Details]."
    },
    {
        name: "AI-Powered Case Prediction",
        description: "Analyzes past judgments to predict possible case outcomes.",
        category: "Case & Litigation Management",
        icon: "/bar-chart.png",
        slug: "ai-powered-case-prediction",
        form: [
            { label: "Case Details", type: "textarea", placeholder: "Provide detailed case facts and background" },
            { label: "Key Facts", type: "textarea", placeholder: "List key facts relevant to the case" },
            { label: "Relevant Precedents", type: "textarea", placeholder: "Mention relevant past cases or judgments" },
            { label: "Jurisdiction", type: "text", placeholder: "Optional: Specify jurisdiction" }
        ],
        aiPrompt: "Based on the case details: [Case Details], key facts: [Key Facts], and relevant precedents: [Relevant Precedents], predict the likely outcome of the case. Provide reasoning and reference applicable legal principles, considering the jurisdiction: [Jurisdiction] if provided."
    },
    {
        name: "Automated Timeline & Task Management",
        description: "Organizes case progress, deadlines, and filings automatically.",
        category: "Case & Litigation Management",
        icon: "/calendar.png",
        slug: "automated-timeline-task-management",
        form: [
            { label: "Case Name/ID", type: "text", placeholder: "Enter case name or identifier" },
            { label: "Start Date", type: "date", placeholder: "Select the start date of the case" },
            { label: "Key Deadlines", type: "textarea", placeholder: "List important deadlines and dates" },
            { label: "Tasks/Events", type: "textarea", placeholder: "Detail tasks or events related to the case" }
        ],
        aiPrompt: "Create a detailed timeline and task management plan for case [Case Name/ID] starting from [Start Date]. Include key deadlines: [Key Deadlines] and tasks/events: [Tasks/Events]. Organize the timeline to highlight priority actions and milestones."
    },
    */
    {
        name: "Client Communication Assistant",
        description: "AI chatbot to answer common legal queries and assist clients.",
        category: "Case & Litigation Management",
        icon: "/messenger.png",
        slug: "client-communication-assistant",
        form: [
            { label: "Client Query", type: "textarea", placeholder: "Enter the client's legal query" },
            { label: "Additional Context", type: "textarea", placeholder: "Optional: Provide any additional context" }
        ],
        aiPrompt: "Respond to the following client query: [Client Query]. Consider any additional context provided: [Additional Context]. Provide a clear, concise, and legally sound answer."
    },
    /* 
    {
        name: "Document Classification & Tagging",
        description: "Automatically categorizes case-related documents for easy access.",
        category: "E-Discovery & Evidence Analysis",
        icon: "/folder.png",
        slug: "document-classification-tagging",
        form: [
            { label: "Document Text", type: "textarea", placeholder: "Paste the document text here" },
            { label: "Keywords/Tags", type: "text", placeholder: "Optional: Provide keywords or tags" }
        ],
        aiPrompt: "Classify and tag the following document: [Document Text]. Use appropriate categories and tags to ensure easy retrieval, incorporating the keywords if provided: [Keywords/Tags]."
    },
    {
        name: "Forensic Document Analysis",
        description: "Detects forgery, inconsistencies, and missing information in legal documents.",
        category: "E-Discovery & Evidence Analysis",
        icon: "/view.png",
        slug: "forensic-document-analysis",
        form: [
            { label: "Document Text", type: "textarea", placeholder: "Enter the document text for analysis" },
            { label: "Specific Areas to Analyze", type: "textarea", placeholder: "Optional: Specify any particular areas to focus on" }
        ],
        aiPrompt: "Conduct a forensic analysis on the following document: [Document Text]. Identify any signs of forgery, inconsistencies, or missing information, with a focus on: [Specific Areas to Analyze]."
    },
    */
    {
        name: "Chat & Email Analysis",
        description: "Extracts relevant conversations from client communications for legal insights.",
        category: "E-Discovery & Evidence Analysis",
        icon: "/email.png",
        slug: "chat-email-analysis",
        form: [
            { label: "Chat/Email Transcript", type: "textarea", placeholder: "Paste the chat or email transcript here" },
            { label: "Date Range", type: "text", placeholder: "Optional: Specify a date range" }
        ],
        aiPrompt: "Analyze the following chat/email transcript: [Chat/Email Transcript]. Extract and summarize key legal points and relevant conversations, considering the date range: [Date Range] if provided."
    },
    {
        name: "Client Intake & Legal Consultation",
        description: "AI chatbot gathers case details and provides initial guidance.",
        category: "Legal Chatbots & Virtual Assistants",
        icon: "/user.png",
        slug: "client-intake-legal-consultation",
        form: [
            { label: "Client Name", type: "text", placeholder: "Enter the client's name" },
            { label: "Contact Information", type: "text", placeholder: "Enter contact details" },
            { label: "Case Details", type: "textarea", placeholder: "Describe the case details" },
            { label: "Preferred Consultation Method", type: "text", placeholder: "e.g., phone, email, in-person" }
        ],
        aiPrompt: "Collect the following client information: Name: [Client Name], Contact: [Contact Information], and Case Details: [Case Details]. Provide an initial legal consultation summary and recommend next steps based on the details provided."
    },
    {
        name: "AI-Powered Q&A System",
        description: "Lawyers can ask AI about laws, precedents, or case strategies.",
        category: "Legal Chatbots & Virtual Assistants",
        icon: "/help-web-button.png",
        slug: "ai-powered-qa-system",
        form: [
            { label: "Legal Question", type: "textarea", placeholder: "Enter your legal question" },
            { label: "Context or Background Information", type: "textarea", placeholder: "Optional: Provide context or background" }
        ],
        aiPrompt: "Answer the following legal question: [Legal Question]. Consider the provided context: [Context or Background Information] and provide a detailed, accurate response with relevant legal references."
    },
    /* 
    {
        name: "Automated Appointment Scheduling",
        description: "Clients can book consultations with lawyers through AI scheduling.",
        category: "Legal Chatbots & Virtual Assistants",
        icon: "/schedule.png",
        slug: "automated-appointment-scheduling",
        form: [
            { label: "Client Name", type: "text", placeholder: "Enter your name" },
            { label: "Contact Information", type: "text", placeholder: "Provide your contact details" },
            { label: "Preferred Date and Time", type: "datetime-local", placeholder: "Select preferred date and time" },
            { label: "Select Lawyer", type: "text", placeholder: "Optional: Specify a lawyer" }
        ],
        aiPrompt: "Schedule an appointment for client [Client Name] with contact details [Contact Information] on [Preferred Date and Time]. If a specific lawyer is requested ([Select Lawyer]), confirm availability or suggest alternatives."
    },
    {
        name: "Automated Time Logging",
        description: "Tracks billable hours using AI to ensure accurate legal billing.",
        category: "AI-Powered Billing & Time Tracking",
        icon: "/wall-clock.png",
        slug: "automated-time-logging",
        form: [
            { label: "Case ID", type: "text", placeholder: "Enter the case identifier" },
            { label: "Start Time", type: "datetime-local", placeholder: "Select start time" },
            { label: "End Time", type: "datetime-local", placeholder: "Select end time" },
            { label: "Breaks", type: "text", placeholder: "Optional: Enter break durations" },
            { label: "Task Description", type: "textarea", placeholder: "Describe the task performed" }
        ],
        aiPrompt: "Log the following time entry for case [Case ID]: Start Time: [Start Time], End Time: [End Time], Breaks: [Breaks]. Summarize the billable hours along with the task description: [Task Description]."
    },
    */
    {
        name: "Billing & Invoice Generation",
        description: "Generates and sends invoices automatically based on billable hours.",
        category: "AI-Powered Billing & Time Tracking",
        icon: "/invoice.png",
        slug: "billing-invoice-generation",
        form: [
            { label: "Client Name", type: "text", placeholder: "Enter the client's name" },
            { label: "Case ID", type: "text", placeholder: "Enter the case identifier" },
            { label: "Billable Hours", type: "number", placeholder: "Enter total billable hours" },
            { label: "Hourly Rate", type: "number", placeholder: "Enter the hourly rate" },
            { label: "Additional Expenses", type: "number", placeholder: "Optional: Enter any additional expenses" }
        ],
        aiPrompt: "Generate an invoice for client [Client Name] regarding case [Case ID] based on billable hours: [Billable Hours] at an hourly rate of [Hourly Rate]. Include any additional expenses: [Additional Expenses] if applicable. Ensure the invoice is detailed and complies with legal billing standards."
    },
    /* 
    {
        name: "Cost Estimation & Budget Planning",
        description: "AI helps predict legal expenses and plan budgets for clients.",
        category: "AI-Powered Billing & Time Tracking",
        icon: "/rupee.png",
        slug: "cost-estimation-budget-planning",
        form: [
            { label: "Case Details", type: "textarea", placeholder: "Provide details of the case" },
            { label: "Historical Expenses", type: "textarea", placeholder: "Optional: Provide historical expense data" },
            { label: "Scope of Work", type: "textarea", placeholder: "Describe the scope of work" },
            { label: "Estimated Duration", type: "text", placeholder: "Enter estimated duration" }
        ],
        aiPrompt: "Estimate the legal costs for the following case details: [Case Details]. Consider historical expenses: [Historical Expenses], scope of work: [Scope of Work], and estimated duration: [Estimated Duration]. Provide a detailed cost estimation and budget plan."
    }
    */
];

export default legalAiServices;
