export const personal = {
  name: "Msy Rizkia Yuniandari",
  shortName: "Rizkia",
  email: "msyrizkiayuniandari1@gmail.com",
  phone: "+62 82248472562",
  location: "Depok, West Java, Indonesia",
  linkedin: "https://www.linkedin.com/in/msy-rizkia-yuniandari-a01938295",
  instagram: "https://www.instagram.com/masayu_r/",
  whatsapp: "https://wa.me/6282248472562",
  cv: "https://drive.google.com/file/d/1j3DqVwnSPXD8wTEwT20M_KgBERuBLLzS/view",
  photo: "/full.jpeg",
};

export const about = {
  summary:
    "A fresh graduate in Informatics Engineering with a strong interest in Front-End Development, Web Development, and UI/UX Design. Experienced in developing responsive web applications using Next.js and TypeScript, integrating REST APIs, and implementing real-time communication using MQTT and WebSocket. Strong analytical, problem-solving, and teamwork skills, with the ability to work independently and collaboratively. Eager to learn new technologies and build efficient, reliable, and user-friendly web applications.",
};

export const skills = {
  hard: ["HTML", "CSS", "Next.js", "React.js", "TypeScript", "Python", "JavaScript", "MySQL", "Figma", "Git", "Microsoft Office"],
  soft: ["Analytical Skills", "Time Management", "Teamwork", "Attention to Detail", "Adaptability"],
  languages: ["Bahasa Indonesia (Native)", "English (B1 Intermediate)"],
};

export const experience = [
  {
    company: "PT. Venambak Kail Dipantara",
    location: "Sidoarjo, Indonesia",
    period: "Dec 2025 – Jun 2026",
    role: "Front-End Engineer Intern – Maganghub Kemnaker Internship Program",
    points: [
      "Redesigned the Venambak mobile application interface for Android, including the addition of marketplace and device control features to expand the app's functionality.",
      "Designed and implemented a real-time monitoring website, company profile website, and CRM web platform to support the company's operational needs.",
      "Engineered and maintained the company's website using Next.js, improving functionality, performance, and overall user experience.",
      "Integrated REST APIs, MQTT, and WebSocket into the front-end architecture to facilitate real-time data updates.",
      "Debugged front-end and deployment issues, resolving critical bugs while supporting server configuration and website deployment.",
    ],
  },
];

