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
  subtitle: 'Welcome to my world!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'Hello hello! My name is Amjad Al-Omar. I am currently a 4th year Mathematics-Computer Science student at the University of California San Diego. ',
  paragraphTwo: 'I am a hardworking and passionate aspiring Software Engineer with a specialization in Back-End Development and Infrastructure. I strive to improve my skillset by seeking out learning opportunities in my personal and professional life. My professional goals are to ultimately work as a successful Back-End Engineer in the Tech Industry.',
  paragraphThree: 'When I am not studying, I enjoy peaceful walks around the park. If I ever get the chance, I play basketball and soccer with my friends or watch anime. Some other hobbies of mine include going on runs, playing board games, and doing puzzles.',
  resume: 'AmjadAlOmarResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Software Engineering Intern at Duoserve Inc.',
    info: 'Aided in CI/CD of a calendar-based enterprise management application on iOS and Android for 2000+ companies. Created reusable generic base frameworks that will be incorporated into other future apps within the company. Fully constructed mock database and unit tested CRUD functionality on the user side for the entire application.',
    info2: 'Assisted in implementing a gRPC backend and connected to MySQL database with over 10000+ appointments. Designed and fully constructed 5+ recurring screens and programmed settings, recurring appointments, and client/client list screens and their functionality.',
    url: 'http://www.duoserve.com/scheduling-software/Landing/Landing2',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Team Member for EZStudy',
    info: 'Created a full-stack web application for SDHacks 2019 to help students study for their exams by visually parsing student notes and providing study resources based on key terms extracted by AWS Textract.',
    info2: 'Designed an interactive front-end with React, a RESTful back-end for image processing with Node.js and Express, and a database with MongoDB for storing study resources given to users matching their notes.',
    url: 'https://github.com/amjadalomar/EZStudy',
    repo: 'https://github.com/amjadalomar/EZStudy', // if no repo, the button will not show up
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
