import "./Projects.css";

export const Projects = () => {

    const projectData = [
        {
            id: 1,
            title: "Portfolio Website",
            description: [
                "Developed a personal portfolio website to showcase skills and projects.",
                "Utilized React.js for the frontend and deployed it on Netlify.",
                "Implemented a responsive design for optimal viewing on all devices."
            ],
            technologies: ["React", "JavaScript", "HTML", "CSS", "Netlify"],
            imageUrl: "/images/portfolio-screenshot.png", // Replace with your image
            liveLink: "https://your-portfolio-website.com",  // Replace with live link
            githubLink: "https://github.com/your-username/portfolio" // Replace with GitHub link
        },
        {
            id: 2,
            title: "E-commerce Store",
            description: [
                "Built a full-stack e-commerce store with user authentication and product management.",
                "Used Node.js, Express, and MongoDB for the backend and React for the frontend.",
                "Integrated Stripe for secure payment processing."
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
            imageUrl: "/images/ecommerce-screenshot.png", // Replace with your image
            liveLink: null, // Set to null or "" if no live link
            githubLink: "https://github.com/your-username/ecommerce"
        },
        {
            id: 3,
            title: "Task Management App",
            description: [
                "Created a task management application for organizing and prioritizing tasks.",
                "Implemented features such as task creation, editing, and deletion.",
                "Used local storage to persist tasks."
            ],
            technologies: ["JavaScript", "HTML", "CSS"],
            imageUrl: "/images/task-app-screenshot.png", // Replace with your image
            liveLink: "https://your-task-app.com",
            githubLink: "https://github.com/your-username/task-app"
        }
    ];

  return (
    <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-content">
            {projectData.map(project => (
                <div key={project.id} className="project-item">
                    <h3>{project.title}</h3>
                    {project.imageUrl && (
                        <img src={project.imageUrl} alt={project.title} />
                    )}
                    <ul className="project-description">
                        {project.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="project-technology">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank"
                            rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                        )}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                            className="project-link">
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
