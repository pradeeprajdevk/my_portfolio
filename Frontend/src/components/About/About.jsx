import "./About.css";

export const About = () => {

    const skills = [
        { name: "C Language", icon: "/icons/c-language.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
        { name: "Express", icon: "/icons/express.png" },
        { name: "NodeJS", icon: "/icons/nodejs.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "Dart", icon: "/icons/dart.png" },
        { name: "Flutter", icon: "/icons/flutter.png" },
        { name: "React Native", icon: "/icons/react-native.png" },
        { name: "HTML", icon: "/icons/html.png" },
        { name: "CSS", icon: "/icons/css.png" },
    ];

    return (
        <section id = "about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hi, I{'\''}m Pradeep Raj K, a passionate full-stack developer with a love for building scalable web applications and exploring new technologies. I specialize in creating user-friendly, efficient, and modern web solutions.
                    </p>
                    <p>
                        With a strong foundation in both front-end and back-end development, I enjoy turning ideas into reality through clean and maintainable code. I{'\''}m always eager to learn and adapt to new challenges in the ever-evolving tech landscape.
                    </p>                    
                </div>
                <div className="skills-section">
                    <h3>Skills</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon"/>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};