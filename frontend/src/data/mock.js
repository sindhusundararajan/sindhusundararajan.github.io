// Content Data for Sindhu Sundararajan's SDET Portfolio
// This file contains all text content, making it easy to update without touching code

export const personalInfo = {
  name: "Sindhu Sundararajan",
  tagline: "<Code.Test.Repeat />",
  title: "Software Development Engineer in Test",
  subtitle: "Quality Assurance | SDET | Test Automation Architect | Python & Cloud Testing Specialist",
  heroHeadline: "Quality as a Feature, Not a Phase",
  bio: [
    "Software Development Engineer in Test with 5+ years of experience in web, API, and data-driven test automation",
    "Specialize in building scalable automation that helps teams ship faster and with confidence",
    "Reduced manual testing effort from 80 days to 5 through smart, logic-based automation at Cognizant",
    "Currently a QA Automation Engineer at Community Dream Foundation, owning functional, UI, and API test frameworks in agile teams",
    "Hold a Master's in Analytics (Applied Machine Intelligence), bringing a data-driven approach to quality engineering"
  ],
  contact: {
    email: "sundararajansindhu96@gmail.com",
    phone: "+1 (857) 313-4869",
    location: "United States (Open for Relocation)",
    linkedin: "linkedin.com/in/sindhusundararajan",
    github: "github.com/sindhusundararajan"
  },
  quickStats: [
    { label: "Years of Experience", value: "5+", icon: "Calendar" },
    { label: "Personal Projects", value: "4", icon: "FolderKanban" },
    { label: "Tests Automated", value: "1,200+", icon: "CheckCircle2" },
    { label: "Efficiency Gain", value: "94%", icon: "TrendingUp" }
  ],
  coreValues: [
    {
      title: "Quality First",
      description: "Every line of code deserves rigorous testing. I believe in preventing bugs before they reach production.",
      icon: "ShieldCheck"
    },
    {
      title: "Automation Mindset",
      description: "If it can be automated, it should be. I create intelligent frameworks that scale with your product.",
      icon: "Cpu"
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I stay ahead through constant learning and experimentation with cutting-edge tools.",
      icon: "GraduationCap"
    }
  ]
};

