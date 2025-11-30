import useScrollAnimation from '../../utils/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const addToRefs = useScrollAnimation(0.3);

    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT']
        },
        {
            title: 'Database',
            skills: ['MongoDB', 'MongoDB Atlas', 'SQL']
        },
        {
            title: 'AI Integration',
            skills: ['OpenAI API', 'Hugging Face', 'Real-time AI Responses', 'Prompt Engineering']
        },
        {
            title: 'Tools & Deployment',
            skills: ['Atlas', 'GitHub', 'VS Code', 'Postman', 'Render', 'Netlify']
        },
        {
            title: 'Other',
            skills: ['OOP', 'Responsive Design', 'Password Encryption', 'Session Handling']
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title gradient-text">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            ref={(el) => addToRefs(el, index)}
                            className="skill-category glass"
                        >
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
