import { ExternalLink } from "lucide-react";
import useScrollAnimation from "../../utils/useScrollAnimation";
import "./Projects.css";

const Projects = () => {
  const addToRefs = useScrollAnimation(0.3);

  const projects = [
    {
      title: "Pulse Check",
      badge: "Server Uptime Monitoring",
      description:
        "Built an uptime monitoring web app to track website availability and response status. Provides simple monitoring with a clean dashboard UI and live status checking with AI integration.",
      tech: [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Twilio",
  "EmailJS",
  "Service Worker",
  "OneSignal",
  "Chatbase",
  "Groq API",
],
      link: "http://pulse-check-5qky.onrender.com/",
    },
    {
      title: "AI Tools Web App",
      badge: "MERN Stack",
      description:
        "Developed a full-stack dashboard integrating multiple AI utilities using React, Node.js, Express, and MongoDB. Implemented secure login, session handling, and responsive UI with dynamic tool routing.",
      tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
      link: "https://aitools-bs8f.onrender.com/",
    },
    {
      title: "End-to-End E-Commerce",
      badge: "MERN Stack",
      description:
        "Developed a full-featured eCommerce platform with product listings, cart management, and user authentication. Integrated MongoDB for dynamic product storage and Express APIs for seamless backend operations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://jwelcommerce.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="project-card glass"
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-badge">{project.badge}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link btn btn-primary"
              >
                Live Demo <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
