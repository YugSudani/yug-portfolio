import useScrollAnimation from '../../utils/useScrollAnimation';
import './Projects.css';

const Projects = () => {
    const addToRefs = useScrollAnimation(0.3);

    const projects = [
        {
            title: 'AI Tools Web App',
            badge: 'MERN Stack',
            description: 'Developed a full-stack dashboard integrating multiple AI utilities using React, Node.js, Express, and MongoDB. Implemented secure login, session handling, and responsive UI with dynamic tool routing.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
            link: 'https://aitools-bs8f.onrender.com/'
        },
        {
            title: 'E-Commerce Platform',
            badge: 'MERN Stack',
            description: 'Developed a full-featured eCommerce platform with product listings, cart management, and user authentication. Integrated MongoDB for dynamic product storage and Express APIs for seamless backend operations.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            link: 'https://ecart-vjnr.onrender.com/'
        },
        {
            title: 'Weather Application',
            badge: 'Frontend',
            description: 'Built a responsive weather application using HTML, CSS, and JavaScript with real-time weather data integration. Features clean UI design and location-based weather forecasts.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
            link: 'https://yugsudani.github.io/weather/'
        },
        {
            title: 'Interactive Game',
            badge: 'Frontend',
            description: 'Created an interactive browser-based game using vanilla JavaScript. Implemented game logic, animations, and responsive controls for an engaging user experience.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            link: 'https://yugsudani.github.io/game1/'
        }
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link btn btn-primary">
                                Live Demo →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
