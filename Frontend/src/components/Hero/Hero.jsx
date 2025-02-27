import PropTypes from "prop-types";
import "./Hero.css";
// import HeroImage from "../../assets/hero.png";

export const Hero = ({ user }) => {
    return (
        <div className="landing-page">
            <div className="intro-text">
                <h1>I{'\''}m {user ? user.name : "Pradeep Raj.K"}</h1>
                <p>{ 
                    user ? user.bio : "A passionate full-stack developer who loves building scalable web applications and exploring new technologies."}
                </p>
            </div>
            <div className="profile-image">
                {/* <img src={HeroImage} alt="Pradeep Raj" /> */}
            </div>
        </div>
    )
}

Hero.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        bio: PropTypes.string,
    })
};