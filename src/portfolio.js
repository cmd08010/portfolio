/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
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
    "https://drive.google.com/file/d/1Dlq5PKRHBcykYMVE9ooMgNefDd-Q4E1T/view?usp=sharing",
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
        "⚡ Building responsive websites/front end applications using React and Javascript",
        "⚡ Creating application backend in Node, Express, Python & DJango",
        "⚡ Always learning, developing my skills, and collaborating on new projects!",
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
      siteName: "",
      iconifyClassname: "",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "General Assembly",
      subtitle: "Software Engineering Immersive Fellow",
      logo_path: "182367.svg",
      alt_name: "GA",
      duration: "January 2021 - April 2021",
      descriptions: [
        "⚡ Worked in a fast-paced and intensive cooperative environment to develop as a software engineer.",
        "⚡ Participated on numerous teams to design, develop, maintain and test applications, coordinate project planning, and perform code reviews and using pair programming, continuous integration and agile software development methodologies.",
        "⚡ Utilized numerous Front-end and Back-end Frameworks/Libraries, RESTFul APIS, Databases and Database tools to create projects and meet deadline driven milestones",
      ],
      website_link: "https://generalassemb.ly/",
    },
    {
      title: "Southern New Hampshire University",
      subtitle: "MS in Data Analytics",
      logo_path: "snhu.png",
      alt_name: "SNHU",
      duration: "2018-present",
      descriptions: ["⚡ Studied Data Analytics"],
      website_link: "https://uconn.edu/",
    },
    {
      title: "University of Connecticut",
      subtitle: "BS in Actuarial Science",
      logo_path: "uconn-logo.png",
      alt_name: "UConn",
      duration: "2008-2013",
      descriptions: [
        "Relevant Coursework:",
        "⚡   Actuarial Modeling and Financial Mathematics",
        "⚡   Risk Management and Insurance",
        "⚡    Technical Writing for Actuaries",
        "⚡   Actuarial Statistics/ Statistical Analysis",
      ],
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
    "I have a vast array of different work and volunteer experiences. From working at large corporations to teaching English in another country, I have gained an interesting perspective on life and all the challenges and opportunites that come along with it.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "eService Support Team Member/Training Facilitator",
          company: "Prudential",
          company_url: "https://prudential.com/",
          logo_path: "prudential-7.svg",
          duration: "2016 - 2019",
          location: "Jacksonville, Fl",
          description: [
            "• Worked with software developers to translate user feedback into technical goals to integrate new features and improve the software development process based on business requirements.",
            "• Analyzed and mined data to examine trends in Prudential.com site usage.",
            "• Completed testing for all web related and Interactive Voice Response (IVR) related system releases and updates including troubleshooting and resolving all issues before new releases were pushed to a production environment.",
            "• Received a company-wide award in 2018 for developing a new program to improve cross-site processes, reduce paper-waste and save ~$70k and ~30 work hours per quarter.",
            "• Traveled to overseas vendor location to provide training for 30+ employees and supervise the onboarding process.",
          ],
          color: "#0879bf",
        },
        {
          title: "Customer Care Advocate",
          company: "United Health Group",
          company_url: "https://www.uhc.com/",
          logo_path: "unitedhealthcare-logo.png",
          duration: "2014-2015",
          location: "Hooksett, NH",
          description: `• Managed escalated cases which involved routine case follow up and communicating with doctor’s offices, facilities, insurance companies and brokers to resolve any member account issues.
            • Reviewed member accounts to ensure accurate claim processing, medical billing practices, and insurance regulations.`,
          color: "#0879bf",
        },
        {
          title: "Defined Contribution Specialist",
          company: "Fidelity",
          company_url: "https://fidelity.com/",
          logo_path: "fidelity-logo-transparent.png",
          duration: "2013-2014",
          location: "Merrimack, NH",
          description: `• Provided outstanding customer service to inbound callers while educating and responding to their inquiries and requests on employee benefit plans`,
          color: "#0879bf",
        },
        {
          title: "Student Manager",
          company: "UConn",
          company_url: "https://uconn.edu",
          logo_path: "uconn-logo.png",
          duration: "2009-2013",
          location: "Storrs, CT",
          description: `• Promoted steadily five times from an entry level position to running a shop of 80 employees.
          • Documented and improved implementation of troubleshooting processes.
          • Troubleshooted and resolved user issues over the phone and in person
          • Revised and updated the employee training programs including interviewing potential applicants.
          • Utilized IT, call center, and clerical skills to support all actions of the organization.
          • Participated in university wide committees to improve the Division of Student Affairs.
          `,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern,",
          company: "fliiTree",
          company_url: "https://fliitree..com/",
          logo_path: "google_logo.png",
          duration: "July 2020 - Present",
          location: "",
          description:
            "Work with the founder to create new iterations of the application and roadmap a plan to add new features. Provide feedback and data to marketing team to improve the user experience and increase traffic and number of users. Worked with a team of 3 to improve functionality and upgrade existing features based on user and internal feedback.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "World Human Bridge - Bolivia",
          company: "World Human Bridge",
          company_url:
            "https://sites.google.com/a/human-bridge.org/human-bridge-bolivia/",
          logo_path: "google_logo.png",
          duration: "January 2011 - April 2011",
          location: "Sipe Sipe, Bolivia",
          description:
            " • Developed and implemented English language coursework for all levels. • Instructed all levels of students, from adults to young children with various levels of English proficiency.",
          color: "#4285F4",
        },
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
      ],
    },
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
