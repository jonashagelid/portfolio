import Fruitapp from '../assets/iosexam.png';
import Tha from '../assets/tha.png';
import Retro from '../assets/retro.png';

const projectsData = [
  {
    id: 1,
    image: Tha,
    text: 'The Human Aspect',
    description: 'Bachelor project for The Human Aspect, a mental health foundation. Written in TypeScript with Next.js, Sass, Nuxt.js.',
    link: 'https://thehumanaspect.com/',
  },
  {
    id: 2,
    image: Retro,
    text: 'Retro Game Marketplace',
    description: 'Exam project for cross platform development. Written with Vue and Ionic and utilizing database from Directus.',
    link: 'https://github.com/jonashagelid/TDS200_h22_1057',
  },
  {
    id: 3,
    image: Fruitapp,
    text: 'Nutrition App',
    description: 'Exam project from iOS programming. Written using SwiftUi and fetching data using the Fruityvice api.',
    link: 'https://github.com/jonashagelid/iosexam',
  },
];

export default projectsData;