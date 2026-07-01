import { Code, Database, Globe, Layers, Cpu, Terminal } from 'lucide-react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import './Skills.css';

const Skills = () => {
    const addToRefs = useScrollAnimation(0.3);

   const skillCategories = [
    {
        title: 'Frontend',
        icon: <Globe className="skill-icon" />,
        skills: [
            'React.js',
            'MUI',
            'Redux',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Bootstrap'
        ]
    },
    {
        title: 'Backend',
        icon: <Terminal className="skill-icon" />,
        skills: [
            'Node.js',
            'Express.js',
            'REST APIs',
            'JWT',
            'Concurrency Handling',
            'Monolithic Architecture',
            'Microservices'
        ]
    },
    {
        title: 'Database',
        icon: <Database className="skill-icon" />,
        skills: [
            'MongoDB',
            'MongoDB Atlas',
            'SQL',
            'DB Transactions'
        ]
    },
    {
        title: 'AI Integration',
        icon: <Cpu className="skill-icon" />,
        skills: [
            'OpenAI API',
            'Groq API',
            'Hugging Face',
            'Chatbase',
            'Prompt Engineering',
            'Real-time AI Responses'
        ]
    },
    {
        title: 'Tools & Deployment',
        icon: <Layers className="skill-icon" />,
        skills: [
            'Git',
            'GitHub',
            'VS Code',
            'Postman',
            'Render',
            'Netlify',
            'MongoDB Atlas',
            'OneSignal',
            'Service Workers',
            'EmailJS',
            'Twilio'
        ]
    },
    {
        title: 'Software Engineering',
        icon: <Code className="skill-icon" />,
        skills: [
            'System Design',
            'OOP',
            'Responsive Design',
            'Password Encryption',
            'Session Handling'
        ]
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
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="category-header">
                                {category.icon}
                                <h3>{category.title}</h3>
                            </div>
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
