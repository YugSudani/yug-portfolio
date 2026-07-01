import { User } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title gradient-text">About Me</h2>
                <div className="about-content">
                    <div className="about-card glass">
                        <div className="about-header">
                            <User size={32} className="about-icon" />
                        </div>
                        <div className="about-text">
                            <p>
                                I'm a passionate <span className="highlight">Full Stack Developer</span> with a focus on building responsive web applications
                                using React, Node.js, Express.js, and MongoDB. Along with <span className="highlight">AI Integration & Automation</span>,
                                I have a strong foundation in REST APIs integration, responsive UI design, and version
                                control using GitHub.
                            </p>
                            <p>
                                Committed to learning new technologies and delivering efficient, scalable solutions.
                                Currently working at <span className="highlight">DayDreamSoft Infotech</span>, where I build real-world MERN applications
                                with API integrations and secure backend development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
