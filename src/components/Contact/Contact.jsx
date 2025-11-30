import { useState } from 'react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const addToRefs = useScrollAnimation(0.3);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (optional but if provided, must be valid)
        if (formData.phone.trim() && !/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsSubmitting(false);
            }, 1000);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title gradient-text">Get In Touch</h2>
                <div className="contact-content">
                    <div
                        ref={(el) => addToRefs(el, 0)}
                        className="contact-info"
                    >
                        <h3>Let's work together!</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your visions.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>yugsudani88@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>9510502422</span>
                            </div>
                        </div>
                    </div>
                    <form
                        ref={(el) => addToRefs(el, 1)}
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Contact Number (Optional)"
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message *"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
