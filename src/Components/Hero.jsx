import mypic from "../assets/mypic.png";
export const Hero = () => {
  return (
    <>
      <section className="hero-section d-flex col-gap-3 mt-5 row" id="Home">
        <div className="dark-mode ">
          <label htmlFor="dark-mode">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </label>
        </div>
        <div className="personal-info col-sm-12 col-md-6 ">
          I'm <span>Bhavesh Sadhu</span>
          <h1 className="text-warning">
            <span className="txt-animation">F</span>
            <span className="txt-animation">u</span>
            <span className="txt-animation">l</span>
            <span className="txt-animation">l</span>
            <span className="txt-animation">S</span>
            <span className="txt-animation">t</span>
            <span className="txt-animation">a</span>
            <span className="txt-animation">c</span>
            <span className="txt-animation">k</span>
            <span className="txt-animation">&nbsp;</span>
            <span className="txt-animation">D</span>
            <span className="txt-animation">e</span>
            <span className="txt-animation">v</span>
            <span className="txt-animation">e</span>
            <span className="txt-animation">l</span>
            <span className="txt-animation">o</span>
            <span className="txt-animation">p</span>
            <span className="txt-animation">e</span>
            <span className="txt-animation">r</span>
          </h1>
          <p className="tag2">I Love to build Websites</p>
          <button className="btn btn-secondary">
            Download Resume <i className="fa-solid fa-circle-down"></i>
          </button>
        </div>
        <div className="personal-photo col-sm-12 col-md-6 ">
          <img src={mypic} alt="" />
        </div>
      </section>
    </>
  );
};
