import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: 'Aller Media Oy, Helsinki',
    period: 'May 2022 — August 2025',
    title: 'Full-stack developer',
    description: {
      1: 'Developed and maintained Seiska.fi, a high-traffic digital media platform serving nearly 1 million users weekly (FIAM & Kilkaya).',
      2: 'Worked on the large-scale Seiska.fi redesign and migration from Next.js v12 to v14 (App Router), adopting Tailwind CSS and a new frontend architecture, resulting in increased traffic, higher user engagement, and improved performance.',
      3: 'Implemented a unified authentication system using NextAuth.js, AWS Cognito and AWS Lambda that improved the accuracy of user data and enabled editors to publish premium content behind login, strengthening analytics and supporting data-driven content strategy.',
      4: 'Built and maintained automated testing practices (Unit and E2E), strengthening code quality and reliability of the platform.',
      5: 'Customized and migrated the company’s CMS from Drupal to Labrador CMS, including editorial features and full data migration, resulting in a more efficient and editor-friendly platform.',
      6: 'Built an internal application that captured coupon data from barcode scanner, stored it in DynamoDB, and displayed it in a structured frontend view for use by Marketing and Retail teams.',
      7: 'Collaborated in an agile, cross-functional team, contributing to sprint planning, code reviews, feature rollouts, and onboarding of new team members.',
    },
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'Node.js',
      'REST APIs',
      'TanStack Query',
      'AWS',
      'AWS CDK',
      'React Testing Library',
      'Playwright E2E Testing',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    company: 'Integrify Oy',
    period: 'January 2022 — April 2022',
    title: 'Full-stack developer',
    description: {
      1: 'Participated in training program for full-stack development and DevOps practices.',
      2: 'Studied and collaborated closely with fellow developers to deepen expertise in TypeScript, React.js, Redux, Docker, AWS services in addition to other technologies and concepts such as accessibility.',
      3: 'Contributed to knowledge sharing, pair programming, and code reviews, fostering a culture of continuous learning and improvement.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Redux Toolkit',
      'AWS',
      'Docker',
    ],
  },
  {
    company: 'Hivemind Ltd, Turku',
    period: 'October 2020 — March 2021',
    title: 'Developer',
    description: {
      1: 'Worked on developing invoice generator application.',
      2: 'Responsible for front-end development of the application for creating invoice template and other pages to display invoice information.',
      3: 'Contributed to the creation of technical documentation.',
    },
    technologies: ['React', 'Redux', 'Material-UI', 'Firestore'],
  },
  {
    company: 'Web2Fix Oy, Helsinki',
    period: 'January 2013 — July 2013',
    title: 'Software Developer',
    description: {
      1: 'Supported the development of a website for a car dealership.',
      2: 'Updated the UI of the website according to the user requirements.',
      3: 'Developed a Content Management System by using jQuery in the front-end and PHP with MySQL in the back-end of the system.',
    },
    technologies: ['PHP', 'MySQL', 'jQuery', 'HTML', 'CSS'],
  },
];
