// import {Link} from 'react-dom' 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand title" href="#">
          Kashish Facility Services
        </a>
        <img src="thumbnail.png" className="logo" alt="logo"/>
        <div className="navbar-center-spacer"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse navbar-class" id="navbarNav">
          <ul className="navbar-nav nav-list">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
        <li className="nav-item">
              <a className="nav-link" href="#">
              Contact
              </a>
            </li>
          </ul>
          </div>
        </div>
    </nav>
  );
};
export default Header;
