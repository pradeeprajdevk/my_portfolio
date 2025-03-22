import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./About.css";
import { Loader } from '../Loader/Loader';
import { fetchAboutData } from '../../redux/portfolioSlice';

export const About = () => {

    const dispatch = useDispatch();
    const { about, status, error } = useSelector((state) => state.portfolio);

    useEffect(() => {
        dispatch(fetchAboutData());
    }, [dispatch]);

    return (
        <section id = "about" className="about-section">
            <h2>About Me</h2>

            { !about && status === 'loading' && <Loader /> }

            { !about && status === 'failed' && <p>{error}</p> }

            <div className="about-content">
                <div className="about-text-container">  
                    <div className="about-text">
                        <p  style={{ whiteSpace: 'pre-line' }}>{about.description}</p>
                    </div>
                    <div className="about-download">
                        <a href="/resume/PradeepRajK.pdf" download="PradeepRajK.pdf"
                        className="resume-button">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};