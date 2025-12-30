import React from 'react';
import './Trusted.css';
import testimonialT1 from '../assets/t1.jpeg';
import testimonialT2 from '../assets/t2.jpeg';
import testimonialT3 from '../assets/t3.jpeg';
import logoT4 from '../assets/t4.jpg';
import logoT5 from '../assets/t5.jpg';
import logoT6 from '../assets/t6.jpg';
import logoT7 from '../assets/t7.jpg';

const Trusted = () => {
    return (
        <div className="trusted-section12">
            <div className="trusted-container">
                <h2 className="trusted-title">Trusted by 330.000+ People</h2>

                <p className="trusted-subtitle">
                    The UI Kits, Templates and Dashboards that we've created are used by{' '}
                    <strong>330,000+ web developers</strong> in over{' '}
                    <strong>576.000 Web Projects</strong>. This is what some of them think:
                </p>

                <div className="testimonials-grid121">
                    <div className="testimonial-card121">
                        <img
                            src={testimonialT1}
                            alt="Khaldi Yass"
                            className="testimonial-image121"
                        />
                        <div className='testi121'>
                            <h3 className="testimonial-name">Khaldi Yass</h3>
                            <p className="testimonial-text">
                                "As soon as I saw this kit, everything else isn't the same anymore, I just can't describe it guys! Thank you for this work!"
                            </p>
                        </div>
                    </div>

                    <div className="testimonial-card121">
                        <img
                            src={testimonialT2}
                            alt="Josh Murray"
                            className="testimonial-image121"
                        />
                        <div className='testi121'>
                            <h3 className="testimonial-name">Josh Murray</h3>
                            <p className="testimonial-text">
                                "Great kit! Used this for a client already and he is over the moon. Keep up the good work Creative Tim! 10/10 for design, colours, and the feel of the kit."
                            </p>
                        </div>
                    </div>

                    <div className="testimonial-card121">
                        <img
                            src={testimonialT3}
                            alt="Michael Onubogu"
                            className="testimonial-image121"
                        />
                        <div className='testi121'>
                            <h3 className="testimonial-name">Michael Onubogu</h3>
                            <p className="testimonial-text">
                                "Damn Daniel!! This Material UI Kit is fresh AF! Amazing work!"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="companies-section">
                    <div className="company-logo">
                        <img src={logoT4} alt="Vodafone" />
                    </div>
                    <div className="company-logo">
                        <img src={logoT5} alt="Microsoft" />
                    </div>
                    <div className="company-logo">
                        <img src={logoT6} alt="Harvard" />
                    </div>
                    <div className="company-logo">
                        <img src={logoT7} alt="Stanford" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;