import { useState, useEffect } from 'react';
import scrollToSection from '../../utils/scrollToSection';
import './Hero.css';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'MERN Stack Developer',
        'AI Integration Specialist',
        'Full Stack Engineer'
    ];

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentRole.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, currentRoleIndex]);

    return (
        <section id="home" className="section hero-section">
            <div className="container">
                <div className="hero-content fade-in">
                    <div className="profile-image-wrapper float">
                        <div className="profile-image">
                            <img
                                src="/3.jpeg"
                                alt="Yug Sudani - MERN Stack Developer"
                                className="profile-photo"
                            />
                        </div>
                    </div>
                    <h1 className="hero-title slide-up">
                        Hi, I'm <span className="gradient-text">Yug Sudani</span>
                    </h1>
                    <div className="typing-container slide-up">
                        <h2 className="typing-text">
                            {typedText}
                            <span className="cursor">|</span>
                        </h2>
                    </div>
                    <div className="hero-buttons slide-up">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                            View Projects
                        </button>
                        <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
