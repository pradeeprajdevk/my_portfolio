import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectsData } from "../../redux/portfolioSlice";
import "./Projects.css";
import { Loader } from "../Loader/Loader";

export const Projects = () => {

    const dispatch = useDispatch();
    const { projects, status, error } = useSelector((state) => state.portfolio);

    useEffect(() => {
        dispatch(fetchProjectsData());
    }, [dispatch]);
    
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>

            {!projects && status === "loading" && <Loader />}

            {!projects && status === "failed" && <p>{error}</p>}

            <div className="projects-content">
                {projects.map(project => (
                    <div key={project._id} className="project-item">
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
