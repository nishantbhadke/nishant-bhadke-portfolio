export const profile = {
  name: "Nishant Bhadke",
  role: ".NET Backend Engineer",
  location: "Nashik, India",
  experience: "4.5+ years",
  email: "nishantbhadke119@gmail.com",
  phone: "+91 9172773982",
  linkedin: "https://www.linkedin.com/in/nishant-bhadke-983837185/",
  github: "https://github.com/",
  headline:
    "I build resilient banking platforms, high-performance APIs, and compliance workflows that keep enterprise operations moving.",
  summary:
    "Software engineer focused on .NET Core, SQL Server, secure API design, and cloud-ready delivery for BFSI systems. My work spans loan origination, account workflows, data migration, Redis-backed performance improvements, third-party integrations, and production support.",
  stack: [".NET Core", "C#", "SQL Server", "REST APIs", "Docker", "AWS", "Redis"],
  metrics: [
    { value: "4.5+", label: "years shipping production software" },
    { value: "95%", label: "database load reduction with Redis caching" },
    { value: "40-45%", label: "SQL performance improvement on core workflows" }
  ],
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Prototype", href: "#prototype" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ]
};

export const work = [
  {
    company: "Winjit Technologies",
    role: "Software Engineer",
    period: "Sep 2021 - Present",
    location: "India",
    description:
      "Own backend delivery for BFSI applications where reliability, compliance, and workflow accuracy directly affect lending and account operations.",
    highlights: [
      "Engineered BCMS workflows for new-to-bank, top-up, regular renewal, proactive renewal, and parallel renewal JLG loan products.",
      "Reduced SQL execution time by 40-45% through query tuning and schema-aware data access improvements.",
      "Implemented maker-checker controls that helped retail agents process loan disbursement with stronger authorization boundaries.",
      "Delivered RADC modules for loan collections, dynamic PDF generation, download tracking, AWS S3 integrations, and Docker-based releases."
    ]
  },
  {
    company: "Winjit Technologies",
    role: "Software Engineering Intern",
    period: "2 months",
    location: "India",
    description:
      "Built a web application that helped mobile teams track Android and iOS defects with better visibility.",
    highlights: [
      "Created issue listing, update, and history flows to improve accountability across mobile development teams.",
      "Reduced bug resolution time by an estimated 20% by making defect ownership and status easier to act on."
    ]
  }
];

export const projects = [
  {
    title: "Suryoday Small Finance Bank - Secure Banking API Platform",
    eyebrow: "Banking APIs",
    duration: "10 months",
    description:
      "Developed transaction and authentication APIs for a small finance bank deployment, then introduced Redis caching to reduce database pressure during peak usage.",
    impact: "Cut database query load by roughly 95% while improving API response latency under high transaction volume.",
    tech: [".NET Core", "SQL Server", "Redis", "REST APIs", "Authentication"],
    links: {
      live: "#contact",
      repo: "#contact"
    }
  },
  {
    title: "City Union Bank - Enterprise Banking Platform",
    eyebrow: "Migration and Security",
    duration: "5 months",
    description:
      "Redesigned schemas, stored procedures, and data-access layers during an Oracle migration from SQL Server for enterprise banking workflows.",
    impact:
      "Integrated certificate-based third-party authentication with multiple encryption methods to protect core banking data exchange.",
    tech: ["Oracle", "SQL Server", ".NET", "Secure APIs", "Data Migration"],
    links: {
      live: "#contact",
      repo: "#contact"
    }
  },
  {
    title: "BCMS - Business Compliance Management System",
    eyebrow: "Loan Workflows",
    duration: "1141 days",
    description:
      "Built workflow modules for loan application, account opening, loan collection, product renewal, and maker-checker approval journeys.",
    impact:
      "Helped streamline BFSI operations across multiple lending products with scalable APIs, AWS S3 storage, SOAP/REST integrations, and Docker deployment.",
    tech: [".NET Core", "Entity Framework", "SQL Server", "AWS S3", "Docker"],
    links: {
      live: "#contact",
      repo: "#contact"
    }
  },
  {
    title: "Bank Customer Churn Prediction System",
    eyebrow: "Applied ML",
    duration: "Personal project",
    description:
      "Combined .NET services with Python classification models to identify customers with a higher likelihood of attrition.",
    impact:
      "Used Random Forest and Logistic Regression to turn transaction and profile data into actionable churn-risk signals.",
    tech: [".NET", "Python", "Scikit-learn", "Pandas", "SQL"],
    links: {
      live: "#contact",
      repo: "#contact"
    }
  }
];

export const prototypeViews = [
  {
    id: "api",
    label: "API Flow",
    title: "Secure Banking API Flow",
    summary:
      "A compact walkthrough of how a request moves through authentication, validation, business rules, cache, persistence, and response handling.",
    metrics: ["Certificate auth", "Redis cache", "SQL-backed audit"],
    steps: ["Authenticate request", "Validate payload", "Apply business rules", "Read/write cache", "Persist transaction", "Return traceable response"]
  },
  {
    id: "workflow",
    label: "Workflow",
    title: "Maker-Checker Loan Workflow",
    summary:
      "A simplified prototype of the approval path used in compliance-heavy lending operations, designed for clarity on any screen size.",
    metrics: ["Role-based access", "Approval queue", "Disbursement guardrails"],
    steps: ["Create application", "Attach documents", "Maker submits", "Checker verifies", "Resolve exceptions", "Approve disbursement"]
  },
  {
    id: "performance",
    label: "Performance",
    title: "Performance Tuning Snapshot",
    summary:
      "A lightweight view of the performance mindset behind SQL tuning and Redis caching work, without adding heavy charts or runtime dependencies.",
    metrics: ["95% DB load reduction", "40-45% SQL improvement", "Lower peak latency"],
    steps: ["Measure slow path", "Find hot queries", "Add cache boundary", "Tune indexes", "Reduce repeated reads", "Monitor production behavior"]
  }
];

export const skillGroups = [
  {
    title: "Backend",
    items: ["C#", ".NET Core", "ASP.NET Core", "MVC Architecture", "Entity Framework", "ADO.NET"]
  },
  {
    title: "Data and Performance",
    items: ["SQL Server", "Oracle", "Stored Procedures", "Query Tuning", "Redis", "MongoDB"]
  },
  {
    title: "APIs and Integration",
    items: ["REST APIs", "Web APIs", "SOAP", "Swagger", "Certificate Auth", "Third-party Services"]
  },
  {
    title: "Cloud and Delivery",
    items: ["AWS", "AWS S3", "Docker", "CI/CD", "Azure DevOps", "GitHub"]
  },
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "jQuery", "AJAX"]
  },
  {
    title: "Ways of Working",
    items: ["Agile Delivery", "Production Support", "Debugging", "Cross-functional Collaboration"]
  }
];

export const education = [
  {
    degree: "MCA, Computers",
    school: "Gokhale Education Society's HPT Arts and RYK Science College, Nashik",
    year: "2023"
  },
  {
    degree: "B.Sc, Computers",
    school: "Pune University",
    year: "2021"
  }
];

export const certifications = ["AWS Fundamentals: Going Cloud Native", "Problem Solving (Basic)"];