export const educations = [
  {
    school: "Sriwijaya University",
    location: "Inderalaya, Indonesia",
    period: "Aug 2021 – Jul 2025",
    degree: "Bachelor of Informatics Engineering",
    gpa: "3.90 / 4.00",
    thesis: "Comparison of Naïve Bayes Classifier and Random Forest Methods for Film Classification Based on Viewer Age",
    points: [] as string[],
  },
  {
    school: "Bangkit Academy by Google, GoTo and Traveloka",
    location: "Indonesia",
    period: "Aug 2021 – Jul 2025",
    degree: "MSIB Batch 5 - Cloud Computing Student",
    gpa: "",
    thesis: "",
    points: [
      "Helped the team design mobile applications.",
      "Created and managed database and storage services.",
      "Deployed and trained machine learning model using Vertex AI and Node.js to create an API endpoint.",
      "Managed logging, monitoring, and alerting services.",
      "Collaborated with a team of 5 members, presenting final output to 3 mentors/stakeholders.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  description: string;
  responsibilities: string[];
  collaboration: string[];
  tech: string[];
  image?: string;
  link?: { label: string; url: string };
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "crm-admin",
    title: "Admin CRM Website",
    category: "Intern project · PT. Venambak Kail Dipantara",
    role: "Front-End Engineer Intern",
    description:
      "An Admin CRM website with an interactive map that visualizes the distribution of Venambak devices across Indonesia. It includes sales analytics dashboards, customer management (CRUD), and complete order history tracking.",
    responsibilities: [
      "Designed a responsive UI/UX for desktop and mobile devices.",
      "Implemented the UI design using Next.js and TypeScript.",
      "Implemented CRUD functionality for efficient data management.",
      "Integrated REST APIs to create, retrieve, update, and delete customer data.",
      "Performed debugging, troubleshooting, and performance optimization.",
      "Assisted with deployment and server-side troubleshooting for production releases.",
    ],
    collaboration: ["Backend Engineer", "Project Manager"],
    tech: ["Next.js", "TypeScript", "React.js", "REST API"],
    image: "/projects/crm.png",
    link: {
      label: "View prototype",
      url: "https://www.figma.com/proto/vCMhrY1ZmZ3WaiwLclhsYX/web-admin-FIX?node-id=317-1049&p=f&t=bKjjvMsRQr6Ls8rF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=317%3A1049",
    },
  },
  {
    slug: "iot-dashboard",
    title: "IoT Monitoring Dashboard",
    category: "Intern project · PT. Venambak Kail Dipantara",
    role: "Front-End Engineer Intern",
    description:
      "A web-based IoT dashboard for real-time device management. Users can monitor multiple devices, view online/offline status, control devices remotely, configure operating schedules, and track device-specific data. Venjet devices display energy consumption, while Sensor devices provide real-time water quality parameters: pH, temperature, salinity, ORP, DO, and TDS.",
    responsibilities: [
      "Designed a responsive UI/UX for desktop and mobile devices.",
      "Implemented the UI design using Next.js and TypeScript.",
      "Integrated REST APIs, MQTT, and WebSocket for real-time data communication and device monitoring.",
      "Performed debugging, troubleshooting, and performance optimization.",
    ],
    collaboration: ["Backend Engineer", "Software Engineer", "Project Manager"],
    tech: ["Next.js", "TypeScript", "REST API", "MQTT", "WebSocket"],
    image: "/projects/monitoring.png",
    note: "Due to confidentiality agreements, the final deliverables of this project cannot be publicly shared.",
  },
  {
    slug: "company-profile",
    title: "Company Profile Website",
    category: "Intern project · PT. Venambak Kail Dipantara",
    role: "Front-End Engineer Intern",
    description:
      "A responsive company profile website built with Next.js and TypeScript, with a modern, user-friendly interface across desktop and mobile. Key pages include Products, Services, Media, Gallery, Careers, and Team.",
    responsibilities: [
      "Built and maintained the website with a focus on performance and usability.",
      "Redesigned several pages to improve usability, visual consistency, and user experience.",
      "Collaborated with the content team to present content accurately while keeping the design consistent.",
      "Performed front-end debugging, troubleshooting, and bug fixing.",
      "Took part in code reviews and testing to maintain code quality and system performance.",
    ],
    collaboration: ["Content Team", "Backend Engineer", "Fullstack Developer", "Project Manager"],
    tech: ["Next.js", "TypeScript", "React.js"],
    image: "/projects/company-profile.png",
  },
  {
    slug: "venambak-app",
    title: "Venambak Mobile App Redesign",
    category: "Intern project · PT. Venambak Kail Dipantara",
    role: "Front-End Engineer Intern",
    description:
      "A mobile platform that serves two needs in one app: a marketplace for buying devices and a control and monitoring app for IoT devices installed at aquaculture ponds.",
    responsibilities: [
      "Redesigned the Android interface of the Venambak mobile application.",
      "Designed the marketplace and device control features to expand the app's functionality.",
    ],
    collaboration: [],
    tech: ["UI/UX", "Figma", "Android"],
    image: "/projects/venambak-app.png",
  },
  {
    slug: "serenepath",
    title: "SerenePath",
    category: "Bangkit final project · Google, GoTo, and Traveloka",
    role: "Cloud Computing",
    description:
      "A mental-health support app for teenagers, with Daily Conditions for mood tracking, Serene Article for educational content, Hotline for quick access to counseling, Music Therapy for relaxation, and About Mental Health for essential information.",
    responsibilities: [
      "Helped the team design mobile applications.",
      "Created and managed database and storage services.",
      "Deployed the trained ML model using Vertex AI and Node.js to create an API endpoint.",
      "Managed logging, monitoring, and alerting services.",
    ],
    collaboration: ["Machine Learning Cohort", "Mobile Development Cohort"],
    tech: ["Cloud", "Vertex AI", "Node.js"],
    image: "/projects/serenepath.jpg",
  },
  {
    slug: "revou",
    title: "RevoU Coding Camp Project",
    category: "Coding camp project",
    role: "Participant",
    description:
      "A website project for RevoU, an Indonesian online education platform offering industry-oriented bootcamps and courses in digital skills such as Digital Marketing, Data Analytics, and Software Engineering.",
    responsibilities: [
      "Sliced the layout based on the mockup and completed the profile page with a photo banner, company overview, and vision & mission.",
      "Applied responsive design on all pages for desktop and mobile.",
    ],
    collaboration: ["Project team"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/revou.png",
  },
];

export const certificates = [
  { title: "Graduate Internship Program (Maganghub)", org: "Kemnaker", date: "Jun 2026", link: "https://drive.google.com/file/d/1kwcdo4m7dfVDg29YL1mMm0QCFcIpc_9U/view?usp=sharing" },
  { title: "Intro to Software Engineering", org: "RevoU", date: "Nov 2025", link: "" },
  { title: "Training MSIB as Cloud Computing Cohort", org: "Bangkit Academy by Google, GoTo and Traveloka", date: "Jan 2024", link: "" },
  { title: "English for Business Communication", org: "The British Institute", date: "Jan 2024", link: "" },
  { title: "Seminar Opening Ceremony Universities Virtual Career Expo 2024", org: "CDC Sriwijaya University", date: "Oct 2024", link: "" },
  { title: "Seminar Digital Transformation: Elevating Customer Experience in a Changing World", org: "Tugu Insurance", date: "Oct 2024", link: "" },
  { title: "Seminar Start, Grow and Manage a Tech Startup", org: "Geek Academy", date: "Sep 2023", link: "" },
  { title: "Certificate of Participation in The 9th English Competition", org: "ALSA Sriwijaya University", date: "Oct 2018", link: "" },
];
