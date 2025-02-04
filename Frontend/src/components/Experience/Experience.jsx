// import { useState, useEffect } from "react";
import "./Experience.css";
export const Experience = () => {

    // const [myExperience, setMyExperience] = useState([]);

    const expeirence = [
        {
            id: 1,
            title: "Full-Stack Developer",
            company: "Tech Solutions Inc.",
            duration: "Jan 2022 - Present",
            description: "Developed and maintained scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Web Innovators",
            duration: "Jun 2020 - Dec 2021",
            description: "Built responsive and user-friendly interfaces using React and Redux. Optimized web performance and improved user experience.",
        },
        {
            id: 3,
            title: "Software Intern",
            company: "Code Masters",
            duration: "May 2019 - May 2020",
            description: "Assisted in developing backend APIs using Express.js and MongoDB. Gained hands-on experience with version control systems like Git.",
        },
    ];

    // useEffect(() => {
    //     setMyExperience(expeirence);
    // }, []);
  return (
    <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-timeline">
            {expeirence.map((exp) => (
                <div key={exp.id} className="experience-card">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
};
