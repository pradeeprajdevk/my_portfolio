import "./Skills.css";

export const Skills = () => {
  const skills = [
    { id: 1, name: "JavaScript", icon: "/icons/javascript.png" },
    { id: 2, name: "React", icon: "/icons/react.png" },
    { id: 3, name: "Node.js", icon: "/icons/nodejs.png" },
    { id: 4, name: "Express", icon: "/icons/express.png" },
    { id: 5, name: "MongoDB", icon: "/icons/mongodb.png" },
    { id: 6, name: "HTML", icon: "/icons/html.png" },
    { id: 7, name: "CSS", icon: "/icons/css.png" },
    { id: 8, name: "Git", icon: "/icons/git.png" },
    { id: 9, name: "TypeScript", icon: "/icons/typescript.png" },
    { id: 10, name: "Postman", icon: "/icons/postman.png" },
    { id: 11, name: "Dart", icon: "/icons/dart.png" },
    { id: 12, name: "Flutter", icon: "/icons/flutter.png" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-box">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
