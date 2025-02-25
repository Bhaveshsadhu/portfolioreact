import { Title } from "./Title";
import mypic from "../assets/mypic.png";
export const About = () => {
  return (
    <>
      <Title title={"About Me"} />
      <section className="about" id="About">
        <div className="flex">
          <div className="left">
            <img src={mypic} alt="Bhavesh's Photo" width="100%" />
          </div>
          <div className="right">
            <h4>Bhavesh Sadhu</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem distinctio maiores vero mollitia tenetur beatae
              voluptatem nulla doloremque odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem distinctio maiores vero mollitia tenetur beatae
              voluptatem nulla doloremque odio.
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
