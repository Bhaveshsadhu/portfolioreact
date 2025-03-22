import { Title } from "./Title";
// import mypic from "../assets/mypic.png";
export const About = () => {
  return (
    <>
      <Title title={"About Me"} />
      <section className="about" id="About">
        <div className="flex">
          {/* <div className="left">
            <img src={mypic} alt="Bhavesh's Photo" width="100%" />
          </div> */}
          <div className="right">
            <h4>Bhavesh Sadhu</h4>
            <p>
              Hi, I'm Bhavesh R. Sadhu, a passionate and driven web developer
              with a strong foundation in front-end development. Over the years,
              I have honed my skills in HTML, CSS, JavaScript, and React,
              creating dynamic, responsive, and user-friendly web applications.
              Currently, I am expanding my skill set by diving into back-end
              development using Express and Node.js as part of my ongoing
              learning journey.
            </p>
            <p>
              With a Master’s degree in Information Technology and hands-on
              experience through personal and professional projects, I strive to
              build solutions that are both efficient and engaging. I have
              worked on several projects ranging from interactive web apps to
              full-stack applications, and I enjoy tackling new challenges that
              help me grow as a developer.
            </p>
            <p>
              I am eager to collaborate with dynamic teams, contribute to
              innovative projects, and continue expanding my knowledge in both
              front-end and back-end development.
            </p>
            <p>
              Feel free to browse through my projects and get in touch if you'd
              like to connect or discuss opportunities!
            </p>
            <h6>Sydney, Australia</h6>
            <h3>Interest</h3>
            <span>Coding,</span>
            <span>Cricket,</span>
            <span>Watching Reels</span>
          </div>
        </div>
      </section>
    </>
  );
};
