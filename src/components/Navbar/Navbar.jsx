import { useState, useEffect } from "react";
import { GitFork, CircleUserRound, Menu, X } from "lucide-react";
import scrollToSection from "../../utils/scrollToSection";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className="gradient-text">YS</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://github.com/YugSudani"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              data-tooltip="GitHub"
            >
              <GitFork size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yug-sudani-6a5a58297"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              data-tooltip="LinkedIn"
            >
              <CircleUserRound size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("education");
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
