import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'React Router',
      'TanStack Query',
      'Redux',
      'Redux Toolkit',
      'Zustand',
    ],
  },
  {
    category: 'UI & Styling',
    skills: [
      'Vanilla CSS',
      'Tailwind CSS',
      'Styled Components',
      'Sass',
      'Material-UI',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'DynamoDB',
    ],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Playwright E2E Testing'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'GitHub Actions'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Tools & Others',
    skills: [
      'VS Code',
      'Cursor',
      'Postman',
      'Figma',
      'Slack',
      'Microsoft Teams',
    ],
  },
];
