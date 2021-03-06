﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ali Raza",
  title: "Hi all, I'm Ali",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript, Vuejs, Reactjs, Node and Laravel"),
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/aliraza114",
  linkedin: "https://www.linkedin.com/in/janigaga/",
  gmail: "aliraza35690@gmail.com",
  facebook: "https://www.facebook.com/Alirazaakra/",
  instagram: "https://www.instagram.com/janigaga",
  
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your Web Applications"),
    emoji("⚡ Develop API using Laravel and Node"),
    emoji("⚡ Developing and integrating GraphQl APIs"),
    emoji("⚡ Interested in CICD, github actions and JAM stack Serverless Development"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: 'dart',
      fontAwesomeClassname: "fas fa-dart"
    },
    {
      skillName: 'laravel',
      fontAwesomeClassname: "fas fa-laravel"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",   
      company: "Dextercodes",
      companylogo: require("./assets/images/dexter.jpg"),
      date: "Nov 2020 – Present",
      desc: "Full Stack Developer using Vuejs, Reactjs for Front-End and Laravel for Back-End Development"
    },
    {
      role: "Full-Stack Developer",   
      company: "Devco",
      companylogo: require("./assets/images/devco.png"),
      date: "May 2019 – Aug 2020",
      desc: "Full Stack Developer using Vuejs for Front-End and Laravel for Back-End Development"
    },
    {
      role: "Android Developer",  
      company: "Track4Solutions",
      companylogo:  require("./assets/images/t4sol.png"),
      date: "September 2017 – March 2019",
      desc: "Android Developer using Java and XML"
    },   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/appicon.png"),
      link: "https://play.google.com/store/apps/details?id=com.t4s.apl"
    },
    {
      image: require("./assets/images/vsc.png"),
      link: "https://vitalitysolutioncenter.com/"
    },
    {
      image: require("./assets/images/alhaq.jpg"),
      link: "http://alhaq.world/"
    },
  ]
};

const projects = {
  title: "Mini Projects",
  subtitle: "Small Projects for Learning",
  projects: [
    {
      // image: require("./assets/images/covd.png"),
      name: 'Project 1',
      link: "http://aliraza-covid-19.surge.sh/"
    },
    {
      name: 'Project 2',
      link: "http://aliraza-type-quiz.surge.sh/"
    },
    {
      name: 'Project 3',
      link: "http://aliraza-personalexpanse.surge.sh/"
    },
  ]
};

// Talks Sections

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3468112114",
  email_address: "Aliraza35690@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, projects ,contactInfo };
