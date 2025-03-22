import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContactForm } from "../../redux/portfolioSlice";
import { Loader } from "../Loader/Loader";

import "./Contact.css";

export const Contact = () => {

    const dispatch = useDispatch();
    const { contact, status, error } = useSelector((state) => state.portfolio);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission(e.g., send data to an API)
        
        dispatch(createContactForm(formData));

        alert("Thank you for your messages! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>

            { !contact && status === 'loading' && <Loader /> }
            
            { !contact && status === 'failed' && <p>{error}</p> }

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>
                        If you have any questions or just want to say hello, feel free to reach out. I{'\''}ll do my best to get back to you as soon as possible!
                    </p>
                    <ul className="contact-details">
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>pradeeprajdevk@gmail.com</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>+91 80732 71915</span>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Bengaluru, India</span>
                        </li>
                    </ul>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                            name="email"
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
  }
  