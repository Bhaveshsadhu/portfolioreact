export const FooterSection = ({ scrollYPosition }) => {
  return (
    <>
      <footer className="footer mt-5 pt-5">
        <div className="top flex-center me-5">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#Navbar">Home</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-links ms-5">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="www.linkedin.com/in/bhaveshsadhu" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Bhaveshsadhu" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>Made by Me - Bhavesh sadhu 🚀</p>
      </footer>

      {scrollYPosition > 800 && (
        <a href="#header">
          <div className="goUp flex-center">
            <a href="#Navbar">
              <i className="fa-solid fa-chevron-up"></i>
            </a>
          </div>
        </a>
      )}
    </>
  );
};
