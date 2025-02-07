import { useState, useEffect } from "react";
import "./Experience.css";
import { Loader } from "../Loader/Loader";
import { getExperienceData } from "../../services/userServices";

export const Experience = () => {

    const [myExperience, setMyExperience] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                const data = await getExperienceData();
                setMyExperience(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchExperienceData();
    }, []);

    if (loading) {
        return <Loader />;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-timeline">
                {myExperience.map((exp) => (
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
