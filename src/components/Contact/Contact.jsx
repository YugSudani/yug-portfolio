import { useState } from 'react';
import { Mail, Phone, Loader2, Check, Copy } from 'lucide-react';
import useScrollAnimation from '../../utils/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const addToRefs = useScrollAnimation(0.3);
    const [emailStatus, setEmailStatus] = useState('idle'); // 'idle' | 'loading' | 'copied'
    const [phoneStatus, setPhoneStatus] = useState('idle'); // 'idle' | 'loading' | 'copied'

    const handleCopyAndRedirect = (e, type, value, href) => {
        e.preventDefault();
        
        // Copy to clipboard
        navigator.clipboard.writeText(value);

        if (type === 'email') {
            setEmailStatus('loading');
            setTimeout(() => {
                setEmailStatus('copied');
                setTimeout(() => {
                    setEmailStatus('idle');
                }, 2000);
            }, 2500); // 2.5 second loading
        } else {
            setPhoneStatus('loading');
            setTimeout(() => {
                setPhoneStatus('copied');
                setTimeout(() => {
                    setPhoneStatus('idle');
                }, 2000);
            }, 2500); // 2.5 second loading
        }

        // Open system app
        window.location.href = href;
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
                            to be part of your visions. Feel free to reach out directly.
                        </p>
                        <div className="contact-details">
                            <a 
                                href="mailto:yugsudani88@gmail.com" 
                                className={`contact-item ${emailStatus !== 'idle' ? 'active-state' : ''}`}
                                onClick={(e) => handleCopyAndRedirect(e, 'email', 'yugsudani88@gmail.com', 'mailto:yugsudani88@gmail.com')}
                            >
                                <div className="contact-item-left">
                                    <Mail size={20} className="contact-icon" />
                                    <span>yugsudani88@gmail.com</span>
                                </div>
                                <div className="contact-item-right">
                                    {emailStatus === 'idle' && <Copy size={16} className="copy-action-icon" />}
                                    {emailStatus === 'loading' && <Loader2 size={16} className="copy-action-icon spinner" />}
                                    {emailStatus === 'copied' && <Check size={16} className="copy-action-icon success" />}
                                </div>
                            </a>

                            <a 
                                href="tel:9510502422" 
                                className={`contact-item ${phoneStatus !== 'idle' ? 'active-state' : ''}`}
                                onClick={(e) => handleCopyAndRedirect(e, 'phone', '9510502422', 'tel:9510502422')}
                            >
                                <div className="contact-item-left">
                                    <Phone size={20} className="contact-icon" />
                                    <span>9510502422</span>
                                </div>
                                <div className="contact-item-right">
                                    {phoneStatus === 'idle' && <Copy size={16} className="copy-action-icon" />}
                                    {phoneStatus === 'loading' && <Loader2 size={16} className="copy-action-icon spinner" />}
                                    {phoneStatus === 'copied' && <Check size={16} className="copy-action-icon success" />}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
