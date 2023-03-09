import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bobby | Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bobby Hart',
  subtitle: "I'm a Backend Developer",
  cta: '',
};

// SKILLS DATA
export const skillsData = {
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Logov1.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
  email: 'bobbydhart1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //  id: nanoid(),
    //  name: 'twitter',
    //  url: '',
    // },
    // {
    //  id: nanoid(),
    //  name: 'codepen',
    //  url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robert--hart/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/robertdhart99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
