import { Title } from "./Title";
import { Card } from "./Card";
import flexblog from "../assets/flex-blog.png";
import animation from "../assets/animation.png";
import reactNTDL from "../assets/reactNTDL.png";
import contactlistapi from "../assets/contactlistapi.png";
import expcards from "../assets/expcards.png";
import portfolio from "../assets/portfolio.png";
import MoviesProject from "../assets/MoviesProject.png";
import FoodProject from "../assets/FoodProject.png";
import financeTRacker from "../assets/financeTRacker.png";
// import library from "../assets/library.png";
import download from "../assets/download.png";

export const Projects = () => {
  const projects = [
    {
      img: flexblog,
      github: "https://github.com/Bhaveshsadhu/flex-blog",
      url: "https://flex-blog-three.vercel.app/",
      title: "Flex blog",
      techstack: "Techstack: HTML, CSS",
    },
    {
      img: animation,
      github: "https://github.com/Bhaveshsadhu/animation",
      url: "https://animation-bhaveshs-projects-61c8a366.vercel.app/",
      title: "Animation in CSS",
      techstack: "Techstack: HTML, CSS",
    },
    {
      img: contactlistapi,
      github: "https://github.com/Bhaveshsadhu/ContactListAPI",
      url: "https://contact-list-api-gray.vercel.app/",
      title: "Contact List API",
      techstack: "Techstack: HTML, CSS, JAVASCRIPT",
    },
    {
      img: expcards,
      github: "https://github.com/Bhaveshsadhu/Day-1---Expanding-Cards",
      url: "https://expanding-cards-rouge.vercel.app/",
      title: "Expanding Cards",
      techstack: "Techstack: HTML, CSS, JAVASCRIPT",
    },
    {
      img: reactNTDL,
      github: "https://github.com/Bhaveshsadhu/react_nottodo_list",
      url: "https://react-nottodo-list.vercel.app/",
      title: "React Not TODO List",
      techstack: "Techstack: HTML, CSS, Bootstrap, REACT",
    },
    {
      img: portfolio,
      github: "https://github.com/Bhaveshsadhu/portfolioreact.git",
      url: "https://portfolioreact-coral.vercel.app/",
      title: "Personal Portfolio",
      techstack: "Techstack: HTML, CSS, Bootstrap, REACT & VITE",
    },
    {
      img: MoviesProject,
      github: "https://github.com/Bhaveshsadhu/movieworld-react.git",
      url: "https://movieworld-react-eta.vercel.app/",
      title: "React - Movies World",
      techstack: "Techstack: HTML, CSS, Bootstrap, REACT & VITE",
    },
    {
      img: FoodProject,
      github: "https://github.com/Bhaveshsadhu/foodsreact.git",
      url: "https://foodsreact.vercel.app/",
      title: "React - Food Project",
      techstack: "Techstack: HTML, CSS, Bootstrap, REACT & VITE",
    },
    {
      img: financeTRacker,
      github: "https://github.com/Bhaveshsadhu/fs_client.git",
      url: "https://fs-client-pi.vercel.app",
      title: "Finance Tracker - MERN STACK",
      techstack: "Techstack: HTML, REACT-BOOTSTRAP, REACT & VITE, EXPRESS, MONGODB",
    },
    {
      img: download,
      github: "",
      url: "",
      title: "Library Management - MERN STACK",
      techstack: "Techstack: HTML, REACT-BOOTSTRAP, REACT & VITE, EXPRESS, MONGODB",
    },
    {
      img: download,
      github: "",
      url: "",
      title: "Coogs Cafe - MERN STACK",
      techstack: "Techstack: HTML, REACT-BOOTSTRAP, REACT & VITE, EXPRESS, MONGODB",
    },

  ];
  return (
    <section>
      <Title title="Projects" />
      <div className="projects" id="Projects">
        {projects.map((item, i) => (
          <Card
            key={i}
            img={item.img}
            github={item.github}
            url={item.url}
            title={item.title}
            techstack={item.techstack}
          />
        ))}
      </div>
    </section>
  );
};
