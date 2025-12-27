import React from 'react';
import './Trusted.css';

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
                            src="src/assets/t1.jpeg"
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
                            src="src/assets/t2.jpeg"
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
                            src="src/assets/t3.jpeg"
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
                        <img src="src/assets/t4.jpg" alt="Vodafone" />
                    </div>
                    <div className="company-logo">
                        <img src="src/assets/t5.jpg" alt="Microsoft" />
                    </div>
                    <div className="company-logo">
                        <img src="src/assets/t6.jpg" alt="Harvard" />
                    </div>
                    <div className="company-logo">
                        <img src="src/assets/t7.jpg" alt="Stanford" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;