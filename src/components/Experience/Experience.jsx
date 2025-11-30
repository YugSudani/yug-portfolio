import useScrollAnimation from '../../utils/useScrollAnimation';
import './Experience.css';

const Experience = () => {
    const addToRefs = useScrollAnimation(0.3);

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title gradient-text">Experience</h2>
                <div className="timeline">
                    <div
                        ref={(el) => addToRefs(el, 0)}
                        className="timeline-item glass"
                    >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>MERN Stack Developer</h3>
                                <span className="company gradient-text">DayDreamSoft Infotech</span>
                            </div>
                            <p className="timeline-date">October 2025 - Present</p>
                            <ul className="timeline-details">
                                <li>Working on real-world MERN applications with API integrations and secure backend development</li>
                                <li>Implementing scalable React UI components and enhancing user experience</li>
                                <li>Building secure Node.js/Express APIs with authentication and database handling</li>
                                <li>Collaborating with team for deployment, testing, and performance optimization</li>
                                <li>Integrating AI-based features and real-time automation into web applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
