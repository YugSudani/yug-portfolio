import { GraduationCap } from 'lucide-react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import './Education.css';

const Education = () => {
    const addToRefs = useScrollAnimation(0.3);

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title gradient-text">Education</h2>
                <div className="education-content">
                    <div
                        ref={(el) => addToRefs(el, 0)}
                        className="education-card glass"
                    >
                        <div className="education-icon-wrapper">
                            <GraduationCap size={40} className="education-icon-svg" />
                        </div>
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <p className="education-institution gradient-text">SS Agrawal College</p>
                        <p className="education-affiliation">Affiliated to VNSGU</p>
                        <div className="education-details">
                            <span className="education-year">Completed in 2026</span>
                            <span className="education-cgpa" style={{ color: "orange" }}>CGPA: 8.58</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
