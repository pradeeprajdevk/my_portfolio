import { useState, useEffect, useCallback } from "react"
import "./Header.css";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    // Memoize handleResize to avoid creating a new function on each render
    const handleResize = useCallback(() => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    }, []); // Empty dependency array, as we don't need to re-run this effect based on state changes

    // Close menu on window resize (if screen size is larger than 768px)
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]); // Only re-add the event listener if `handleResize` changes

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