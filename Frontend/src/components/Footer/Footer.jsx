import { useState, useEffect } from "react";
import "./Footer.css";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const [showBackToTop, setShowBackToTop] = useState(false);

    const socialLinks = [
        { id: 1, url: "https://github.com/yourusername", icon: "fab fa-github", label: "GitHub" },
        { id: 2, url: "https://linkedin.com/in/yourusername", icon: "fab fa-linkedin", label: "LinkedIn" },
        { id: 3, url: "https://twitter.com/yourusername", icon: "fab fa-twitter", label: "Twitter" },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scrolling
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.screenY > 300) {
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
                © {currentYear} PradeepRaj.K, All rights reserved
            </p>
            <div className="social-links">
                {socialLinks.map((link) => ( 
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
  