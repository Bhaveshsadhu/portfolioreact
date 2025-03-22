import { Title } from "./Title";
export const Skills = () => {
  return (
    <section className="skills container " id="Skills">
      <Title title={"Skills"} />
      <div className="skill-container d-flex justify-content-around align-item-center mt-5 row">
        <div className="col-md-2 col-sm-6 col-xs-6 mb-2">
          <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
          <span>HTML</span>
        </div>

        <div className="col-md-2 col-sm-6 col-xs-6 mb-4">
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>

        <div className="col-md-2 col-sm-6 col-xs-6 mb-4">
          <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
          <span>JAVASCRIPT</span>
        </div>

        <div className="col-md-2 col-sm-6 col-xs-6 mb-4">
          <i className="fa-brands fa-react" style={{ color: "blue" }}></i>
          <span>REACT</span>
        </div>

        <div className="col-md-2 col-sm-6 col-xs-6 mb-4">
          <i className="fa-brands fa-github"></i>
          <span>GITHUB</span>
        </div>

        <div className="col-md-2 col-sm-6 col-xs-6 mb-4">
          {/* <i className="fa-brands fa-figma" style={{ color: "purple" }}></i> */}
          <i className="fa-brands fa-node" style={{ color: "purple" }}></i>
          <span>Node - Express</span>
        </div>
      </div>
    </section>
  );
};
