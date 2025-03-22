import { Title } from "./Title";

export const Contactus = () => {
  return (
    <section className="contact container" id="Contact">
      <Title title={"Contact"} />
      <div className="social flex-center">
        <a
          href="https://www.linkedin.com/in/bhaveshsadhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Bhaveshsadhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="tel:+61413071805" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="email flex-center">
        <a href="mailto:bhaveshsadhu67@gmail.com" className="flex">
          <span>bhaveshsadhu67@gmail.com</span>
          <div className="send-email flex-center">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </a>
      </div>
    </section>
  );
};