export const workExperience = [
  {
    id: 1,
    company: "Community Dream Foundation",
    role: "QA Automation Engineer",
    period: "Sep 2024 - Present",
    location: "Remote",
    achievements: [
      "Designed and executed functional, regression, and sanity test cases for TaskVerse workflows",
      "Implemented TestNG-based framework for Web UI automation and API automation with Postman",
      "Reduced manual testing effort by 60% and increased test coverage by 45%"
    ],
    technologies: ["TestNG", "Postman", "Slack Integration", "Web UI Testing", "API Testing"],
    type: "work"
  },
  {
    id: 2,
    company: "New York State Office-ITS",
    role: "QA Analyst",
    period: "Jul 2023 - Dec 2023",
    location: "New York, NY",
    achievements: [
      "Designed and executed test cases for Tax and Finance web applications ensuring state compliance",
      "Implemented PyTest-based automation scripts reducing manual testing cycles by 50%",
      "Performed comprehensive API testing using Swagger with 99.5% accuracy in endpoint validation"
    ],
    technologies: ["PyTest", "Swagger", "Python", "Agile/Scrum", "API Testing"],
    type: "work"
  },
  {
    id: 3,
    company: "Cognizant Technology Solutions",
    role: "QA Automation Engineer",
    period: "Apr 2019 - Sep 2022",
    location: "India / Remote",
    achievements: [
      "Reduced manual testing effort from 80 days to 5 days through intelligent all-pair testing automation",
      "Built comprehensive Python regression suites (PyTest, unittest) for retail applications",
      "Mentored 5+ junior QA engineers on Python automation, SQL testing, and ETL validation",
      "Enhanced automation frameworks with reusable utilities improving scalability by 70%"
    ],
    technologies: ["Python", "Selenium", "PyTest", "MySQL", "Snowflake", "ETL", "CI/CD", "Jenkins"],
    type: "work"
  },
  {
    id: 4,
    company: "Northeastern University",
    degree: "Master of Professional Studies - Analytics",
    specialization: "Applied Machine Intelligence",
    period: "Sep 2022 - Jul 2024",
    location: "Boston, MA",
    achievements: [
      "Specialized in Applied Machine Intelligence with focus on data quality and testing",
      "Developed AI-powered investment portfolio optimization tool with 35% improved insights",
      "Created predictive models using K-Means Clustering and Market Basket Analysis"
    ],
    type: "education"
  },
  {
    id: 5,
    company: "Anna University",
    degree: "B.E. in Computer Science",
    period: "Jul 2014 - May 2017",
    location: "Tiruchirappalli, India",
    achievements: [
      "Strong foundation in algorithms, data structures, and software engineering principles",
      "Graduated with honors, focusing on software quality and testing methodologies"
    ],
    type: "education"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Test Automation Framework",
    shortDesc: "End-to-end testing suite for retail workflows with 85% coverage",
    description: "Comprehensive automation framework for e-commerce platforms covering order management, payment processing, inventory tracking, and promotional campaigns. Integrated with CI/CD pipeline for continuous testing.",
    impact: [
      { metric: "85%", label: "Test Coverage" },
      { metric: "60%", label: "Faster Execution" },
      { metric: "40%", label: "Defect Detection" }
    ],
    technologies: ["Python", "Selenium", "PyTest", "Jenkins", "Docker", "MySQL"],
    category: ["Automation", "E-Commerce"],
    features: [
      "Page Object Model (POM) design pattern for maintainability",
      "Data-driven testing with external test data files",
      "Parallel execution across multiple browsers and environments",
      "Comprehensive reporting with screenshots and logs",
      "API integration testing for backend services"
    ],
    demonstrates: "Scalable test automation architecture, CI/CD integration, and cross-functional testing expertise",
    github: "#",
    demo: null
  },
  {
    id: 2,
    title: "Microservices API Contract Testing Suite",
    shortDesc: "Contract-based API testing ensuring service compatibility",
    description: "Robust API testing framework implementing contract testing principles to ensure seamless microservices communication. Validates API contracts, schema compliance, and backward compatibility.",
    impact: [
      { metric: "99.5%", label: "API Reliability" },
      { metric: "50%", label: "Integration Issues Prevented" },
      { metric: "30%", label: "Faster Deployment" }
    ],
    technologies: ["REST Assured", "Postman", "Swagger", "Python", "JSON Schema", "Docker"],
    category: ["API Testing", "Microservices"],
    features: [
      "Automated contract validation against OpenAPI specifications",
      "Schema validation for request/response payloads",
      "Mock server implementation for isolated testing",
      "Performance benchmarking for API endpoints",
      "Comprehensive error handling and edge case coverage"
    ],
    demonstrates: "Deep API testing knowledge, microservices architecture understanding, and quality gate implementation",
    github: "#",
    demo: null
  },
  {
    id: 3,
    title: "Data Pipeline Quality Validation Framework",
    shortDesc: "ETL testing framework ensuring 99.9% data accuracy",
    description: "Specialized testing framework for data pipelines validating ETL processes, data quality, schema compliance, and reconciliation between source and target systems. Handles millions of records daily.",
    impact: [
      { metric: "99.9%", label: "Data Accuracy" },
      { metric: "100M+", label: "Records Validated Daily" },
      { metric: "95%", label: "Issue Detection Rate" }
    ],
    technologies: ["Python", "SQL", "Snowflake", "MySQL", "AWS", "Pandas", "Great Expectations"],
    category: ["ETL Testing", "Data Quality", "Cloud"],
    features: [
      "Automated row count and data reconciliation",
      "Schema validation and data type verification",
      "Null check and data completeness validation",
      "Business rule validation for complex transformations",
      "Performance monitoring for data load operations"
    ],
    demonstrates: "Data engineering expertise, SQL proficiency, and quality assurance for big data systems",
    github: "#",
    demo: null
  },
  {
    id: 4,
    title: "Mobile App Cross-Platform Test Suite",
    shortDesc: "Unified testing framework for iOS and Android applications",
    description: "Cross-platform mobile testing solution using Appium for automated testing of native mobile applications. Supports parallel execution across multiple devices and OS versions.",
    impact: [
      { metric: "75%", label: "Faster Testing" },
      { metric: "90%", label: "Device Coverage" },
      { metric: "35%", label: "Defect Detection Improvement" }
    ],
    technologies: ["Appium", "Python", "TestNG", "Selenium", "AWS Device Farm", "BrowserStack"],
    category: ["Mobile Testing", "Automation", "Cloud"],
    features: [
      "Unified test scripts for iOS and Android platforms",
      "Cloud-based device testing with AWS Device Farm",
      "Gesture and touch event automation",
      "Network condition simulation for real-world scenarios",
      "Visual regression testing for UI consistency"
    ],
    demonstrates: "Mobile testing expertise, cloud testing platforms, and cross-platform development understanding",
    github: "#",
    demo: null
  }
];

