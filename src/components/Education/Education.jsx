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
                        <div className="education-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <p className="education-institution gradient-text">SS Agrawal College</p>
                        <p className="education-affiliation">Affiliated to VNSGU</p>
                        <div className="education-details">
                            <span className="education-year">Currently in Third Year</span>
                            <span className="education-cgpa">CGPA: 8.38</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
