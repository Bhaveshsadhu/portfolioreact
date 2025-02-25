export const Navbar = () => {
  return (
    <header
      className="navbar container-fluid d-flex justify-content-around p-2"
      id="Navbar"
    >
      <div className="logo flex-center g-2">
        <h3 className="name joti-one-regular">Bhavesh</h3>
        <span className="ms-2 joti-one-regular">FullStack Developer</span>
      </div>
      <div className="mobile-menu">
        {/* Hamburger button (only visible on small screens) */}
        <button
          className="navbar-toggler d-block d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu (only visible on small screens) */}
        <div
          className="offcanvas offcanvas-end d-block d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body d-block d-md-none d-lg-none">
            <ul className="navbar-nav  flex-grow-1 pe-3 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#Navbar"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Skills"
                  data-bs-dismiss="offcanvas"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-links d-none d-lg-block d-md-block">
        <ul className="nav justify-content-end gap-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Navbar">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
