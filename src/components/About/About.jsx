import useScrollAnimation from '../../utils/useScrollAnimation';
import './About.css';

const About = () => {
    const addToRefs = useScrollAnimation(0.3);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title gradient-text">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a passionate MERN Stack Developer with a focus on building responsive web applications
                            using React, Node.js, Express.js, and MongoDB. Along with AI Integration & Automation,
                            I have a strong foundation in REST APIs integration, responsive UI design, and version
                            control using GitHub.
                        </p>
                        <p>
                            Committed to learning new technologies and delivering efficient, scalable solutions.
                            Currently working at DayDreamSoft Infotech, where I build real-world MERN applications
                            with API integrations and secure backend development.
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div
                            ref={(el) => addToRefs(el, 0)}
                            className="stat-card glass"
                        >
                            <h3 className="gradient-text">1+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div
                            ref={(el) => addToRefs(el, 1)}
                            className="stat-card glass"
                        >
                            <h3 className="gradient-text">4+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div
                            ref={(el) => addToRefs(el, 2)}
                            className="stat-card glass"
                        >
                            <h3 className="gradient-text">10+</h3>
                            <p>Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
