/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Colleen's Portfolio",
  description:
    "I am an action-biased software developer looking for a new challenge with a tech-forward innovative team. I love finding creative solutions and thinking out of the box to solve problems. I focus on organization and am very detail oriented. I have a passion for learning new technologies and building my knowledge-base.",
  og: {
    title: "Colleen's Portfolio",
    type: "website",
    url: "http://colleendunion.com/",
  },
};

//Home Page
const greeting = {
  title: "Colleen Dunion",
  logo_name: "Colleen Dunion",
  nickname: "",
  subTitle:
    "I am an action-biased software developer looking for a new challenge with a tech-forward innovative team. I love finding creative solutions and thinking out of the box to solve problems. I focus on organization and am very detail oriented. I have a passion for learning new technologies and building my knowledge-base.",
  resumeLink:
    "https://drive.google.com/file/d/1GnCTEtzMIGpmW6B1p2mKvrZeGdA_XJ9m",
  portfolio_repository: "https://github.com/cmd08010/portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/cmd08010",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/colleendunion",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:colleendunion@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express, Python & DJango",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Mongodb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "General Assembly",
      subtitle: "Software Engineering Immersive Fellow",
      logo_path: "uconnicon.jpeg",
      alt_name: "GA",
      duration: "January 2021 - April 2021",
      descriptions: [
        "⚡ Worked in a fast-paced and intensive cooperative environment to develop as a software engineer.",
        "⚡ Participated on numerous teams to design, develop, maintain and test applications, coordinate project planning, and perform code reviews and using pair programming, continuous integration and agile software development methodologies.",
        "⚡ Utilized numerous Front-end and Back-end Frameworks/Libraries, RESTFul APIS, Databases and Database tools to create projects and meet deadline driven milestones",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "University of Connecticut",
      subtitle: "BS in Actuarial Science",
      logo_path: "uconnicon.jpeg",
      alt_name: "UConn",
      duration: "2008-2013",
      descriptions: ["⚡ Studied actuarial science."],
      website_link: "https://uconn.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "",
      subtitle: "",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have many different work and volunteer experiences. From working ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "eService Support Team Member/Training Facilitator,",
          company: "Prudential",
          company_url: "https://prudential.com/",
          logo_path: "legato_logo.png",
          duration: "May 2016 - Oct 2019",
          location: "Jacksonville, Fl",
          description:
            "Worked with software developers to translate user feedback into technical goals to integrate new features and improve the software development process based on business requirements Analyzed and mined data to examine trends in Prudential.com site usage Completed testing for all web related and Interactive Voice Response (IVR) related system releases and updates including troubleshooting and resolving all issues before new releases were pushed to a production environmentReceived a company-wide award in 2018 for developing a new program to improve cross-site processes, reduce paper-waste and save ~$70k and ~30 work hours per quarter Traveled to overseas vendor location to provide training for 30+ employees and supervise the onboarding process.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern,",
          company: "fliiTree",
          company_url: "https://fliitree..com/",
          logo_path: "legato_logo.png",
          duration: "July 2020 - Present",
          location: "",
          description:
            "Work with the founder to create new iterations of the application and roadmap a plan to add new features. Provide feedback and data to marketing team to improve the user experience and increase traffic and number of users. Worked with a team of 3 to improve functionality and upgrade existing features based on user and internal feedback.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "logo192.png",
    description: "I am available by email or reach out to me on LinkedIn",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  phoneSection: {
    title: "Phone Number",
    subtitle: "Reach out to my Email!",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
