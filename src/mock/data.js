import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Samira Gibson', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, Im',
  name: 'Mira',
  subtitle: 'Philly based Visual Designer & skateboarder.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_1372.jpg',
  paragraphOne:
    'While a lover of dad jokes and dog mom of two lovely pups, I have a speial passion for helping black entrepreneurs craft their own visual brands. I have a background in visual and digital design, ecommerce, action sports, music media, and video production',
  paragraphTwo:
    'Working and living in South Philly as a design consultant, when Im not at my desk you can find me skateboarding at Grays Ferry Skatepark, scarfing down desserts from A la Mousse, or out with my 4 year old Rottie, Rocky',
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
  cta: '',
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
