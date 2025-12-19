import animationImg from '/animation.png'
import contactListImg from '/contactlistapi.png'
import expCardsImg from '/expcards.png'
import financeTrackerImg from '/financeTRacker.png'
import flexBlogImg from '/flex-blog.png'
import foodProjectImg from '/FoodProject.png'
import libraryImg from '/library.png'
import moviesProjectImg from '/MoviesProject.png'
import myPicImg from '/mypic.png'
import portfolioImg from '/portfolio.png'
import reactNTDLImg from '/reactNTDL.png'
import storeImg from '/1.png'

export const hero = {
  name: 'Bhavesh Sadhu',
  role: 'Full Stack Developer (MERN)',
  subtitle: 'Building fast, modern, scalable applications.',
  resume: '/resume.pdf',
  email: 'bhaveshsadhu67@gmailcom',
}
// Replace with your own image in /public or a hosted URL
export const mypic = myPicImg

export const about = {
  title: 'About Bhavesh',
  bio: [
    'I craft performant, resilient experiences across the MERN stack and love partnering with product teams to ship thoughtful features with velocity.',
    'I also leverage AI-powered development tools like OpenAI Codex, Bolt, and GitHub Copilot to build applications faster with higher code quality.',
    'Whether I am designing robust data models or tuning React UIs for accessibility and responsiveness, I balance reliability with delightful UX.',
  ],
  location: 'Wollongong, NSW, Australia',
}

export const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap', 'Tailwind', 'Next.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'AWS EC2/S3'],
  },
  {
    title: 'UI',
    items: ['Bootstrap', 'Material UI', 'Figma'],
  },
  {
    title: 'AI Tools',
    items: ['Codex', 'Bolt', 'GitHub Copilot'],
  },
]

export const projects = [
  {
    title: 'ECommeStore  – MERN CRUD + Auth',
    description:
      'ECommStore is a production-ready full-stack e-commerce application built with the MERN stack. It features secure JWT authentication, Stripe Checkout integration, product and cart management, coupon handling, and an admin dashboard with analytics—designed using real-world architecture and best practices.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Bhaveshsadhu/ECommStore.git',
    live: 'https://ecommstore.onrender.com/',
    image: storeImg,

  },
  // {
  //   title: 'Library Management System – MERN CRUD + Auth',
  //   description:
  //     'Full-stack library app with JWT-based authentication, refresh/access tokens, custom hooks, email notifications, global error handler, and Redux state management. ',
  //   tech: ['React', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
  //   github: 'https://github.com/Bhaveshsadhu/fe_lms',
  //   live: 'https://github.com/Bhaveshsadhu/fe_lms',
  //   image: libraryImg,
  //   tag: 'Comming Soon',
  // },
  {
    title: 'Finance Tracker – CRUD + Search',
    description:
      'A secure budgeting and expense tracking tool with user login/logout, MongoDB backend, and dynamic UI components. ',
    tech: ['React', 'Node', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Bhaveshsadhu/fs_client',
    live: 'https://fs-client-pi.vercel.app/',
    image: financeTrackerImg,
    tag: 'MERN',
  },
  {
    title: 'Contact List API',
    description:
      'Responsive contact list application using a dummy API with fast name-based search and clean mobile UI',
    tech: ['React', 'Node', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Bhaveshsadhu/ContactListAPI',
    live: 'https://contact-list-api-gray.vercel.app/',
    image: contactListImg,
    tag: 'MERN',
  },
  {
    title: "Flex Blog",
    description:
      "A responsive flexbox-based blog layout demonstrating modern CSS techniques, clean structure, and mobile-friendly UI.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Bhaveshsadhu/flex-blog",
    live: "https://flex-blog-three.vercel.app/",
    image: flexBlogImg,
    tag: 'MERN',
  },
  {
    title: "Animation in CSS",
    description:
      "A collection of smooth and creative CSS animations showcasing transitions, keyframes, and UI motion effects.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Bhaveshsadhu/animation",
    live: "https://animation-bhaveshs-projects-61c8a366.vercel.app/",
    image: animationImg,
    tag: 'MERN',
  },
  {
    title: "Expanding Cards",
    description:
      "Interactive expanding cards UI built with JavaScript. Smooth animations, click interactions, and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Bhaveshsadhu/Day-1---Expanding-Cards",
    live: "https://expanding-cards-rouge.vercel.app/",
    image: expCardsImg,
    tag: 'MERN',
  },
  {
    title: "React Not Todo List",
    description:
      "A React-based Not-To-Do task manager with add/remove functionality, Bootstrap UI, and clean component structure.",
    tech: ["HTML", "CSS", "Bootstrap", "React"],
    github: "https://github.com/Bhaveshsadhu/react_nottodo_list",
    live: "https://react-nottodo-list.vercel.app/",
    image: reactNTDLImg,
    tag: 'MERN',
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio built with React and Vite featuring smooth navigation, responsive design, and clean UI elements.",
    tech: ["HTML", "CSS", "Bootstrap", "React", "Vite"],
    github: "https://github.com/Bhaveshsadhu/portfolioreact.git",
    live: "https://portfolioreact-coral.vercel.app/",
    image: portfolioImg,
    tag: 'MERN',
  },
  {
    title: "Movies World – React",
    description:
      "A React movie browsing application using APIs to display trending movies, search functionality, and responsive UI.",
    tech: ["HTML", "CSS", "Bootstrap", "React", "Vite"],
    github: "https://github.com/Bhaveshsadhu/movieworld-react.git",
    live: "https://movieworld-react-eta.vercel.app/",
    image: moviesProjectImg,
    tag: 'MERN',
  },
  {
    title: "Food Project – React",
    description:
      "A responsive React-based food browsing app showing categories, filtering options, and a clean card-based UI.",
    tech: ["HTML", "CSS", "Bootstrap", "React", "Vite"],
    github: "https://github.com/Bhaveshsadhu/foodsreact.git",
    live: "https://foodsreact.vercel.app/",
    image: foodProjectImg,
    tag: 'MERN',
  },

]

export const experience = [
  {
    role: 'Junior Software Engineer',
    company: 'Malay Infotech Pty Ltd – Ahmedabad, India',
    years: '2017–2019',
    summary:
      'Built REST APIs and .NET DLLs for flight management systems. Integrated third-party APIs and automated data scraping.Handled production-level debugging and performance optimization ',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'IPP Technologies',
    years: '2024',
    summary: 'Prototyped responsive interfaces and collaborated closely with design to ship polished React experiences.',
  },
  {
    role: 'Cleaning Supervisor',
    company: 'Australia',
    years: 'Leadership & team management',
    summary:
      'Oversaw teams, rostering, and training programs to keep large operations running on time—discipline that now translates to reliable delivery.',
  },
]

export const education = [
  { degree: 'Master of IT', school: 'CQUniversity Sydney' },
  { degree: 'Diploma + BE', school: 'Gujarat Technological University, India' },
  { degree: 'Professional Year', school: 'Sydney, Australia' },
]

export const contact = {
  email: 'bhaveshsadhu67@gmailcom',
  phone: '0415 041 341',
  location: 'Corrimal, NSW, Australia',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Bhaveshsadhu', handle: 'github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhaveshsadhu/', handle: 'linkedin.com' },
    // { label: 'YouTube', href: 'https://youtube.com/', handle: 'YouTube' },
  ],
}
