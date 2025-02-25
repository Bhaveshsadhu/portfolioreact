import { Title } from "./Title";
import { Card } from "./Card";
import flexblog from "../assets/flex-blog.png";
import animation from "../assets/animation.png";
import reactNTDL from "../assets/reactNTDL.png";
import contactlistapi from "../assets/contactlistapi.png";
import expcards from "../assets/expcards.png";

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
      techstack: "Techstack: HTML, CSS, Bootstrap, JAVASCRIPT, REACT",
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
