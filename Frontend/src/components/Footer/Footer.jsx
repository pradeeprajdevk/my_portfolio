import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./Footer.css";
import { fetchUserData } from "../../redux/portfolioSlice";

export const Footer = () => {

    const dispatch = useDispatch();
    const {  user } = useSelector((state) => state.portfolio);
    
    const currentYear = new Date().getFullYear();

    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scrolling
        });

        // Update the URL without reloading the page
        history.pushState(null, '', '#');
    };

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserData());
        }
    }, [dispatch, user]);

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
    }, [dispatch]);

    return (
        <footer aria-label="Footer">
            <p>
                © {currentYear} {user ? user.name : "PradeepRaj.K"}, All rights reserved
            </p>
            <div className="social-links">
                {user?.socialLinks?.map((link) => ( 
                    <a key={link.id} href={link.url} aria-label={link.label}>
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
                    ↑ Back to Top
                </button>
            )}
        </footer>
    )
}