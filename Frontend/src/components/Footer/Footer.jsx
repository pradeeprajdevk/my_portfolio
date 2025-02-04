import { useState, useEffect } from "react";
import "./Footer.css";
import PropTypes from "prop-types";

export const Footer = ({ user }) => {

    const currentYear = new Date().getFullYear();

    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scrolling
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer aria-label="Footer">
            <p>
                © {currentYear} {user ? user.name : "PradeepRaj.K"}, All rights reserved
            </p>
            <div className="social-links">
                {user.socialLinks.map((link) => ( 
                    <a key={link.id} href={link.url} aria-label={link.label}>
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
            {showBackToTop && (
                <a href="#top" className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
                    ↑ Back to Top
                </a>
            )}
        </footer>
    )
}
  
Footer.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        socialLinks: PropTypes.array,
    })
};