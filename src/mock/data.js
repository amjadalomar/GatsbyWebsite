import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amjad Al-Omar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website! Please come in the waters fine!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! I am ',
  name: 'Amjad Al-Omar',
  subtitle: 'Super Cool Dude',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Software Engineering Inter at Duoserve Inc.',
    info: '',
    info2: '',
    url: 'http://www.duoserve.com/scheduling-software/Landing/Landing2',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Frontend Developer for EZStudy',
    info: '',
    info2: '',
    url: 'https://github.com/amjadalomar/EZStudy',
    repo: 'https://github.com/amjadalomar/EZStudy', // if no repo, the button will not show up
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
  email: 'amjadalomar99@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_amjad99_',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/amjawnz/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amjad-al-omar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amjadalomar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
