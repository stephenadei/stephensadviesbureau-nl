export interface ApplicationCategory {
  title: string;
  applications: string[];
}

export interface MathDomain {
  id: number;
  title: string;
  foundation: string;
  categories: ApplicationCategory[];
}

export interface CrossCuttingExample {
  title: string;
  domains: string[];
}

export const mathDomains: MathDomain[] = [
  {
    id: 1,
    title: 'Linear Algebra',
    foundation: 'Vector spaces, matrices, eigenvalues, decomposition',
    categories: [
      {
        title: 'Core Applications',
        applications: [
          'Portfolio optimization (covariance matrices)',
          'Network flows (adjacency, incidence matrices)',
          'Recommendation systems (matrix factorization, SVD)',
          'PCA for dimensionality reduction'
        ]
      },
      {
        title: 'Advanced Uses',
        applications: [
          'Markov chains (transition matrices)',
          'Graph algorithms (shortest path)',
          'Power grid optimization (load flow)',
          'Image processing in quality control'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Optimization Theory',
    foundation: 'Calculus, gradients, KKT conditions, duality',
    categories: [
      {
        title: 'Linear Programming (LP)',
        applications: [
          'Production scheduling',
          'Resource allocation',
          'Transportation problems',
          'Diet and blending problems'
        ]
      },
      {
        title: 'Integer Programming (IP/MIP)',
        applications: [
          'Facility location (warehouses, stores)',
          'Scheduling (staff, production, OR)',
          'Network design (telecom)',
          'Vehicle routing'
        ]
      },
      {
        title: 'Nonlinear/Convex',
        applications: [
          'Portfolio optimization (quadratic)',
          'Revenue management pricing',
          'ML model training',
          'Control systems'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Stochastic Processes',
    foundation: 'Random variables, distributions, expectation, conditional probability',
    categories: [
      {
        title: 'Queuing Theory',
        applications: [
          'Hospital bed allocation',
          'Call center staffing',
          'Service desk optimization',
          'Traffic flow analysis'
        ]
      },
      {
        title: 'Markov Processes',
        applications: [
          'Customer behavior modeling',
          'Inventory with uncertain demand',
          'Maintenance scheduling',
          'Epidemic modeling'
        ]
      },
      {
        title: 'Monte Carlo',
        applications: [
          'Risk assessment in finance',
          'Project management (PERT)',
          'Complex system simulation',
          'Demand forecasting validation'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Graph Theory',
    foundation: 'Graphs, trees, connectivity, flows',
    categories: [
      {
        title: 'Path Problems',
        applications: [
          'Route optimization / GPS navigation',
          'Network routing (telecom)',
          'TSP (delivery routes, circuit boards)'
        ]
      },
      {
        title: 'Flow Problems',
        applications: [
          'Maximum flow / minimum cut',
          'Supply chain network capacity',
          'Pipeline optimization',
          'Bandwidth allocation'
        ]
      },
      {
        title: 'Network Design',
        applications: [
          'Minimum spanning tree (utilities)',
          'Transportation logistics',
          'Assignment problems'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Game Theory',
    foundation: 'Strategic decision-making, Nash equilibrium, utility theory',
    categories: [
      {
        title: 'Applications',
        applications: [
          'Pricing strategies (competitive markets)',
          'Auction design (spectrum allocation)',
          'Contract negotiation (supply chain)',
          'Resource allocation (competition)',
          'Security games (patrol scheduling)'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Dynamic Programming',
    foundation: 'Bellman equations, optimal control, recursion',
    categories: [
      {
        title: 'Time-Based Optimization',
        applications: [
          'Inventory management (multi-period)',
          'Production planning over time',
          'Revenue management (dynamic pricing)',
          'Maintenance scheduling'
        ]
      },
      {
        title: 'Algorithms',
        applications: [
          'Resource allocation over time',
          'Shortest path (Dijkstra, Bellman-Ford)'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Real and Functional Analysis',
    foundation: 'Continuity, convergence, optimization on function spaces',
    categories: [
      {
        title: 'Applications',
        applications: [
          'Continuous optimization problems',
          'Calculus of variations (optimal paths)',
          'Infinite-dimensional optimization',
          'Convergence analysis of algorithms',
          'Approximation theory for models'
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Discrete Mathematics',
    foundation: 'Counting, permutations, combinations, set theory',
    categories: [
      {
        title: 'Scheduling',
        applications: [
          'Staff rostering',
          'Production scheduling',
          'Timetabling (courses, exams)'
        ]
      },
      {
        title: 'Combinatorial Problems',
        applications: [
          'Assignment problems',
          'Bin packing (container loading)',
          'Set covering (crew scheduling)',
          'Combinatorial auctions'
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Numerical Analysis',
    foundation: 'Approximation methods, iterative algorithms, error analysis',
    categories: [
      {
        title: 'Computational Methods',
        applications: [
          'Solving large linear systems (sparse)',
          'Gradient descent methods',
          "Newton's method (nonlinear opt)",
          'Numerical integration in simulation',
          'Finite element methods'
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Statistical Analysis',
    foundation: 'Estimation, hypothesis testing, regression',
    categories: [
      {
        title: 'Forecasting',
        applications: [
          'Demand forecasting (ARIMA)',
          'Time series analysis',
          'Regression models'
        ]
      },
      {
        title: 'Quality and Testing',
        applications: [
          'Statistical process control (SPC)',
          'Six Sigma methodologies',
          'A/B testing (pricing, products)',
          'Reliability analysis',
          'Survival analysis (churn, failure)',
          'Experimental design'
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'Information Theory',
    foundation: 'Entropy, mutual information, coding theory',
    categories: [
      {
        title: 'Applications',
        applications: [
          'Network capacity planning (Shannon)',
          'Data compression for logistics',
          'Communication system optimization',
          'Feature selection in ML'
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Topology and Diff. Geometry',
    foundation: 'Continuous spaces, manifolds',
    categories: [
      {
        title: 'Applications',
        applications: [
          'Robot path planning (config spaces)',
          'Network topology optimization',
          'Manifold learning (dimension reduction)'
        ]
      }
    ]
  }
];

export const crossCuttingExamples: CrossCuttingExample[] = [
  {
    title: 'Supply Chain Optimization',
    domains: [
      'Linear algebra: Network flow matrices',
      'Stochastic processes: Demand uncertainty',
      'Graph theory: Transportation networks',
      'Optimization: Cost minimization',
      'Statistics: Demand forecasting'
    ]
  },
  {
    title: 'Portfolio Optimization',
    domains: [
      'Linear algebra: Covariance matrices',
      'Stochastic processes: Asset price modeling',
      'Optimization: Efficient frontier',
      'Statistics: Parameter estimation',
      'Numerical analysis: Solving systems'
    ]
  },
  {
    title: 'Hospital Scheduling',
    domains: [
      'Stochastic: Queuing (patient arrivals)',
      'Discrete math: Staff scheduling',
      'Optimization: Resource allocation',
      'Statistics: Demand patterns',
      'Dynamic programming: Multi-period'
    ]
  }
];

