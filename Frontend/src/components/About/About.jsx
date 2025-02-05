import { useState, useEffect } from "react";
import "./About.css";
import { Loader } from '../Loader/Loader';
import { fetchAboutData } from "../../services/userServices";

export const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAboutData = async() => {
            try {
                const data = await fetchAboutData();
                setAboutData(data[0]);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getAboutData();
    }, []);

    if (loading) {
        return <Loader />;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section id = "about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p  style={{ whiteSpace: 'pre-line' }}>{aboutData.description}</p>
                </div>
            </div>
        </section>
    )
};