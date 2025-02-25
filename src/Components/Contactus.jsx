import { Title } from "./Title";
export const Contactus = () => {
  return (
    <section className="contact container" id="Contact">
      <Title title={"Contact"} />
      <div className="social flex-center">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="email flex-center">
        <a href="" className="flex">
          <span>youremail.com</span>
          <div className="send-email flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};
