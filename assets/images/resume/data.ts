interface ExperienceData {
  position: string;
  dates: string[];
  company: string;
  tech: string[];
  bullets: string[];
  media: IMedia[];
}

export interface IMedia {
  type: MediaType;
  title: string;
  source: string;
}

export enum MediaType {
  YOUTUBE = 'youtube',
  IMG = 'image',
  GITHUB = 'github',
  USGS = 'usgs',
  SPOTIFY = 'spotify',
}

export const data: ExperienceData[] = [
  {
    position: 'Program Director, Business Innovation & IT Alignment',
    dates: ['01/2022', '08/2026'],
    company: 'H&R Block',
    tech: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'Cosmos DB',
      'React',
      'Redux',
      'Jest',
      'React Testing Library',
      'Power Automate',
      'Figma',
    ],
    // tech: [],
    bullets: [
      'Developed a facilitated innovation framework to build cross-functional AI/ML product features, while establishing uniform templates for cost/benefit analyses, product proposals, presentations, and handoffs.',
      "Directed 2 cross-functional teams that emerged from prior framework iterations - Work Center's Next Best Action feature, and Appointment Manager's no-show/cancellation ML prediction model which targeted $6.45M in annual profit conservatively, demonstrating a validated concept-to-scale transition.",
      "Authored enterprise innovation strategy as the Engineering Culture Council's Innovation Subcommittee co-lead.",
      'Served as product owner and tech lead for the Data Science & Analytics Hub website - a custom enterprise business intelligence platform and content management system; achieved 99.99% uptime, 35% YoY adoption growth, and 5.6M annual report views.',
      'Directed development of an embedded self-service data analysis AI chatbot querying internal data to deliver stakeholder summaries and visualizations, reducing time-to-insight from weeks to minutes.',
      'Directed prototype development across 5 initiatives: a multi-AI agent orchestration system for store placement analysis, a two-sided marketplace connecting clients with local business offers ($8M/yr projected profit), a real user monitoring system with ML-driven interventions to reduce onboarding friction, an AI browser extension for Azure DevOps, and a commenting browser extension for Microsoft Purview.',
      'Facilitated 50% increase in YoY throughput by developing an automated work request process.',
    ],
    media: [
      {
        type: MediaType.IMG,
        title: 'Multi-AI Orchestration System - MD',
        source: 'multi-ai-orchestration-md.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Multi-AI Orchestration System - Urbanicity',
        source: 'multi-ai-orchestration-urbanicity.webp',
      },
      {
        type: MediaType.IMG,
        title: 'H&R Block Perks client view',
        source: 'hrb_perks_client.png',
      },
      {
        type: MediaType.IMG,
        title: 'H&R Block Perks business view',
        source: 'hrb_perks_business.png',
      },
      {
        type: MediaType.IMG,
        title: 'Data Science & Analytics Hub',
        source: 'dsa-hub.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Session Replay',
        source: 'session-replay.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Azure DevOps Assistant response',
        source: 'ada-response.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Azure DevOps Assistant without data',
        source: 'ada-no-data.webp',
      },
    ],
  },
  {
    position: 'Web Developer & Graphic Designer',
    dates: ['10/2013', '12/2025'],
    company: 'Freelance',
    tech: [
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Node.js',
      'Express.js',
      'React',
      'Redux',
      'Bootstrap',
      'AWS',
      'Adobe',
    ],
    bullets: [
      'Drove product development from discovery to deployment for clients, combining software engineering, digital media, and hands-on project, budget, and vendor management.',
    ],
    media: [
      {
        type: MediaType.IMG,
        title: 'Camp and a Cuppa',
        source: 'camp-and-a-cuppa.jpeg',
      },
      {
        type: MediaType.IMG,
        title: 'Wedding Invitation',
        source: 'wedding-invitation.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Blonde Sugar Skull',
        source: 'blonde-sugar-skull.jpeg',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Doll',
        source: '7Rd-K9QlEik',
      },
      {
        type: MediaType.IMG,
        title: 'Natural Energy Law logo',
        source: 'natural-energy-law-logo.webp',
      },
      {
        type: MediaType.IMG,
        title: 'My Wife',
        source: 'my-wife.webp',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Only You',
        source: 'LfKAxTpG0sY',
      },
      {
        type: MediaType.IMG,
        title: 'Flow',
        source: 'flow.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Illusions',
        source: 'illusions.jpeg',
      },
      {
        type: MediaType.IMG,
        title: 'Caffeine Crime Scene',
        source: 'caffeine-crime-scene.jpeg',
      },
      {
        type: MediaType.IMG,
        title: 'Hot Ones',
        source: 'hot-ones.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Scotch',
        source: 'scotch.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Peach & Eggplant',
        source: 'peach-eggplant.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Nude',
        source: 'nude.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Orchid',
        source: 'orchid.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Peacock Feathers',
        source: 'peacock-feathers.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Baker Park',
        source: 'baker-park.webp',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Chicken & Pig',
        source: 'RVrj_A3uHuA',
      },
      {
        type: MediaType.IMG,
        title: 'Scream',
        source: 'scream.webp',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Mosaic',
        source: 'e4mPkI8JIfk',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'AI Communication Coach',
        source: 'RJUtkKnL1Nw',
      },
      {
        type: MediaType.GITHUB,
        title: 'Memoji',
        source: 'memoji',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Graphical Expense Tracker',
        source: 'JR3ExrJVkgg',
      },
      {
        type: MediaType.YOUTUBE,
        title: 'Data Visualization Dashboard',
        source: 'ZVvO2nj2gUw',
      },
      {
        type: MediaType.IMG,
        title: 'Piecemeal',
        source: 'piecemeal.jpeg',
      },
      {
        type: MediaType.IMG,
        title: 'Ingredient Multiplier',
        source: 'ingredient-multiplier.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Nutrition Facts',
        source: 'nutrition-facts.webp',
      },
      {
        type: MediaType.IMG,
        title: 'Admin CMS',
        source: 'at-ease-recipes.jpeg',
      },
    ],
  },
  {
    position: 'Software Engineer',
    dates: ['02/2021', '01/2022'],
    company: 'Guaranteed Rate',
    tech: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'React',
      'Redux',
      'TailwindCSS',
      'Chart.js',
      'Jest',
      'React Testing Library',
    ],
    bullets: [
      'Deployed MVP in 6 months by leading frontend development for a new customer-facing web application.',
      'Built an automated browser screenshot uploader as part of an error logging strategy.',
    ],
    media: [
      {
        type: MediaType.GITHUB,
        title: 'Screenshot Uploader',
        source: 'screenshot-uploader',
      },
      // {
      //   type: MediaType.GITHUB,
      //   title: 'Home Valuation Chart',
      //   source: 'home-valuation-chart',
      // },
    ],
  },
  {
    position: 'Developer',
    dates: ['09/2020', '02/2021'],
    company: 'Virtual Service Operations',
    tech: [
      'TypeScript',
      'MongoDB',
      'Node.js',
      'GraphQL',
      'Express.js',
      'NestJS',
      'Angular',
    ],
    bullets: [
      'Generated over $40,000 in revenue within the first month via velocity as a service.',
      'Automated the manual frontend build process across 6 modules reducing build time by 1 hour.',
    ],
    media: [],
  },
  {
    position: 'Visual Information Specialist',
    dates: ['04/2018', '03/2020'],
    company: 'U.S. Geological Survey',
    tech: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign',
      'JavaScript',
    ],
    bullets: [
      'Advanced publishing lifecycle of 30+ digital and print products, including a Congressional Circular.',
      'Built a website prototype allowing stakeholders to monitor the status of digital products.',
      'Created and administered the product brief for Section 508-compliant digital and print products.',
      'Established and administered the product review process for stakeholders across the organization.',
    ],
    media: [
      {
        type: MediaType.USGS,
        title:
          'Drinking Water Health Standards Comparison and Chemical Analysis of Groundwater for 72 Domestic Wells in Bradford County, Pennsylvania, 2016',
        source: 'sir20185170',
      },
      {
        type: MediaType.USGS,
        title:
          'Effective Solubility Assessment for Organic Analytes in Liquid Samples, BKK Class I Landfill, West Covina, California, 2014-16',
        source: 'ofr20191080',
      },
      {
        type: MediaType.USGS,
        title:
          'Gap Analysis Project (GAP) Terrestrial Vertebrate Species Richness Maps for the Conterminous U.S.',
        source: 'sir20195034',
      },
      {
        type: MediaType.USGS,
        title:
          'Drought forecasting for streams and groundwaters in northeastern United States',
        source: 'fs20193015',
      },
      {
        type: MediaType.USGS,
        title:
          'Geomorphic characteristics of Tenmile Creek, Montgomery County, Maryland, 2014-16',
        source: 'sir20185098',
      },
      {
        type: MediaType.USGS,
        title: 'Hurricane Sandy Impacts on Coastal Wetland Resilience',
        source: 'ofr20181142',
      },
      {
        type: MediaType.USGS,
        title:
          'Spatial Distribution of Nutrients, Chloride, and Suspended Sediment Concentrations and Loads Determined by Using Different Sampling Methods in a Cross Section of the Trenton Channel of the Detroit River, Michigan, November 2014-November 2015',
        source: 'sir20185141',
      },
      {
        type: MediaType.USGS,
        title: 'U.S. Geological Survey (USGS) Water-Use Websites',
        source: 'fs20183044',
      },
      {
        type: MediaType.USGS,
        title:
          'Agricultural Conservation Practice Implementation in the Chesapeake Bay Watershed Supported by the U.S. Department of Agriculture',
        source: 'ds1102',
      },
      {
        type: MediaType.USGS,
        title:
          'An initial comparison of pesticides and amphibian pathogens between natural and created wetlands in the New Jersey Pinelands, 2014-16',
        source: 'ofr20181077',
      },
      {
        type: MediaType.USGS,
        title:
          'Water Priorities for the Nation—The U.S. Geological Survey Next Generation Water Observing System',
        source: 'fs20193046',
      },
      {
        type: MediaType.IMG,
        title: 'Amphibian Research & Monitoring Initiative',
        source: 'usgs-armi.jpeg',
      },
      {
        type: MediaType.IMG,
        title: 'USGS Coin',
        source: 'usgs-coin.jpeg',
      },
    ],
  },
  {
    position: 'Cavalry Scout',
    dates: ['02/2012', '02/2015'],
    company: 'U.S. Army',
    tech: [],
    bullets: [
      'Oversaw maintenance program for $2.3M+ in assets by developing operational readiness processes.',
      'Trained 3 team members on tactics and operations leading to a promotion for each.',
    ],
    media: [],
  },
  {
    position: 'Professional Musician',
    dates: ['04/2002', '10/2011'],
    company: 'Fools & Horses',
    tech: [],
    bullets: [
      'Oversaw end-to-end launch of 4 products by managing external vendors and investors, delivering on time and within budget, while leading a merchandise redesign initiative driving over 200% revenue increase.',
      'Managed production logistics by sourcing and coordinating equipment, locations, and talent, while facilitating national media exposure on MTV, A&E, E!, Fuse TV, and NBC.',
      'Increased earnings by 10% through contract negotiation, international event logistics coordination, and campaign development including promotional content and market outreach.',
    ],
    media: [
      {
        type: MediaType.YOUTUBE,
        title: '"3 Chords" Music Video',
        source: '32va-LZ0VTg',
      },
      {
        type: MediaType.SPOTIFY,
        title: '"Fools & Horses" Album (2010)',
        source: '3WOYK8ri6e0LVXUP2TzdQX',
      },
      {
        type: MediaType.SPOTIFY,
        title: '"I Am the Ghost" Album (2008)',
        source: '3cYqxvG3oqW3ycsBY6qwYi',
      },
      {
        type: MediaType.SPOTIFY,
        title: '"Pop Filter" Album (2006)',
        source: '74CraLuG2gJ8gibyWXdaHP',
      },
      {
        type: MediaType.SPOTIFY,
        title: '"Pop Filter - Rethoughts" Album (2006)',
        source: '2bmjpeilZ5TZyB5GeOFrxN',
      },
      {
        type: MediaType.SPOTIFY,
        title: '"Saturday Morning" Album (2004)',
        source: '6EjpogQNmkidlbV0fmWaBH',
      },
      {
        type: MediaType.IMG,
        title: 'Fools & Horses Promo Poster',
        source: 'fools-and-horses.jpeg',
      },
    ],
  },
];

