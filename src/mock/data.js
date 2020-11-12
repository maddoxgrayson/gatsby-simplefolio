import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Samira Gibson', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Mira',
  subtitle: 'Philly based Visual Designer & skateboarder.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_1372.jpg',
  paragraphOne:
    'With a background in visual & digital design, ecommerce, action sports, music media, and video production, I have a special passion for helping black entrepreneurs craft their own visual brands. A lover of dad jokes and manga, I live at the intersection of design + code with a degree in computer technology focusing on digital media.',
  paragraphTwo:
    "Working and living in South Philly as a design consultant, when I'm not at my desk you can find me skateboarding at Grays Ferry Skatepark, scarfing down desserts from A la Mousse, or out on walks with my lovely partner, our 7 yr old beagle Theo and 4 yr old Rottie, Rocky.",
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Work on a project? I'd love to connect!",
  btn: '',
  email: 'samira.gibsonchc@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/maddox_grayson',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samira-gibson-02429436/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maddoxgrayson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
