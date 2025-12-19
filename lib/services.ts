export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: 'quick-win' | 'systems-builder' | 'recurring' | 'strategic-services' | 'or-mathematical';
  featured: boolean;
  orEnhanced?: boolean;
  details: {
    who: string[];
    deliverables: string[];
    mathematicalMethods?: string[];
    pricing?: {
      basic?: string;
      pro?: string;
    };
  };
}

export const services: Service[] = [
  {
    id: 'profit-clarity',
    name: 'The Profit Clarity Program',
    tagline: 'I don\'t just build dashboards. I find your lost money and show you how to keep it.',
    description: 'A complete strategic partnership: deep-dive workshop, data audit, custom dashboard, and strategy session. Transform from running on "vibes" to making data-driven decisions with a strategic partner.',
    price: '€2,500+',
    category: 'strategic-services',
    featured: true,
    orEnhanced: true,
    details: {
      who: [
        'Business owners who suspect they\'re losing money but don\'t know where',
        'Agencies struggling to identify which clients are actually profitable',
        'E-commerce businesses wanting to understand real profit margins',
        'Consultants ready to scale but need clarity on cash flow and pricing'
      ],
      deliverables: [
        'Phase 1 - Deep Dive: 90-minute "Business Health" workshop to diagnose your challenges',
        'Phase 1 - Data Audit: 2-hour deep analysis using statistical outlier detection and PCA to find hidden patterns and "aha!" moments',
        'Phase 2 - Custom Dashboard: Your Data Mirror built with predictive models, not just descriptive metrics',
        'Phase 3 - Strategy Session: 60-minute reveal call with optimization recommendations based on Operations Research principles (e.g., "Kill this package, double the price of that one")'
      ],
      mathematicalMethods: [
        'Statistical Analysis (Outlier Detection, PCA)',
        'Predictive Modeling',
        'Operations Research Optimization'
      ],
      pricing: {
        basic: 'Starting at €2,500: Full strategic experience with workshop, audit, dashboard, and strategy session'
      }
    }
  },
  {
    id: 'data-mirror',
    name: 'The Data Mirror',
    tagline: 'Dashboard-only option: Turn your messy spreadsheets into a live dashboard that tells you if you are making money.',
    description: 'Transform your chaotic data into clear, actionable insights with automated dashboards. Perfect if you already know what you need and just want the dashboard built.',
    price: '€950 - €1,850',
    category: 'systems-builder',
    featured: false,
    details: {
      who: [
        'The Agency Owner: Needs to know "Which client is actually profitable vs. which one takes up all my time?"',
        'The E-commerce Starter: Needs to know "What is my real profit after ads and shipping?"',
        'The Consultant: Needs to know "What is my cash flow forecast for next month?"'
      ],
      deliverables: [
        'The "Clean-Up": Structure your Excel sheets or CRM data properly',
        'The "Single Source of Truth": Connect data to Looker Studio (Google)',
        'Dashboard Views: CEO View (Revenue, Expenses, Net Profit) & Engine Room (Best products, profitable clients, conversion rates)',
        'Handover Video: 10-minute Loom video explaining how to read and update the dashboard'
      ],
      pricing: {
        basic: '€950: Connect 1 data source → 1-page Dashboard',
        pro: '€1,850: Connect 3 data sources → Automated refreshing → 3-page Dashboard'
      }
    }
  },
  {
    id: 'data-mirror-or',
    name: 'The Data Mirror (OR Edition)',
    tagline: 'Predictive analytics, not just history. See what will happen, not just what happened.',
    description: 'The Data Mirror enhanced with Operations Research: predictive models, Monte Carlo risk scenarios, and statistical significance testing. Mathematical certainty, not guesswork.',
    price: '€2,500+',
    category: 'or-mathematical',
    featured: false,
    orEnhanced: true,
    details: {
      who: [
        'Businesses that need to predict future cash flow, not just track past performance',
        'Companies facing uncertainty and need risk-scenario planning',
        'Organizations requiring statistical validation of business decisions'
      ],
      deliverables: [
        'All standard Data Mirror features',
        'Predictive Analytics Layer: Time series forecasting with confidence intervals',
        'Monte Carlo Simulations: Risk scenarios for cash flow, demand, and revenue',
        'Statistical Significance Testing: Know which metrics actually matter',
        'Probability Distributions: "What\'s the % chance you\'ll run out of cash in November?"'
      ],
      mathematicalMethods: [
        'Time Series Analysis',
        'Monte Carlo Simulation',
        'Statistical Hypothesis Testing',
        'Regression Analysis'
      ],
      pricing: {
        basic: 'Starting at €2,500: Enhanced dashboard with predictive analytics and risk modeling'
      }
    }
  },
  {
    id: 'ai-audit',
    name: 'The AI Audit & Roadmap',
    tagline: 'The Gateway - Review your business process and get a roadmap of "3 things to automate today."',
    description: 'Get a comprehensive review of your business processes with actionable automation recommendations.',
    price: '€295 - €495',
    category: 'quick-win',
    featured: true,
    details: {
      who: [
        'Business owners who know they could be more efficient but don\'t know where to start',
        'Teams drowning in manual tasks',
        'Companies ready to scale but held back by processes'
      ],
      deliverables: [
        'Business process review',
        'PDF roadmap with "3 things to automate today"',
        'Prioritized action plan',
        'Tool recommendations'
      ]
    }
  },
  {
    id: 'meeting-medic',
    name: 'The Meeting Medic',
    tagline: 'Never lose track of meeting notes again. AI-powered note-taking and automated follow-ups.',
    description: 'Set up AI note-taker (Otter/Fireflies) with automation that summarizes calls and drafts "Next Steps" emails automatically.',
    price: '€450',
    category: 'quick-win',
    featured: false,
    details: {
      who: [
        'Consultants with back-to-back client calls',
        'Teams that spend too much time on meeting notes',
        'Businesses that need better follow-up systems'
      ],
      deliverables: [
        'AI note-taker setup (Otter/Fireflies)',
        'Custom prompting for your industry',
        'Automated "Next Steps" email generation',
        'Integration with your workflow'
      ]
    }
  },
  {
    id: 'proposal-perfector',
    name: 'The Proposal Perfector',
    tagline: 'Turn proposal writing from hours to minutes. AI generates custom proposals from a simple form.',
    description: 'Automate your sales proposals. Fill in a form (Client Name, Price), and AI generates a custom PDF contract/proposal and drafts the email.',
    price: '€600',
    category: 'quick-win',
    featured: false,
    details: {
      who: [
        'Agencies sending multiple proposals weekly',
        'Consultants who spend hours on proposal writing',
        'Sales teams that need faster turnaround'
      ],
      deliverables: [
        'Custom proposal form',
        'AI-powered PDF generation',
        'Automated email drafting',
        'Template library'
      ]
    }
  },
  {
    id: 'content-machine',
    name: 'The Content Machine',
    tagline: 'Turn your voice into LinkedIn posts and blog content. Automate your marketing voice.',
    description: 'Voice-to-LinkedIn/Blog workflow. Automation of your marketing voice to consistently produce content.',
    price: '€1,200',
    category: 'systems-builder',
    featured: false,
    details: {
      who: [
        'Thought leaders who struggle to write consistently',
        'Businesses that want to scale content creation',
        'Marketers spending too much time on content'
      ],
      deliverables: [
        'Voice-to-text workflow setup',
        'AI content generation pipeline',
        'LinkedIn/Blog automation',
        'Content calendar integration'
      ]
    }
  },
  {
    id: 'lead-hunter',
    name: 'The Lead Hunter',
    tagline: 'Find 100 prospects, get their emails, and draft the first cold outreach line using AI.',
    description: 'Set up a lead-scraping workflow using tools like Clay or Apollo. Automate prospect research and initial outreach.',
    price: '€1,500',
    category: 'systems-builder',
    featured: false,
    details: {
      who: [
        'Sales teams needing more qualified leads',
        'Businesses entering new markets',
        'Agencies looking to scale outreach'
      ],
      deliverables: [
        'Lead-scraping workflow setup (Clay/Apollo)',
        '100 qualified prospects',
        'Email discovery',
        'AI-powered cold outreach drafts'
      ]
    }
  },
  {
    id: 'support-clone',
    name: 'The Support Clone',
    tagline: 'A custom chatbot trained on your past emails and website. Answers common questions 24/7.',
    description: 'Build a custom Chatbot (using Chatbase or similar) trained on your past emails/website. It answers common customer questions 24/7.',
    price: '€1,500 + monthly maintenance',
    category: 'systems-builder',
    featured: false,
    details: {
      who: [
        'Businesses with high support volume',
        'Companies wanting 24/7 customer service',
        'Teams overwhelmed by repetitive questions'
      ],
      deliverables: [
        'Custom chatbot setup (Chatbase or similar)',
        'Training on your emails/website content',
        'Integration with your website',
        'Monthly maintenance and updates'
      ]
    }
  },
  {
    id: 'knowledge-brain',
    name: 'The Knowledge Brain',
    tagline: 'Organize your chaotic Google Drive/Notion into a searchable AI wiki. Stop asking "Where is that file?"',
    description: 'For teams of 3-10 people. Organize your chaotic Google Drive/Notion into a searchable AI wiki so staff stops asking "Where is that file?"',
    price: '€2,000',
    category: 'systems-builder',
    featured: false,
    details: {
      who: [
        'Growing teams (3-10 people)',
        'Companies with scattered documentation',
        'Organizations needing better knowledge management'
      ],
      deliverables: [
        'Google Drive/Notion organization',
        'Searchable AI wiki setup',
        'Documentation structure',
        'Team training'
      ]
    }
  },
  {
    id: 'admin-autopilot',
    name: 'The Admin Auto-Pilot',
    tagline: 'Complex automations for invoicing, CRM management, and administrative tasks.',
    description: 'Complex automations for invoicing, CRM management, and other administrative tasks that eat up your time.',
    price: '€1,500 setup + €200/month',
    category: 'recurring',
    featured: false,
    details: {
      who: [
        'Businesses drowning in admin work',
        'Companies with complex invoicing needs',
        'Teams spending too much time on CRM management'
      ],
      deliverables: [
        'Custom automation setup',
        'Invoicing automation',
        'CRM management workflows',
        'Monthly maintenance and updates'
      ]
    }
  },
  {
    id: 'cto-pocket',
    name: 'The CTO-in-a-Pocket',
    tagline: 'Retainer access to me. Troubleshooting, updates, and advice when you need it.',
    description: 'They pay for access to you. Troubleshooting, updates, and advice. Your technical partner on retainer.',
    price: '€300 - €500/month',
    category: 'recurring',
    featured: false,
    details: {
      who: [
        'Businesses needing ongoing technical support',
        'Companies without a technical co-founder',
        'Teams that need strategic tech advice'
      ],
      deliverables: [
        'Monthly retainer hours',
        'Troubleshooting and support',
        'System updates and maintenance',
        'Strategic technical advice'
      ]
    }
  },
  {
    id: 'algorithm-auditor',
    name: 'The Algorithm Auditor',
    tagline: 'The black box breaker. I explain the math behind your AI decisions and ensure they\'re not making biased choices.',
    description: 'AI Governance & Risk Assessment for companies using AI tools. I review automated decision-making to ensure mathematical fairness and explainability. When AI makes a decision, I can tell you why—and whether it\'s mathematically sound.',
    price: '€2,500+',
    category: 'or-mathematical',
    featured: false,
    orEnhanced: true,
    details: {
      who: [
        'Companies using AI tools who are scared of liability',
        'Organizations needing to explain AI decisions to regulators',
        'Businesses that want to ensure their AI isn\'t making biased decisions',
        'Teams asking "Why did the AI make this decision?"'
      ],
      deliverables: [
        'AI Model Audit: Review of your automated decision-making systems',
        'Mathematical Bias Detection: Statistical analysis for fairness',
        'Vector Space Embedding Analysis: Understanding how AI represents data',
        'Explainability Report: "Why did the AI make this decision?" with mathematical backing',
        'Risk Assessment: Probability analysis of potential failures or biases',
        'Recommendations: How to fix mathematically problematic models'
      ],
      mathematicalMethods: [
        'Real Analysis & Functional Analysis',
        'Probability Theory',
        'Linear Algebra (Vector Spaces, Embeddings)',
        'Statistical Hypothesis Testing',
        'Information Theory'
      ],
      pricing: {
        basic: 'Starting at €2,500: Comprehensive AI governance audit with mathematical analysis'
      }
    }
  },
  {
    id: 'predictive-engine',
    name: 'The Predictive Engine',
    tagline: 'See what will happen, not just what happened. Monte Carlo simulations and probability distributions built into your dashboard.',
    description: 'Most dashboards show history. I build predictive models with Monte Carlo simulations, time series forecasting, and risk scenarios. Know the probability of future outcomes, not just past performance.',
    price: '€3,000+',
    category: 'or-mathematical',
    featured: false,
    orEnhanced: true,
    details: {
      who: [
        'Businesses that need to predict future cash flow, not just track past performance',
        'Companies facing uncertainty and need risk-scenario planning',
        'Organizations requiring statistical validation of business decisions',
        'Businesses asking "What\'s the probability we\'ll run out of cash?"'
      ],
      deliverables: [
        'Predictive Dashboard: Time series forecasting with confidence intervals',
        'Monte Carlo Simulations: Risk scenarios for cash flow, demand, and revenue',
        'Probability Distributions: "What\'s the % chance of X happening?"',
        'Cash Flow Prediction: Multi-scenario forecasting with statistical backing',
        'Demand Forecasting: ARIMA and regression models for future planning',
        'Risk Analysis: Identify potential problems before they happen'
      ],
      mathematicalMethods: [
        'Time Series Analysis (ARIMA)',
        'Monte Carlo Simulation',
        'Regression Analysis',
        'Probability Distributions',
        'Statistical Forecasting'
      ],
      pricing: {
        basic: 'Starting at €3,000: Predictive dashboard with Monte Carlo simulations and risk modeling'
      }
    }
  },
  {
    id: 'system-optimizer',
    name: 'The System Optimizer',
    tagline: 'Mathematically minimize waste to zero. Operations Research solutions for scheduling, inventory, routing, and resource allocation.',
    description: 'I don\'t just automate—I optimize. Using Linear Programming, Integer Programming, Queuing Theory, and Graph Theory, I solve complex business problems that standard logic cannot solve.',
    price: '€3,500+',
    category: 'or-mathematical',
    featured: false,
    orEnhanced: true,
    details: {
      who: [
        'Businesses wasting money on shipping, staffing, or inventory',
        'Companies with complex scheduling problems (staff, production, OR)',
        'Organizations with logistics and supply chain challenges',
        'Businesses asking "How much stock should I buy?" or "What\'s the optimal route?"'
      ],
      deliverables: [
        'Optimization Analysis: Mathematical models for your specific problem',
        'Resource Allocation: Linear/Integer Programming solutions',
        'Scheduling Optimization: Staff rostering, production planning, OR scheduling',
        'Inventory Optimization: Economic Order Quantity (EOQ) calculations',
        'Logistics Optimization: Graph theory for routing and network design',
        'Queuing Analysis: Service optimization using queuing theory',
        'Implementation Plan: How to execute the mathematically optimal solution'
      ],
      mathematicalMethods: [
        'Linear Programming (LP)',
        'Integer Programming (IP/MIP)',
        'Queuing Theory',
        'Graph Theory (Network Flows, Shortest Path)',
        'Combinatorial Optimization',
        'Dynamic Programming'
      ],
      pricing: {
        basic: 'Starting at €3,500: Complete Operations Research solution with mathematical optimization'
      }
    }
  }
];

export const featuredServices = services.filter(s => s.featured);
export const quickWinServices = services.filter(s => s.category === 'quick-win');
export const systemsBuilderServices = services.filter(s => s.category === 'systems-builder');
export const recurringServices = services.filter(s => s.category === 'recurring');
export const strategicServices = services.filter(s => s.category === 'strategic-services');
export const orMathematicalServices = services.filter(s => s.category === 'or-mathematical');