export const highlights = [
  {
    category: 'Innovation Strategy & Organizational Leadership',
    bulletPoints: [
      "Developed a facilitated innovation framework -- including uniform templates for cost/benefit analyses, product proposals, and stakeholder handoffs -- and authored enterprise-wide innovation strategy as co-lead for the Engineering Culture Council's Innovation Subcommittee.",
      "Directed 2 cross-functional teams that emerged from prior framework iterations -- Work Center's Next Best Action feature and Appointment Manager's no-show/cancellation ML prediction model -- demonstrating a validated concept-to-scale transition.",
      'Oversaw end-to-end launch of 4 products as an independent music entrepreneur, managing external vendors and investors, delivering on time and within budget, while leading a merchandise redesign initiative that drove over 200% revenue increase.',
    ],
  },
  {
    category: 'P&L Impact & Business Results',
    bulletPoints: [
      'Directed initiatives targeting $6.45M in annual profit, conservatively, through validated ML-driven product features.',
      'Led discovery and prototype development of a two-sided marketplace connecting clients with local business offers, projected to generate $8M/yr in profit.',
      'Achieved 99.99% uptime, 35% YoY adoption growth, and 5.6M annual report views as product owner for a custom enterprise BI platform and content management system.',
    ],
  },
  {
    category: 'Enterprise Platforms & Emerging Technology',
    bulletPoints: [
      'Directed development of an embedded self-service data analysis AI chatbot querying internal data to deliver stakeholder summaries and visualizations, reducing time-to-insight from weeks to minutes.',
      'Directed prototype development across 4 other initiatives: a multi-AI agent orchestration system for store placement analysis, a real user monitoring system with ML-driven interventions to reduce onboarding friction, an AI browser extension for Azure DevOps, and a commenting browser extension for Microsoft Purview.',
      'Served as tech lead for a custom enterprise BI platform and content management system -- a full-scale internal build spanning architecture, SDLC and PDLC, and content management.',
    ],
  },
];
