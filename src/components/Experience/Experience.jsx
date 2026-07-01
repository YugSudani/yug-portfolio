import { Briefcase, Calendar } from 'lucide-react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import './Experience.css';

const Experience = () => {
    const addToRefs = useScrollAnimation(0.3);

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title gradient-text">Experience</h2>

                <div className="milestones-timeline">
                    <div
                        ref={(el) => addToRefs(el, 0)}
                        className="milestone-item scroll-hidden scroll-animate-left"
                    >
                        <div className="milestone-badge">
                            <span>01</span>
                        </div>
                        <div className="milestone-card glass">
                            <div className="milestone-header">
                                <div className="milestone-role-info">
                                    <Briefcase size={20} className="milestone-icon" />
                                    <div>
                                        <h3>Full Stack Developer</h3>
                                        <span className="company gradient-text">DayDreamSoft Infotech</span>
                                    </div>
                                </div>
                                <span className="milestone-date">
                                    <Calendar size={14} className="date-icon" /> October 2025 - Present
                                </span>
                            </div>

                            <ul className="milestone-details">
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
