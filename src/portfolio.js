/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdul Wasay Khan",
  title: "Hi all, I'm Abdul",
  subTitle: emoji(
    "A passionate Engineering Manager 🚀 based in Berlin with over 12 years of experience in software design, development, and integration, I specialize in cloud, web, and mobile lifecycles. I have proven expertise in building and leading high-performing Agile teams, driving innovation, and delivering scalable solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JgPfDM0N33qM0obx6qDozJ4iR5uaT7id/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdul-wk",
  linkedin: "https://www.linkedin.com/in/abdul-wasay-khan-70b50070/",
  gmail: "wasaykhan.89@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
   facebook: "https://www.facebook.com/abdul.wasay.35",
   medium: "https://medium.com/@wasaykhan.89",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Engineering Manager with a passion for building high-performing teams and scalable solutions, plus expertise in a diverse tech stack.",

  skills: [
    emoji(
      "⚡ Lead and mentor cross-functional engineering teams to deliver impactful software solutions."
    ),
    emoji("⚡ Drive the design, development, and deployment of scalable and efficient applications across cloud, web, and mobile platforms."),
    emoji(
      "⚡ Foster collaboration and promote best practices in Agile environments to ensure high-quality, on-time delivery."
    ),
    emoji(
        "⚡ Architect and implement technical solutions that align with business goals and customer needs."
    ),
    emoji(
        "⚡ Oversee integration of third-party services like Stripe, PayPal, and other cloud platforms to enhance functionality and performance."
    ),
    emoji(
          "⚡ Build engineering teams from scratch, hiring top talent and cultivating a culture of innovation and accountability."
    ),
    emoji(
        "⚡ Build engineering teams from scratch, hiring top talent and cultivating a culture of innovation and accountability."
    ),
    emoji(
        "⚡ Partner with business leaders to identify opportunities where technology can drive revenue growth and streamline operations."
    ),
    emoji(
        "⚡ Provide regular feedback and mentorship to engineers, helping them grow in their careers and improve their technical expertise."
    ),
    emoji(
        "⚡ Establish clear technical roadmaps and align them with long-term business objectives to ensure sustainable growth."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "groovy",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "mongo",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-box"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Computer and Emerging Sciences",
      logo: require("./assets/images/university.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "2008 - 2012",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Manager",
      company: "Element Insurance AG - Berlin",
      companylogo: require("./assets/images/Element.png"),
      date: "Feb 2023 – Present",
      descBullets: [
        "Managing a team of 8 software engineers on the development of 3 different domains",
        "Advocated for and implemented best practices such as event-driven architecture, ensuring scalable and\n" +
        "maintainable solutions.",
        "Automated the user flow, reducing operational manual efforts by 25%.",
        "Collaborated with product managers, Principal Engineer, and other stakeholders to define priorities and\n" +
        "deliver business-critical solutions.",
        "Maintained a hands-on approach, diving into technical details when necessary to support the team in tackling\n" +
        "challenges effectively."
      ]
    },
    {
      role: "Engineering Manager",
      company: "Techelix",
      companylogo: require("./assets/images/techelix.png"),
      date: "April 2022 – Jan 2023",
      descBullets:[
          "Designed and implemented organizational structures, streamlining team workflows and reducing project\n" +
          "delivery time by 25%.",
          "Established engineering best practices, including agile methodologies, and CI/CD pipelines, improving team\n" +
          "productivity by 30%.",
          "Devised and enforced coding standards and documentation processes, enhancing code maintainability and\n" +
          "reducing onboarding time for new hires by 50%.",
          "Partnered with stakeholders to define technical priorities and align engineering goals with business\n" +
          "objectives."
      ]
    },
    {
      role: "Principal Software Engineer",
      company: "10Pearls",
      companylogo: require("./assets/images/10p.png"),
      date: "July 2021 – Jan 2023",
      descBullets: [
          "Led a team of 12 remote developers, ensuring timely delivery of high-quality solutions.",
          "Planned system scalability to accommodate future demands",
          "Scaled the product from supporting thousands to millions of users, ensuring performance, reliability, and\n" +
          "scalability.",
          "Maintained technical culture while working with multiple cross-functional teams.",
          "Mentored senior engineers, fostering technical growth and preparing them for leadership roles to build a stronger engineering team."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "10Pearls",
      companylogo: require("./assets/images/10p.png"),
      date: "Dec 2013 – Jun 2021",
      descBullets: [
        "Designed and developed scalable programming systems.",
        "Conducted code reviews and trained junior developers.",
        "Researched and recommended software development tools, enhancing team eﬃciency.",
        "Maintained technical culture while working with multiple cross-functional teams.",
        "Mentored senior engineers, fostering technical growth and preparing them for leadership roles to build a stronger engineering team."
      ]
    },
    {
      role: "Software Engineer",
      company: "Doozie Labs",
      companylogo: require("./assets/images/doozielabs_logo.png"),
      date: "Jan 2013 – Dec 2013",
      descBullets: [
        "Conducted full life-cycle application development for web and mobile platforms.",
        "Assisted teams with R&D tasks and technical challenges.",
        "Implemented front-end graphical user interfaces to enhance user experience.",
        "Developed and optimized backend APIs to ensure seamless integration and high performance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      image: require("./assets/images/aws.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/858c0441-e0c9-4349-9782-8c399287ec21"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some blogs I've written to share my journey, lessons, and tips in software development.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@wasaykhan.89/a-rare-kafka-use-case-how-it-could-have-saved-the-day-during-a-database-corruption-d38128c9b3e4",
      title: "A Rare Kafka Use Case",
      description:
          "How Kafka could have saved the day during a database corruption."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "44545454",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
