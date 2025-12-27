import React, { useState } from 'react';
import './BlogPage.css';

const BlogPage = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <div className="blog-page">
            <section className="hero-section11">
                <div className="hero-overlay">
                    <h1 className="hero-title">
                        A Place for Entrepreneurs to Share and Discover New Stories
                    </h1>
                </div>
            </section>

            <div className="main-content-container">
                <section className="filter-section">
                    <div className="filter-container">
                        <button
                            className={`filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('ALL')}
                        >
                            ALL
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'WORLD' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('WORLD')}
                        >
                            WORLD
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'ARTS' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('ARTS')}
                        >
                            ARTS
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'TECH' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('TECH')}
                        >
                            TECH
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'BUSINESS' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('BUSINESS')}
                        >
                            BUSINESS
                        </button>
                    </div>
                </section>

                {/* Featured Articles Section */}
                <section className="featured-section">
                    <div className="articles-grid">
                        <article className="article-card">
                            <div className="article-image">
                                <img src="src/assets/office2.2cce81e2.jpg" alt="Productivity Apps" />
                                <div className="article-overlay">
                                    <span className="article-category">WORLDS</span>
                                    <h2 className="article-title" style={{ fontFamily: "Roboto Slab, sans-serif" }}>The Best Productivity Apps on Market</h2>
                                    <p className="article-excerpt">
                                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens' bed design but the back is...
                                    </p>
                                    <button className="read-btn red-btn">
                                        <span className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                            <path fill="#fff" d="M16 64h480v32H16zm0 88h328v32H16zm0 88h480v32H16zm0 88h328v32H16zm0 88h480v32H16z" />
                                        </svg></span> READ ARTICLE
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="article-card">
                            <div className="article-image">
                                <img src="src/assets/blog8.9faabe4e.jpg" alt="Wallstreet" />
                                <div className="article-overlay">
                                    <span className="article-category">BUSINESS</span>
                                    <h2 className="article-title" style={{ fontFamily: "Roboto Slab, sans-serif" }}>Working on Wallstreet is Not So Easy</h2>
                                    <p className="article-excerpt">
                                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens' bed design but the back is...
                                    </p>
                                    <button className="read-btn purple-btn">
                                        <span className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                            <path fill="#fff" d="M16 64h480v32H16zm0 88h328v32H16zm0 88h480v32H16zm0 88h328v32H16zm0 88h480v32H16z" />
                                        </svg></span> READ ARTICLE
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="case-study-section">
                    <div className="case-study-card">
                        <div className="article-image">
                            <img src="src/assets/card-project6.8ecd9660.jpg" alt="Wallstreet" />
                            <div className="article-overlay">
                                <span className="case-study-category">MARKETING</span>
                                <h2 className="case-study-title" style={{ fontFamily: "Roboto Slab, sans-serif" }}>0 to 100.000 Customers in 6 months</h2>
                                <p className="case-study-text">
                                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens' bed design but the back is...
                                </p>
                                <button className="read-btn case-study-btn">
                                    <span className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                        <path fill="#fff" d="M16 64h480v32H16zm0 88h328v32H16zm0 88h480v32H16zm0 88h328v32H16zm0 88h480v32H16z" />
                                    </svg></span> READ CASE STUDY
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="related-section">
                    <h2 className="section-title">You may also be interested in</h2>
                    <div className="related-grid">
                        <div className="related-card">
                            <div className="related-image">
                                <img src="src/assets/bg5.784b6fcb.jpg" alt="Autodesk" />
                            </div>
                            <div className="related-content">
                                <span className="related-category cyan">ENTERPRISE</span>
                                <h3 className="related-title">Autodesk looks to future of 3D printing with Project Escher</h3>
                                <p className="related-excerpt">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. <a href="#" className="read-more">Read More</a>
                                </p>
                            </div>
                        </div>

                        <div className="related-card">
                            <div className="related-image">
                                <img src="src/assets/blog5.38efd737.jpg" alt="Lyft" />
                            </div>
                            <div className="related-content">
                                <span className="related-category green">STARTUPS</span>
                                <h3 className="related-title">Lyft launching cross-platform service this week</h3>
                                <p className="related-excerpt">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. <a href="#" className="read-more">Read More</a>
                                </p>
                            </div>
                        </div>

                        <div className="related-card">
                            <div className="related-image">
                                <img src="src/assets/blog6.b455045f.jpg" alt="French Fashion" />
                            </div>
                            <div className="related-content">
                                <span className="related-category red">ENTERPRISE</span>
                                <h3 className="related-title">6 insights into the French Fashion landscape</h3>
                                <p className="related-excerpt">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. <a href="#" className="read-more">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="authors-section-inner">
                    <div className="authors-container">
                        <div className="author-card">
                            <div className="author-image">
                                <img src="src/assets/card-profile1-square.78a01818.jpg" alt="Alec Thompson" />
                            </div>
                            <div className="author-info">
                                <h3 className="author-name">Alec Thompson</h3>
                                <p className="author-badge">AUTHOR OF THE MONTH</p>
                                <p className="author-bio">
                                    Don't be scared of the truth because we need to restart the human foundation in truth...
                                </p>
                                <div className="author-socials">
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                                    </svg></a>
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="128" viewBox="0 0 128 128">
                                        <path fill="#fff" d="M116.42 5.07H11.58a6.5 6.5 0 0 0-6.5 6.5v104.85a6.5 6.5 0 0 0 6.5 6.5H68V77.29H52.66V59.5H68V46.38c0-15.22 9.3-23.51 22.88-23.51a126 126 0 0 1 13.72.7v15.91h-9.39c-7.39 0-8.82 3.51-8.82 8.66V59.5H104l-2.29 17.79H86.39v45.64h30a6.51 6.51 0 0 0 6.5-6.5V11.58a6.5 6.5 0 0 0-6.47-6.51" />
                                    </svg></a>
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187" />
                                    </svg></a>
                                </div>
                            </div>
                        </div>

                        <div className="author-card">
                            <div className="author-image">
                                <img src="src/assets/card-profile4-square.368a64e8.jpg" alt="Kendall Andrew" />
                            </div>
                            <div className="author-info">
                                <h3 className="author-name">Kendall Andrew</h3>
                                <p className="author-badge">AUTHOR OF THE WEEK</p>
                                <p className="author-bio">
                                    Don't be scared of the truth because we need to restart the human foundation in truth...
                                </p>
                                <div className="author-socials">
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                                    </svg></a>
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" fillRule="evenodd" d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z" />
                                    </svg></a>
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 48 48">
                                        <g fill="none" stroke="#fff" strokeWidth="3">
                                            <path strokeLinejoin="round" d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0" />
                                            <path strokeLinejoin="round" d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0" />
                                            <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
                                        </g>
                                    </svg></a>
                                    <a href="#" className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187" />
                                    </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="newsletter-section">
                    <div className="newsletter-card">
                        <div className="newsletter-content">
                            <h2 className="newsletter-title">Get Tips & Tricks every Week!</h2>
                            <p className="newsletter-text">
                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                            </p>
                        </div>
                        <div className="newsletter-form">
                            <div className="email-input-wrapper">
                                <span className="email-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#495057" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                                </svg></span>
                                <input
                                    type="email"
                                    placeholder="Your Email..."
                                    className="email-input"
                                /> <hr />
                            </div>
                            <button className="subscribe-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <a href="#">CREATIVE TIM</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">BLOG</a>
                        <a href="#">LICENSES</a>
                    </div>
                    <div className="footer-copyright">
                        © 2025, made with <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 24">
                            <path fill="#495057" fillRule="evenodd" d="M12 3.942a6.35 6.35 0 0 1 4.305-1.692c1.726 0 3.374.71 4.58 1.96a6.7 6.7 0 0 1 1.865 4.652a6.7 6.7 0 0 1-1.865 4.652c-.796.825-1.591 1.67-2.39 2.518c-1.624 1.724-3.265 3.467-4.97 5.108l-.003.004a2.213 2.213 0 0 1-3.113-.069l-7.295-7.561c-2.485-2.577-2.485-6.727 0-9.303A6.33 6.33 0 0 1 12 3.942" clipRule="evenodd" />
                        </svg> by <a href="#">Creative Tim</a> for a better web.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;