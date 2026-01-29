// Content Data for Sindhu Sundararajan's SDET Portfolio
// This file contains all text content, making it easy to update without touching code

export const personalInfo = {
  name: "Sindhu Sundararajan",
  tagline: "<Code.Test.Repeat />",
  title: "Software Development Engineer in Test",
  subtitle: "SDET | Test Automation Architect | Python & Cloud Testing Specialist",
  heroHeadline: "Building Quality into Code, One Test at a Time",
  bio: [
    "I'm a results-driven SDET with 5+ years of experience transforming testing landscapes through intelligent automation and data-driven quality assurance. My journey began at Cognizant, where I reduced manual testing cycles from 80 days to just 5 days through strategic automation—a 94% efficiency gain that sparked my passion for scalable testing solutions.",
    "Currently at Community Dream Foundation, I architect comprehensive test frameworks that blend functional, regression, and API testing. With a Master's in Analytics from Northeastern University specializing in Applied Machine Intelligence, I bring a unique perspective to testing—combining traditional QA rigor with modern AI/ML approaches to build self-healing, adaptive test systems.",
    "Beyond the code, I'm passionate about mentoring junior engineers and fostering a quality-first culture. When I'm not automating tests, you'll find me exploring the latest in AI-powered testing tools, contributing to open-source projects, or analyzing data patterns that drive better software decisions."
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
    { label: "Major Projects", value: "6", icon: "FolderKanban" },
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
  },
  {
    id: 5,
    title: "Performance & Load Testing Suite",
    shortDesc: "Scalability testing ensuring system resilience under load",
    description: "Comprehensive performance testing framework measuring application behavior under various load conditions. Identifies bottlenecks, memory leaks, and scalability issues before production.",
    impact: [
      { metric: "10,000+", label: "Concurrent Users Tested" },
      { metric: "45%", label: "Performance Improvement" },
      { metric: "Zero", label: "Production Incidents" }
    ],
    technologies: ["JMeter", "Gatling", "Python", "Grafana", "Prometheus", "AWS CloudWatch"],
    category: ["Performance Testing", "Cloud"],
    features: [
      "Scalability testing with gradual load increase",
      "Stress testing to identify breaking points",
      "Endurance testing for memory leak detection",
      "Real-time monitoring and alerting",
      "Comprehensive performance metrics and reporting"
    ],
    demonstrates: "Performance engineering skills, monitoring tools expertise, and production readiness validation",
    github: "#",
    demo: null
  },
  {
    id: 6,
    title: "AI-Powered Test Maintenance Framework",
    shortDesc: "Self-healing test automation with ML-based element detection",
    description: "Innovative test framework leveraging machine learning for intelligent element detection and self-healing capabilities. Reduces test maintenance by 70% through adaptive locator strategies.",
    impact: [
      { metric: "70%", label: "Maintenance Reduction" },
      { metric: "3%", label: "Flaky Test Rate" },
      { metric: "85%", label: "Auto-Healing Success" }
    ],
    technologies: ["Python", "Selenium", "TensorFlow", "Computer Vision", "Playwright", "AI/ML"],
    category: ["AI/ML", "Automation"],
    features: [
      "Multiple locator strategies with fallback mechanisms",
      "Visual AI for element detection when DOM changes",
      "Smart waits with dynamic timeout adjustment",
      "Automatic test script updates when elements change",
      "Anomaly detection for identifying test instability"
    ],
    demonstrates: "Cutting-edge AI/ML integration, innovative problem-solving, and future-focused automation approaches",
    github: "#",
    demo: null
  }
];

export const skills = {
  "Programming & Scripting": [
    { name: "Python", level: "Expert", years: 5, icon: "Code2" },
    { name: "SQL", level: "Expert", years: 5, icon: "Database" },
    { name: "JavaScript", level: "Advanced", years: 3, icon: "FileCode" },
    { name: "Node.js", level: "Intermediate", years: 2, icon: "Server" }
  ],
  "Test Automation": [
    { name: "Selenium", level: "Expert", years: 5, icon: "Globe" },
    { name: "Playwright", level: "Advanced", years: 2, icon: "Theater" },
    { name: "Appium", level: "Advanced", years: 3, icon: "Smartphone" },
    { name: "PyTest", level: "Expert", years: 5, icon: "Flask" },
    { name: "TestNG", level: "Advanced", years: 3, icon: "TestTube" }
  ],
  "API & Integration Testing": [
    { name: "Postman", level: "Expert", years: 5, icon: "Send" },
    { name: "REST Assured", level: "Advanced", years: 3, icon: "Webhook" },
    { name: "Swagger/OpenAPI", level: "Advanced", years: 4, icon: "FileJson" }
  ],
  "Database & ETL": [
    { name: "MySQL", level: "Expert", years: 5, icon: "Database" },
    { name: "Snowflake", level: "Advanced", years: 2, icon: "Cloud" },
    { name: "ETL Testing", level: "Expert", years: 4, icon: "ArrowLeftRight" }
  ],
  "CI/CD & DevOps": [
    { name: "Jenkins", level: "Advanced", years: 4, icon: "Cog" },
    { name: "GitHub Actions", level: "Advanced", years: 3, icon: "Github" },
    { name: "Docker", level: "Advanced", years: 3, icon: "Container" },
    { name: "Terraform", level: "Intermediate", years: 2, icon: "Boxes" }
  ],
  "Cloud Platforms": [
    { name: "AWS", level: "Advanced", years: 3, icon: "CloudCog" },
    { name: "Azure", level: "Advanced", years: 2, icon: "Cloud" }
  ]
};

export const certifications = [
  {
    name: "Salesforce Tableau Desktop Foundation",
    issuer: "Salesforce",
    date: "2024",
    icon: "BarChart3"
  },
  {
    name: "Google Analytics GA4 Certification",
    issuer: "Google",
    date: "2024",
    icon: "TrendingUp"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "CloudCog"
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2023",
    icon: "Cloud"
  },
  {
    name: "PMP",
    issuer: "UC-Irvine",
    date: "2022",
    icon: "Award"
  },
  {
    name: "HubSpot Inbound Marketing Certification",
    issuer: "HubSpot",
    date: "2023",
    icon: "Target"
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
    description: "I don't just find bugs—I prevent them. By integrating quality checks early in the development lifecycle and advocating for testability in design, I help teams ship confidently. My approach combines proactive risk assessment with comprehensive test coverage to ensure your product meets the highest standards.",
    icon: "ShieldCheck"
  },
  {
    title: "CI/CD Integration Expert",
    description: "Testing isn't a bottleneck in my world—it's an accelerator. I design test frameworks that seamlessly integrate with CI/CD pipelines, providing rapid feedback without slowing down deployments. Automated quality gates ensure issues are caught immediately, not in production.",
    icon: "GitBranch"
  },
  {
    title: "Data-Driven Approach",
    description: "Every decision is backed by metrics. I track test effectiveness, flakiness rates, coverage gaps, and defect escape rates to continuously improve testing strategies. My analytics background enables me to identify patterns, predict issues, and optimize testing ROI.",
    icon: "LineChart"
  },
  {
    title: "Mentorship & Collaboration",
    description: "Great testing is a team effort. I've mentored 5+ junior engineers and believe in knowledge sharing. I collaborate closely with developers, product managers, and stakeholders to align quality goals with business objectives and foster a culture where everyone owns quality.",
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