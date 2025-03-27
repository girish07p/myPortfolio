import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Required for navigation
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // ✅ Not on home, navigate to home first
      navigate("/");
      setTimeout(() => scrollToProjects(), 500); // Delay ensures page loads first
    } else {
      // ✅ Already on home, just scroll
      scrollToProjects();
    }

    onUpdateActiveLink("projects");
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("❌ 'projects' section not found in DOM");
    }
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="/"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={handleProjectsClick} // ✅ Calls function with if condition
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/girish-porwal07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/girish07p"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Social Link 3" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};