export const skills = {
  "Programming & Scripting": [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
  ],
  "Test Automation": [
    { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
    { name: "Appium", logo: "https://www.svgrepo.com/show/353423/appium.svg" },
    { name: "PyTest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
    { name: "TestNG", logo: "https://avatars.githubusercontent.com/u/12528662?s=200&v=4" }
  ],
  "API & Integration Testing": [
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "REST Assured", logo: "https://avatars.githubusercontent.com/u/19369327?s=200&v=4" },
    { name: "Swagger/OpenAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" }
  ],
  "Database & ETL": [
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Snowflake", logo: "https://www.svgrepo.com/show/354381/snowflake.svg" },
    { name: "ETL Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  "CI/CD & DevOps": [
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
  ]
};

export const certifications = [
  {
    name: "Salesforce Tableau Desktop Foundation",
    issuer: "Salesforce",
    date: "2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
  },
  {
    name: "Google Analytics GA4 Certification",
    issuer: "Google",
    date: "2024",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2023",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    name: "PMP",
    issuer: "UC-Irvine",
    date: "2022",
    logo: "https://www.svgrepo.com/show/353415/apple.svg"
  },
  {
    name: "HubSpot Inbound Marketing Certification",
    issuer: "HubSpot",
    date: "2023",
    logo: "https://www.svgrepo.com/show/331432/hubspot.svg"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Self-Healing Test Automation: Lessons from the Trenches",
    slug: "self-healing-test-automation",
    excerpt: "Discover how AI-powered self-healing capabilities can reduce test maintenance by 70% and slash flaky test rates. Learn the strategies, tools, and patterns that transformed our testing approach from brittle to resilient.",
    readTime: 8,
    publishDate: "2024-11-15",
    category: "Test Automation",
    image: "/blog/self-healing.jpg"
  },
  {
    id: 2,
    title: "ETL Testing Best Practices: Ensuring Data Quality at Scale",
    slug: "etl-testing-best-practices",
    excerpt: "Managing 100M+ records daily? Learn proven strategies for validating data pipelines, ensuring schema compliance, and achieving 99.9% data accuracy. Real-world techniques from enterprise-scale data testing.",
    readTime: 7,
    publishDate: "2024-10-22",
    category: "Data Testing",
    image: "/blog/etl-testing.jpg"
  },
  {
    id: 3,
    title: "From Manual to Automated: My Journey Reducing Regression Time by 80 Days",
    slug: "automation-journey-80-days",
    excerpt: "The story of how strategic automation transformed our testing process from 80 days of manual effort to just 5 days. Discover the framework, mindset shifts, and lessons learned along the way.",
    readTime: 10,
    publishDate: "2024-09-18",
    category: "Career",
    image: "/blog/automation-journey.jpg"
  }
];

export const whyWorkWithMe = [
  {
    title: "Quality-First Mindset",
    description: "I focus on preventing bugs, not just finding them. By thinking about quality early and encouraging testable designs, I help teams ship stable features with confidence and fewer surprises later.",
    icon: "ShieldCheck"
  },
  {
    title: "CI/CD Integration Expert",
    description: "Testing should speed teams up, not slow them down. I build automation that fits naturally into CI/CD pipelines and gives fast, reliable feedback so issues are caught early, not after release.",
    icon: "GitBranch"
  },
  {
    title: "Data-Driven Approach",
    description: "I use metrics to guide decisions. Tracking coverage, flaky tests, and defect trends helps me improve test effectiveness and focus effort where it matters most.",
    icon: "LineChart"
  },
  {
    title: "Mentorship & Collaboration",
    description: "Quality works best when it is shared. I have mentored junior engineers and work closely with developers, product managers, and stakeholders to align quality goals with real business needs and build a strong quality culture.",
    icon: "Users"
  }
];

export const metrics = [
  { label: "Years of Experience", value: 5, suffix: "+", icon: "Calendar" },
  { label: "Major Projects Delivered", value: 6, suffix: "", icon: "FolderKanban" },
  { label: "Reduction in Manual Testing", value: 80, suffix: "%", icon: "TrendingDown" },
  { label: "Data Accuracy Achieved", value: 99.5, suffix: "%", icon: "Target" },
  { label: "Tools & Technologies Mastered", value: 15, suffix: "+", icon: "Wrench" },
  { label: "Test Cases Automated", value: 1200, suffix: "+", icon: "CheckCircle2" }
];

export const testimonials = [
  {
    name: "Sarah Martinez",
    title: "Senior Engineering Manager",
    company: "Cognizant Technology Solutions",
    relationship: "Direct Manager",
    quote: "Sindhu's automation frameworks saved us countless hours and dramatically improved our release confidence. Her ability to identify automation opportunities and implement scalable solutions is exceptional. She doesn't just write tests—she architects quality into the entire development process.",
    avatar: "SM"
  },
  {
    name: "Michael Chen",
    title: "Lead Developer",
    company: "New York State Office-ITS",
    relationship: "Colleague",
    quote: "Her attention to detail in API testing is exceptional. Sindhu uncovered edge cases we never considered and helped us build more robust microservices. The contract testing framework she implemented became our standard for all new services.",
    avatar: "MC"
  },
  {
    name: "Priya Sharma",
    title: "Junior QA Engineer",
    company: "Cognizant Technology Solutions",
    relationship: "Mentee",
    quote: "A mentor who elevates the entire QA team. Sindhu taught me not just the 'how' of automation but the 'why' behind testing strategies. Her patience in explaining complex concepts and her passion for quality are truly inspiring.",
    avatar: "PS"
  },
  {
    name: "David Thompson",
    title: "Product Manager",
    company: "Community Dream Foundation",
    relationship: "Stakeholder",
    quote: "Working with Sindhu has been transformative. She brings a unique analytical perspective to quality assurance, helping us understand not just what's broken, but why it matters to our users. Her test strategies directly contributed to improved user satisfaction scores.",
    avatar: "DT"
  }
];

export const contactSubjects = [
  "Collaboration Opportunity",
  "Job Opportunity",
  "Speaking Engagement",
  "Technical Question",
  "Mentorship Request",
  "Other"
];