import { useState, useEffect } from "react"
import "./Header.css";
import PropTypes from "prop-types";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    // Close menu on window resize (if screen size is larger than 768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { id: 1, text: "About", href: "#about" },
        { id: 2, text: "Projects", href: "#projects" },
        { id: 3, text: "Skills", href: "#skills" },
        { id: 4, text: "Experience", href: "#experience" },
        { id: 5, text: "Contact", href: "#contact" },
    ];

    return (
        <header className="header-container">
            <a href="#" onClick={closeMenu} className="logo">PR</a>
            <nav className={`nav_title ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav_list">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} onClick={closeMenu}>{link.text}</a>
                        </li>
                    ))}
                </ul>
                <button 
                    className="hamburger-menu" 
                    aria-label="Menu" 
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    { isMenuOpen ? "X" : "☰" } {/* Show X when menu is open */}
                </button> 
            </nav>
        </header>
    )
}


Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
    })
};
Header.displayName = 'Header'; 