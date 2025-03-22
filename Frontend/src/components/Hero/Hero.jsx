import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../../redux/portfolioSlice";

import "./Hero.css";
import { Loader } from "../Loader/Loader";
import HeroImage from "../../assets/hero.png";

export const Hero = () => {

    const dispatch = useDispatch();
    const { user, status, error } = useSelector((state) => state.portfolio);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <div className="landing-page">
            <div className="intro-text">
                
                { !user && status === 'loading' && <Loader /> }
                { !user && status === 'failed' && <p>{error}</p> }

                <h1>I{'\''}m {user ? user.name : "Pradeep Raj.K"}</h1>
                <p>{ 
                    user ? user.bio : "A passionate full-stack developer who loves building scalable web applications and exploring new technologies."}
                </p>
            </div>
            <div className="profile-image">
                <img src={HeroImage} alt="Pradeep Raj" />
            </div>
        </div>
    )
}