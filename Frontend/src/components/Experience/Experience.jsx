import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./Experience.css";
import { Loader } from "../Loader/Loader";
import { fetchExperienceData } from "../../redux/portfolioSlice";

export const Experience = () => {
    const dispatch = useDispatch();
    const { experience, status, error } = useSelector((state) => state.portfolio);
    
    useEffect(() => {
        dispatch(fetchExperienceData());
    }, [dispatch]);

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>

            {!experience && status === "loading" && <Loader />}

            {!experience && status === "failed" && <p>{error}</p>}

            <div className="experience-timeline">
                {experience.map((exp) => (
                    <div key={exp._id} className="experience-card">
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
