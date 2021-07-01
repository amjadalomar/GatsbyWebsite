import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amjad Al-Omar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website! Please come in the waters fine!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m ',
  name: 'Amjad Al-Omar',
  subtitle: 'I strive to become a succesful programmer or something like that :)',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'Hello hello! My name is Amjad Al-Omar. I am currently a 4th year Mathematics-Computer Science student at the University of California San Diego. ',
  paragraphTwo: 'I am a hardworking and passtionate Software Engineer with a specialization in Back-End development and Infrastructure. I strive to improve my skillset by seeking out learning oppurtinities in my personal and professional life. My professional goals are to ultimately work as a successful Back-End Engineer in the Tech Industry.',
  paragraphThree: 'When I am not studying, I like to relax and enjoy some peace and quiet. If I ever get the chance, I play basketball and soccer with my friends or watch anime. Some other hobbies of mine include going on runs, playing board games, and doing puzzles.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Software Engineering Intern at Duoserve Inc.',
    info: '',
    info2: '',
    url: 'http://www.duoserve.com/scheduling-software/Landing/Landing2',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Software Engineer for EZStudy',
    info: 'Created a full-stack web application for SDHacks 2019 to help students study for their exams by visually parsing student notes and providing study resources based on key terms extracted by AWS Textract.',
    info2: 'Designed an interactive front-end with React, a RESTful back-end for image processing with Node.js and Express, and a database with MongoDB for storing study resources given to users matching their notes.',
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
