export const profile = {
  name: "Nishant Bhadke",
  role: ".NET Backend Engineer",
  location: "Nashik, India",
  experience: "4.5+ years",
  email: "nishantbhadke119@gmail.com",
  phone: "+91 9172773982",
  linkedin: "https://www.linkedin.com/in/nishant-bhadke-983837185/",
  github: "https://github.com/",
  resume: "Nishant_Bhadke_Resume.pdf",
  summary:
    "Software engineer at Winjit Technologies with hands-on experience across banking and financial platforms for Suryoday Small Finance Bank, City Union Bank, and enterprise loan workflow systems. Focused on .NET Core, SQL Server, secure APIs, Redis caching, AWS, Docker, and production-ready delivery.",
  companies: ["Winjit Technologies", "Suryoday Small Finance Bank", "City Union Bank"],
  stack: [".NET Core", "C#", "SQL Server", "REST APIs", "Docker", "AWS", "Redis"],
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
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
    impact:
      "Implemented Redis caching strategy to reduce database query load by 95%, significantly improving API response latency at peak transaction volumes.",
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
      "Integrated certificate-based third-party API authentication with multiple encryption methods, ensuring end-to-end data integrity across core banking workflows.",
    tech: ["Oracle", "SQL Server", ".NET", "Secure APIs", "Data Migration"],
    links: {
      live: "#contact",
      repo: "#contact"
    }
  },
  {
    title: "Business Compliance Management System - BFSI Loan Platform",
    eyebrow: "BFSI Loan Platform",
    duration: "1141 days",
    description:
      "Worked on a web-based application to streamline loan application and account opening processes for new and existing customers across NTB, top-up, regular renewal, proactive renewal, and parallel renewal JLG loan products.",
    impact:
      "Contributed to maker/checker accessibility features, allowing retail agents to process loan disbursement securely.",
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
    school: "Pune University",
    year: "2023"
  },
  {
    degree: "B.Sc, Computers",
    school: "Pune University",
    year: "2021"
  }
];

export const certifications = ["AWS Fundamentals: Going Cloud Native"];
