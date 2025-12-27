import React, { useState } from "react";
import "./Sections.css";

const HeroSection = () => {
  return (
    <>
      {/* Secondary Navigation */}
      <nav className="secondary-nav">
        <div className="nav-container1">
          <div className="brand">Creative Tim</div>
          <div className="nav-center">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#products">PRODUCTS</a>
            <a href="#contact">CONTACT US</a>
          </div>
          <div className="social-icons">
            <a href="#twitter" aria-label="Twitter">
              <svg
                width="15"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg
                width="15"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg
                width="15"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tesla Model 3.</h1>
            <p>
              There's no doubt that Tesla is delighted with the interest, but
              the data also raises a few questions. How long will it take for
              Tesla to fulfill all those extra orders?
            </p>
            <button className="order-btn">
              <span className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
                <path fill="#fefefe" d="M22.635 22.727a9.1 9.1 0 0 0-7.291 3.662L1.799 44.57a9.09 9.09 0 0 0 0 10.86l13.545 18.18a9.1 9.1 0 0 0 7.29 3.662h68.274a9.09 9.09 0 0 0 9.092-9.09V31.818a9.09 9.09 0 0 0-9.092-9.091zm43.978 7.408c2.345.399 4.587 2.331 6.352 5.537a23 23 0 0 1 1.515 3.451h-7.867zm-2.226.088v8.9h-7.455c.44-1.257.946-2.418 1.515-3.451c1.662-3.017 3.745-4.905 5.94-5.45m-5.127.603c-1.035 1.047-1.964 2.323-2.762 3.772c-.748 1.358-1.391 2.88-1.92 4.525h-5.99a20.05 20.05 0 0 1 10.672-8.297m13.092.205a20.06 20.06 0 0 1 10.06 8.092h-5.58c-.527-1.645-1.17-3.168-1.918-4.525c-.746-1.356-1.608-2.56-2.562-3.567M47.363 41.348h6.592a37 37 0 0 0-.98 7.404H45.5a20 20 0 0 1 1.863-7.404m8.89 0h8.134v7.404h-9.184c.094-2.642.463-5.144 1.05-7.404m10.36 0h8.545c.588 2.26.957 4.762 1.051 7.404h-9.596zm10.842 0h6.182a20 20 0 0 1 1.863 7.404h-7.066a37 37 0 0 0-.979-7.404m-61.342 2.289h.026A6.364 6.364 0 0 1 22.502 50a6.364 6.364 0 0 1-6.363 6.363A6.364 6.364 0 0 1 9.775 50a6.364 6.364 0 0 1 6.338-6.363m29.387 7.34h7.46c.058 2.607.367 5.1.89 7.404h-6.487a20 20 0 0 1-1.863-7.404m9.688 0h9.199v7.404h-8.244a35 35 0 0 1-.956-7.404m11.425 0h9.612a35 35 0 0 1-.955 7.404h-8.657zm11.83 0H85.5a20 20 0 0 1-1.863 7.404h-6.078a37.5 37.5 0 0 0 .884-7.404m-29.855 9.628h5.848c.552 1.818 1.247 3.491 2.062 4.971a18 18 0 0 0 2.16 3.123a20.06 20.06 0 0 1-10.07-8.094m8.19 0h7.609v9.26q-.205-.012-.408-.031c-2.044-.667-3.974-2.503-5.532-5.332a23 23 0 0 1-1.67-3.897m9.835 0h8.022a23 23 0 0 1-1.67 3.897c-1.526 2.771-3.408 4.59-5.404 5.291q-.471.047-.948.072zm10.362 0h5.437a20.06 20.06 0 0 1-9.451 7.854a18 18 0 0 0 1.953-2.883c.815-1.48 1.509-3.152 2.06-4.97" color="#fefefe" />
                <path fill="#fefefe" d="M22.635 22.727a9.1 9.1 0 0 0-7.291 3.662L1.799 44.57a9.09 9.09 0 0 0 0 10.86l13.545 18.18a9.1 9.1 0 0 0 7.29 3.662h68.274a9.09 9.09 0 0 0 9.091-9.092V31.818a9.09 9.09 0 0 0-9.091-9.091zm43.978 7.408c2.345.399 4.586 2.331 6.351 5.537a23 23 0 0 1 1.516 3.451h-7.867zm-2.227.088v8.9h-7.455c.44-1.257.947-2.418 1.516-3.451c1.661-3.017 3.745-4.905 5.94-5.45m-5.127.603c-1.034 1.047-1.963 2.323-2.761 3.772c-.748 1.358-1.392 2.88-1.92 4.525h-5.99a20.05 20.05 0 0 1 10.671-8.297m13.092.205a20.06 20.06 0 0 1 10.06 8.092h-5.58c-.527-1.645-1.17-3.168-1.917-4.525c-.747-1.356-1.608-2.56-2.563-3.567M47.363 41.348h6.592a37 37 0 0 0-.98 7.404H45.5a19.9 19.9 0 0 1 1.863-7.404m8.89 0h8.133v7.404h-9.183c.094-2.642.463-5.144 1.05-7.404m10.36 0h8.545c.588 2.26.956 4.762 1.05 7.404h-9.595zm10.842 0h6.181a19.9 19.9 0 0 1 1.864 7.404h-7.067a37 37 0 0 0-.978-7.404m-61.342 2.289h.026A6.364 6.364 0 0 1 22.502 50a6.364 6.364 0 0 1-6.363 6.363A6.364 6.364 0 0 1 9.775 50a6.364 6.364 0 0 1 6.338-6.363m29.387 7.34h7.46c.058 2.606.367 5.099.89 7.404h-6.487a19.9 19.9 0 0 1-1.863-7.405m9.687 0h9.2v7.404h-8.245a35 35 0 0 1-.955-7.405m11.426 0h9.611a35 35 0 0 1-.955 7.404h-8.656zm11.83 0H85.5a19.9 19.9 0 0 1-1.864 7.404h-6.078c.521-2.305.828-4.798.885-7.405m-29.855 9.628h5.847c.553 1.818 1.248 3.49 2.063 4.97a18 18 0 0 0 2.16 3.124a20.06 20.06 0 0 1-10.07-8.094m8.189 0h7.61v9.26c-.138-.008-.273-.021-.409-.031c-2.043-.668-3.973-2.503-5.531-5.332a23 23 0 0 1-1.67-3.897m9.836 0h8.021a23 23 0 0 1-1.67 3.897c-1.525 2.77-3.407 4.59-5.404 5.29q-.47.048-.947.073zm10.361 0h5.438a20.06 20.06 0 0 1-9.451 7.854a18 18 0 0 0 1.953-2.883c.815-1.48 1.509-3.152 2.06-4.97" color="#fefefe" />
              </svg></span>
              ORDER NOW
            </button>
          </div>

          <div className="hero-video">
            <div className="video-placeholder">
              <iframe
                width="300"
                height="150"
                src="https://www.youtube.com/embed/IN6QnLpVEPI"
                title="Tesla Motors Model 3 Reveal: See It In 4K"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="cta-section">
      {/* Background image will be added via CSS */}
      <div className="cta-overlay">
        <div className="cta-content">
          <h1>You should work with us!</h1>
          <h4>
            Now you have no excuses, it's time to surprise your clients, your
            competitors, and why not, the world. You probably won't have a
            better chance to show off all your potential if it's not by
            designing a website for your own agency or web studio.
          </h4>

          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="name"
              placeholder="Company name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Company email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Company password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
            <button type="submit" className="signup-btn">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const slides = [
  {
    title: "Material Kit PRO React",
    text: `Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in
Legnano by Italian designers Domenico Dolce and Stefano Gabbana.
The two met in Milan in 1980 and designed for the same fashion house.`,
    buttonText: "READ MORE",
    align: "left",
    image: "src/assets/slide1.jpg", // 👈 replace
  },
  {
    title: "Material Kit PRO React",
    text: `Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in
Legnano by Italian designers Domenico Dolce and Stefano Gabbana.`,
    align: "center",
    image: "src/assets/slide2.jpg", // 👈 replace
  },
  {
    title: "New Collection 50% Off",
    text: `There's no doubt that Tesla is delighted with the interest,
but the data also raises a few questions.`,
    buttonText: "SHOP NOW",
    align: "right",
    image: "src/assets/slide3.jpg", // 👈 replace
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={`overlay ${slide.align}`}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>

            {slide.buttonText && (
              <button className="hero-btn">{slide.buttonText}</button>
            )}
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={current === i ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Why our product is the best</h2>

        <p className="features-description">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he wouldn't
          scroll to get here. Add a button if you want the user to see more.
        </p>

        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              {/* Add your chat icon image here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="aqua"
                  d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"
                />
              </svg>
            </div>
            <h3 className="feature-title">Free Chat</h3>
            <p className="feature-text">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              {/* Add your verified shield icon image here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#42ed07"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
                />
              </svg>
            </div>
            <h3 className="feature-title">Verified Users</h3>
            <p className="feature-text">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              {/* Add your fingerprint icon image here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ed2c07"
                  d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52c.25.13.34.43.21.67a.49.49 0 0 1-.44.28M3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.4 9.4 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.96c-.08.14-.23.21-.39.21m6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85c.64 1.15 1.08 1.64 1.85 2.42c.19.2.19.51 0 .71c-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39c0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.53.13.58.41c.05.27-.13.53-.41.58c-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02c-1.59-.44-2.63-1.03-3.72-2.1a7.3 7.3 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.44 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64c-.26.1-.55-.04-.64-.29a11.1 11.1 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.55 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.85c.27.07.42.35.35.61c-.05.23-.26.38-.47.38"
                />
              </svg>
            </div>
            <h3 className="feature-title">Fingerprint</h3>
            <p className="feature-text">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoFeaturesSection = () => {
  return (
    <section className="info-features-section">
      <div className="info-features-container">
        <h2 className="info-features-title">Why our product is the best</h2>

        <p className="info-features-description">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
        </p>

        <div className="info-features-grid">
          {/* Feature Card 1 - Collaborate */}
          <div className="info-feature-card">
            <div className="info-feature-header">
              <div className="info-feature-icon cyan">
                {/* Add your collaborate icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#00bcd4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m0 0v10" />
                  </g>
                </svg>
              </div>
              <h3 className="info-feature-title">Collaborate</h3>
            </div>
            <p className="info-feature-text">
              The moment you use Material Kit, you know you've never felt
              anything like it. With a single use, this powerfull UI Kit lets
              you do more than ever before.
            </p>
            <a href="#" className="info-feature-link">
              Find more...
            </a>
          </div>

          {/* Feature Card 2 - Airplay */}
          <div className="info-feature-card">
            <div className="info-feature-header">
              <div className="info-feature-icon red">
                {/* Add your airplay icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="#f44336" stroke-width="2">
                    <path
                      stroke-linecap="square"
                      d="M6 18H2.001L2 3h20v15h-4"
                    />
                    <path stroke-linecap="round" d="m8 21l4-4l4 4z" />
                  </g>
                </svg>
              </div>
              <h3 className="info-feature-title">Airplay</h3>
            </div>
            <p className="info-feature-text">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
            <a href="#" className="info-feature-link">
              Find more...
            </a>
          </div>

          {/* Feature Card 3 - Location Integrated */}
          <div className="info-feature-card">
            <div className="info-feature-header">
              <div className="info-feature-icon green">
                {/* Add your location icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#27eb2f"
                    fill-rule="evenodd"
                    d="M256 42.667c82.475 0 149.334 66.859 149.334 149.333c0 27.204-7.254 52.694-19.983 74.676Q372.62 288.657 256 490.667q-116.622-202.01-129.35-223.991c-12.73-21.982-19.984-47.472-19.984-74.676c0-82.474 66.859-149.333 149.333-149.333M256 128c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.653-64-64-64"
                  />
                </svg>
              </div>
              <h3 className="info-feature-title">Location Integrated</h3>
            </div>
            <p className="info-feature-text">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
            <a href="#" className="info-feature-link">
              Find more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductInfoSection = () => {
  return (
    <section className="product-info-section">
      <div className="product-info-container">
        <div className="product-info-left">
          <div className="phone-image">
            {/* Add your phone mockup image here */}
            <img src="src/assets/phone.png" alt="Material Kit PRO" />
          </div>
        </div>

        <div className="product-info-right">
          <h2 className="product-info-title">Your life will be much easier</h2>

          <div className="product-info-features">
            {/* Feature 1 */}
            <div className="product-info-feature">
              <div className="product-info-icon purple">
                {/* Add your puzzle icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="purple"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"
                  />
                </svg>
              </div>
              <div className="product-info-content">
                <h3 className="product-info-feature-title">
                  Hundreds of Components
                </h3>
                <p className="product-info-feature-text">
                  The moment you use Material Kit, you know you've never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="product-info-feature">
              <div className="product-info-icon purple">
                {/* Add your rocket icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="purple"
                    d="M19 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M9 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1M22 8.5A6.51 6.51 0 0 0 15.5 2H15a1 1 0 0 0-1 1v5H7.52L6.27 4.65A1 1 0 0 0 5.33 4H3a1 1 0 0 0 0 2h1.64l1.25 3.37l.51 1.37v.09A6.44 6.44 0 0 0 12.5 15h3A6.49 6.49 0 0 0 22 8.5m-3.32 3.18A4.47 4.47 0 0 1 15.5 13h-3a4.47 4.47 0 0 1-4.16-2.8a.14.14 0 0 1 0-.06L8.26 10h11.48a4.3 4.3 0 0 1-1.06 1.68M16 8V4a4.49 4.49 0 0 1 4 4Z"
                  />
                </svg>
              </div>
              <div className="product-info-content">
                <h3 className="product-info-feature-title">Easy to Use</h3>
                <p className="product-info-feature-text">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="product-info-feature">
              <div className="product-info-icon purple">
                {/* Add your clock icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="purple"
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-5a1 1 0 1 0-2 0v3.764a3 3 0 0 0 1.658 2.683l2.895 1.447a1 1 0 1 0 .894-1.788l-2.894-1.448a1 1 0 0 1-.553-.894z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="product-info-content">
                <h3 className="product-info-feature-title">Fast Prototyping</h3>
                <p className="product-info-feature-text">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CenteredPhoneSection = () => {
  return (
    <section className="centered-phone-section">
      <div className="centered-phone-container">
        <h2 className="centered-phone-title">Your life will be much easier</h2>

        <p className="centered-phone-description">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
        </p>

        <div className="centered-phone-content">
          {/* Left Features */}
          <div className="centered-phone-left-features">
            {/* Feature 1 - For Developers */}
            <div className="centered-phone-feature left">
              <div className="centered-phone-feature-icon cyan">
                {/* Add your code icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#2cb4d6"
                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"
                  />
                </svg>
              </div>
              <div className="centered-phone-feature-content">
                <h3 className="centered-phone-feature-title">For Developers</h3>
                <p className="centered-phone-feature-text">
                  The moment you use Material Kit, you know you've never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.
                </p>
              </div>
            </div>

            {/* Feature 2 - For Designers */}
            <div className="centered-phone-feature left">
              <div className="centered-phone-feature-icon orange">
                {/* Add your design icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#d82627"
                    fill-rule="evenodd"
                    d="M6 1h17v7H6V5.5h-.75a2.25 2.25 0 0 0 0 4.5H15.5v5H18v8h-7v-8h2.5v-3H5.25a4.25 4.25 0 0 1 0-8.5H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="centered-phone-feature-content">
                <h3 className="centered-phone-feature-title">For Designers</h3>
                <p className="centered-phone-feature-text">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
          </div>

          {/* Center Phone */}
          <div className="centered-phone-mockup">
            <div className="phone-device">
              {/* Add your phone mockup image here */}
              <img src="/src/assets/phone2.png" alt="Tesla Model 3" />
            </div>
          </div>

          {/* Right Features */}
          <div className="centered-phone-right-features">
            {/* Feature 3 - @material-ui/core Grid */}
            <div className="centered-phone-feature right">
              <div className="centered-phone-feature-icon purple">
                {/* Add your grid icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#a01e9b"
                      d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11zM9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                    />
                  </g>
                </svg>
              </div>
              <div className="centered-phone-feature-content">
                <h3 className="centered-phone-feature-title">
                  @material-ui/core Grid
                </h3>
                <p className="centered-phone-feature-text">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>

            {/* Feature 4 - Example Pages Included */}
            <div className="centered-phone-feature right">
              <div className="centered-phone-feature-icon green">
                {/* Add your pages icon image here */}
                <svg
                  focusable="false"
                  width="45"
                  height="30"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#42f277ff"
                    d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
                  ></path>
                </svg>
              </div>
              <div className="centered-phone-feature-content">
                <h3 className="centered-phone-feature-title">
                  Example Pages Included
                </h3>
                <p className="centered-phone-feature-text">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DarkFeaturesGrid = () => {
  return (
    <section className="dark-features-grid">
      <div className="dark-features-overlay">
        <div className="dark-features-container">
          <h2 className="dark-features-title">Your life will be much easier</h2>

          <div className="dark-features-items">
            {/* Feature 1 - For Developers */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your code brackets icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fafdfeff"
                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"
                  />
                </svg>
              </div>
              <h3 className="dark-feature-title">For Developers</h3>
              <p className="dark-feature-text">
                The moment you use Material Kit, you know you've never felt
                anything like it. With a single use, this powerfull UI Kit lets
                you do more than ever before.
              </p>
            </div>

            {/* Feature 2 - For Designers */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your flag icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f9f9f9ff"
                    fill-rule="evenodd"
                    d="M6 1h17v7H6V5.5h-.75a2.25 2.25 0 0 0 0 4.5H15.5v5H18v8h-7v-8h2.5v-3H5.25a4.25 4.25 0 0 1 0-8.5H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="dark-feature-title">For Designers</h3>
              <p className="dark-feature-text">
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature will be enough.
              </p>
            </div>

            {/* Feature 3 - @material-ui/core Grid */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your grid icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#fffeffff"
                      d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11zM9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="dark-feature-title">@material-ui/core Grid</h3>
              <p className="dark-feature-text">
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature will be enough.
              </p>
            </div>

            {/* Feature 4 - Example Pages Included */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your pages icon image here */}
                <svg
                  focusable="false"
                  width="45"
                  height="30"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#fcfffdff"
                    d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
                  ></path>
                </svg>
              </div>
              <h3 className="dark-feature-title">Example Pages Included</h3>
              <p className="dark-feature-text">
                The moment you use Material Kit, you know you've never felt
                anything like it. With a single use, this powerfull UI Kit lets
                you do more than ever before.
              </p>
            </div>

            {/* Feature 5 - Save Time */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your clock icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="dark-feature-title">Save Time</h3>
              <p className="dark-feature-text">
                The moment you use Material Kit, you know you've never felt
                anything like it. With a single use, this powerfull UI Kit lets
                you do more than ever before.
              </p>
            </div>

            {/* Feature 6 - Save Money */}
            <div className="dark-feature-card">
              <div className="dark-feature-icon">
                {/* Add your dollar icon image here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
                  />
                </svg>
              </div>
              <h3 className="dark-feature-title">Save Money</h3>
              <p className="dark-feature-text">
                The moment you use Material Kit, you know you've never felt
                anything like it. With a single use, this powerfull UI Kit lets
                you do more than ever before.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPostsSection = () => {
  return (
    <section className="blog-posts-section">
      <div className="blog-posts-container">
        <h2 className="blog-posts-title">Latest Blogposts</h2>

        <div className="blog-posts-list">
          {/* Blog Post 1 - Image Left */}
          <article className="blog-post-item image-left">
            <div className="blog-post-image">
              {/* Add your drone image here */}
              <img src="/src/assets/ffblo.jpg" alt="3D Printing Drone" />
            </div>
            <div className="blog-post-content">
              <span className="blog-post-category">ENTERPRISE</span>
              <h3 className="blog-post-heading">
                Autodesk looks to future of 3D printing with Project Escher
              </h3>
              <p className="blog-post-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it's moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and...{" "}
                <a href="#" className="read-more-link">
                  Read More
                </a>
              </p>
              <div className="blog-post-meta">
                <span className="blog-post-author">
                  by <strong>Mike Butcher</strong>
                </span>
                <span className="blog-post-separator">.</span>
                <span className="blog-post-date">2 days ago</span>
              </div>
            </div>
          </article>

          {/* Blog Post 2 - Image Right */}
          <article className="blog-post-item image-right">
            <div className="blog-post-content">
              <span className="blog-post-category trending">📈 TRENDING</span>
              <h3 className="blog-post-heading">
                6 insights into the French Fashion landscape
              </h3>
              <p className="blog-post-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it's moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and...{" "}
                <a href="#" className="read-more-link">
                  Read More
                </a>
              </p>
              <div className="blog-post-meta">
                <span className="blog-post-author">
                  by <strong>Mike Butcher</strong>
                </span>
                <span className="blog-post-separator">.</span>
                <span className="blog-post-date">2 days ago</span>
              </div>
            </div>
            <div className="blog-post-image">
              {/* Add your fashion/interior image here */}
              <img src="/src/assets/fblo.jpg" alt="French Fashion" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const BlogPostsGrid = () => {
  return (
    <section className="blog-posts-grid-section">
      <div className="blog-posts-grid-container">
        <h2 className="blog-posts-grid-title">Latest Blogposts 2</h2>

        <div className="blog-posts-grid">
          {/* Blog Card 1 */}
          <article className="blog-card">
            <div className="blog-card-image">
              {/* Add your drone image here */}
              <img src="/src/assets/ffblo.jpg" alt="3D Printing Drone" />
            </div>
            <div className="blog-card-content">
              <span className="blog-card-category cyan">ENTERPRISE</span>
              <h3 className="blog-card-title">
                Autodesk looks to future of 3D printing with Project Escher
              </h3>
              <p className="blog-card-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.{" "}
                <a href="#" className="blog-card-read-more">
                  Read More
                </a>
              </p>
            </div>
          </article>

          {/* Blog Card 2 */}
          <article className="blog-card">
            <div className="blog-card-image">
              {/* Add your car image here */}
              <img src="/src/assets/vechile.jpg" alt="Lyft Platform" />
            </div>
            <div className="blog-card-content">
              <span className="blog-card-category green">STARTUPS</span>
              <h3 className="blog-card-title">
                Lyft launching cross-platform service this week
              </h3>
              <p className="blog-card-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.{" "}
                <a href="#" className="blog-card-read-more">
                  Read More
                </a>
              </p>
            </div>
          </article>

          {/* Blog Card 3 */}
          <article className="blog-card">
            <div className="blog-card-image">
              {/* Add your fashion image here */}
              <img src="/src/assets/bed.jpg" alt="French Fashion" />
            </div>
            <div className="blog-card-content">
              <span className="blog-card-category red">📈 ENTERPRISE</span>
              <h3 className="blog-card-title">
                6 insights into the French Fashion landscape
              </h3>
              <p className="blog-card-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.{" "}
                <a href="#" className="blog-card-read-more">
                  Read More
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const BlogPostsList = () => {
  return (
    <section className="blog-posts-list-section">
      <div className="blog-posts-list-container">
        <h2 className="blog-posts-list-title">Latest Blogposts 3</h2>

        <div className="blog-posts-list">
          {/* Blog Post 1 */}
          <article className="blog-list-item">
            <div className="blog-list-image">
              {/* Add your drone image here */}
              <img src="/src/assets/ffblo.jpg" alt="3D Printing Drone" />
            </div>
            <div className="blog-list-content">
              <span className="blog-list-category cyan">ENTERPRISE</span>
              <h3 className="blog-list-heading">
                Autodesk looks to future of 3D printing with Project Escher
              </h3>
              <p className="blog-list-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it's moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and...{" "}
                <a href="#" className="blog-list-read-more">
                  Read More
                </a>
              </p>
              <div className="blog-list-meta">
                <span className="blog-list-author">
                  by <strong>Mike Butcher</strong>
                </span>
                <span className="blog-list-separator">.</span>
                <span className="blog-list-date">2 days ago</span>
              </div>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="blog-list-item">
            <div className="blog-list-image">
              {/* Add your fashion/interior image here */}
              <img src="/src/assets/fblo.jpg" alt="French Fashion" />
            </div>
            <div className="blog-list-content">
              <span className="blog-list-category red">📈 TRENDING</span>
              <h3 className="blog-list-heading">
                6 insights into the French Fashion landscape
              </h3>
              <p className="blog-list-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it's moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and...{" "}
                <a href="#" className="blog-list-read-more">
                  Read More
                </a>
              </p>
              <div className="blog-list-meta">
                <span className="blog-list-author">
                  by <strong>Mike Butcher</strong>
                </span>
                <span className="blog-list-separator">.</span>
                <span className="blog-list-date">2 days ago</span>
              </div>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="blog-list-item">
            <div className="blog-list-image">
              {/* Add your desk/workspace image here */}
              <img src="/src/assets/news.jpg" alt="Lyft Platform" />
            </div>
            <div className="blog-list-content">
              <span className="blog-list-category green">STARTUPS</span>
              <h3 className="blog-list-heading">
                Lyft launching cross-platform service this week
              </h3>
              <p className="blog-list-excerpt">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it's moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and...{" "}
                <a href="#" className="blog-list-read-more">
                  Read More
                </a>
              </p>
              <div className="blog-list-meta">
                <span className="blog-list-author">
                  by <strong>Megan Rose</strong>
                </span>
                <span className="blog-list-separator">.</span>
                <span className="blog-list-date">2 days ago</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const BlogPostsCentered = () => {
  return (
    <section className="blog-posts-centered-section">
      <div className="blog-posts-centered-container">
        <h2 className="blog-posts-centered-title">Latest Blogposts 4</h2>

        <div className="blog-posts-centered-list">
          {/* Blog Post 1 */}
          <article className="blog-centered-item">
            <div className="blog-centered-image">
              {/* Add your castle image here */}
              <img src="/src/assets/hills.jpg" alt="Castle" />
            </div>
            <div className="blog-centered-content">
              <span className="blog-centered-category">ENTERPRISE</span>
              <h3 className="blog-centered-heading">
                Autodesk looks to future of 3D
              </h3>
              <p className="blog-centered-excerpt">
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens' bed design but the back is...
              </p>
              <button className="blog-centered-button">Read more</button>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="blog-centered-item">
            <div className="blog-centered-image">
              {/* Add your motorcycle image here */}
              <img src="/src/assets/bike.jpg" alt="Motorcycle" />
            </div>
            <div className="blog-centered-content">
              <h3 className="blog-centered-heading">
                We will breathe clean air and exercise
              </h3>
              <p className="blog-centered-excerpt">
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens' bed design but the back is...
              </p>
              <button className="blog-centered-button">Read more</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

// teamss

const TeamSections = () => {
  return (
    <>
      {/* Team Section 1 - Our Awesome Team 1 */}
      <section className="team-section team-section-1">
        <div className="team-container">
          <h2 className="team-title">Our Awesome Team 1</h2>
          <p className="team-description">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </p>

          <div className="team-grid team-grid-4">
            {/* Team Member 1 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img
                  src="/src/assets/marc.jpg"
                  alt="Alec Thompson"
                  className="team-image"
                />
              </div>
              <h4 className="team-member-name">Alec Thompson</h4>
              <p className="team-member-role">CEO / CO-Founder</p>
              <p className="team-member-bio">
                And I love you like Kanye loves Kanye. We need to restart the human foundation.
              </p>
              <div className="team-social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53ced1"
                    d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 128 128"
                >
                  <rect
                    width="118.35"
                    height="118.35"
                    x="4.83"
                    y="4.83"
                    fill="#3d5a98"
                    rx="6.53"
                    ry="6.53"
                  />
                  <path
                    fill="#fff"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#d18453"
                    fill-rule="evenodd"
                    d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img
                  src="/src/assets/kend.jpg"
                  alt="Tania Andrew"
                  className="team-image"
                />
              </div>
              <h4 className="team-member-name">Tania Andrew</h4>
              <p className="team-member-role">Designer</p>
              <p className="team-member-bio">
                Don't be scared of the truth because we need to restart the human foundation. And I love you like Kanye loves Kanye.
              </p>
              <div className="team-social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53ced1"
                    d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                  <path fill="#d153bf" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                  <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" />
                  <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
                </svg>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img
                  src="/src/assets/chris.jpg"
                  alt="Christian Mike"
                  className="team-image"
                />
              </div>
              <h4 className="team-member-name">Christian Mike</h4>
              <p className="team-member-role">Web Developer</p>
              <p className="team-member-bio">
                I love you like Kanye loves Kanye. Don't be scared of the truth because we need to restart the human foundation.
              </p>
              <div className="team-social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 128 128"
                >
                  <rect
                    width="118.35"
                    height="118.35"
                    x="4.83"
                    y="4.83"
                    fill="#3d5a98"
                    rx="6.53"
                    ry="6.53"
                  />
                  <path
                    fill="#fff"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                  <path fill="#d153bf" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                </svg>

              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img
                  src="/src/assets/ava.jpg"
                  alt="Rebecca Stormvile"
                  className="team-image"
                />
              </div>
              <h4 className="team-member-name">Rebecca Stormvile</h4>
              <p className="team-member-role">Web Developer</p>
              <p className="team-member-bio">
                And I love you like Kanye loves Kanye. We really need to restart the human foundation.
              </p>
              <div className="team-social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#d18453"
                    fill-rule="evenodd"
                    d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53ced1"
                    d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                  <path fill="#d153bf" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 2 - The Executive Team 2 */}
      <section className="team-section team-section-2">
        <div className="team-container">
          <h2 className="team-title">The Executive Team 2</h2>
          <p className="team-description">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </p>

          <div className="team-grid team-grid-3">
            {/* Team Member 1 */}
            <div className="team-card-horizontal">
              <div className="team-image-horizontal">
                <img src="/src/assets/manA.jpg" alt="Alec Thompson" />
              </div>
              <div className="team-content-horizontal">
                <h4 className="team-member-name">Alec Thompson</h4>
                <p className="team-member-role">Founder</p>
                <div className="team-social-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                    <path fill="#53c1d1" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7M5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" class="cls-1" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1000 1000">
                    <path fill="#2d4bd6" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d8" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card-horizontal">
              <div className="team-image-horizontal">
                <img src="/src/assets/guyA.jpg" alt="George West" />
              </div>
              <div className="team-content-horizontal">
                <h4 className="team-member-name">George West</h4>
                <p className="team-member-role">Backend Hacker</p>
                <div className="team-social-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                    <path fill="#3086da" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1000 1000">
                    <path fill="#2d4bd6" d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d8" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card-horizontal">
              <div className="team-image-horizontal">
                <img src="src/assets/swayA.jpg" alt="Gina Andrew" />
              </div>
              <div className="team-content-horizontal">
                <h4 className="team-member-name">Gina Andrew</h4>
                <p className="team-member-role">Designer</p>
                <div className="team-social-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d8" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                    <path fill="#3086da" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 3 - The Executive Team 3 */}
      <section className="team-section team-section-3">
        <div className="team-container">
          <h2 className="team-title">The Executive Team 3</h2>
          <p className="team-description">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </p>

          <div className="team-grid team-grid-2x2">
            {/* Team Member 1 */}
            <div className="team-card-large">
              <div className="team-image-large">
                <img src="/src/assets/manB.jpg" alt="Alec Thompson" />
              </div>
              <div className="team-content-large">
                <h4 className="team-member-name">Alec Thompson</h4>
                <p className="team-member-role">Founder</p>
                <p className="team-member-bio">
                  Don't be scared of the truth because we need to restart the human foundation in truth..
                </p>
                <div className="team-social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#30cada" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#3038da" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d18453"
                      fill-rule="evenodd"
                      d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card-large">
              <div className="team-image-large">
                <img src="/src/assets/farm-gul.jpg" alt="Kendall Andrew" />
              </div>
              <div className="team-content-large">
                <h4 className="team-member-name">Kendall Andrew</h4>
                <p className="team-member-role">Graphic Designer</p>
                <p className="team-member-bio">
                  Don't be scared of the truth because we need to restart the human foundation in truth..
                </p>
                <div className="team-social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#306ada" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#3038da" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                    <path fill="#d153bf" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d18453"
                      fill-rule="evenodd"
                      d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card-large">
              <div className="team-image-large">
                <img src="/src/assets/sway.jpg" alt="Gina Andrew" />
              </div>
              <div className="team-content-large">
                <h4 className="team-member-name">Gina Andrew</h4>
                <p className="team-member-role">Web Designer</p>
                <p className="team-member-bio">
                  I love you like Kanye loves Kanye. Don't be scared of the truth.
                </p>
                <div className="team-social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28.45" height="20" viewBox="0 0 256 180">
                    <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                    <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#30cada" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="#306ada" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                      <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-card-large">
              <div className="team-image-large">
                <img src="/src/assets/guyB.jpg" alt="George West" />
              </div>
              <div className="team-content-large">
                <h4 className="team-member-name">George West</h4>
                <p className="team-member-role">Backend Hacker</p>
                <p className="team-member-bio">
                  I love you like Kanye loves Kanye. Don't be scared of the truth.
                </p>
                <div className="team-social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#306ada" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#3038da" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#d18453"
                      fill-rule="evenodd"
                      d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// TEAM 4 & 5 section

const DarkTeamSections = () => {
  return (
    <>
      {/* Team Section 4 - The Executive Team 4 */}
      <section className="dark-team-section dark-team-4">
        <div className="dark-team-overlay">
          <div className="dark-team-container">
            <h2 className="dark-team-title">The Executive Team 4</h2>
            <p className="dark-team-description">
              This is the paragraph where you can write more details about your team. Keep you user engaged by
              providing meaningful information.
            </p>

            <div className="dark-team-grid-3">
              {/* Team Member 1 */}
              <div className="dark-team-card-white">
                <div className="dark-team-image-circle">
                  <img src="src/assets/manB.jpg" alt="Alec Thompson" />
                </div>
                <h4 className="dark-team-name">Alec Thompson</h4>
                <p className="dark-team-role">CEO / Co-Founder</p>
                <p className="dark-team-bio">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..
                </p>
                <div className="dark-team-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                    <path fill="#306ada" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                    <path fill="#30dace" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7M5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" class="cls-1" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d3" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="dark-team-card-white">
                <div className="dark-team-image-circle">
                  <img src="/src/assets/guyB.jpg" alt="George West" />
                </div>
                <h4 className="dark-team-name">George West</h4>
                <p className="dark-team-role">Backend Hacker</p>
                <p className="dark-team-bio">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..
                </p>
                <div className="dark-team-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                    <path fill="#30dace" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7M5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" class="cls-1" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d3" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="dark-team-card-white">
                <div className="dark-team-image-circle">
                  <img src="src/assets/sway.jpg" alt="Gina Andrew" />
                </div>
                <h4 className="dark-team-name">Gina Andrew</h4>
                <p className="dark-team-role">Web Designer</p>
                <p className="dark-team-bio">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..
                </p>
                <div className="dark-team-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                    <path fill="#30dace" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7M5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" class="cls-1" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                    <path fill="#da30d3" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="29.07" height="30" viewBox="0 0 496 512">
                    <path fill="#da3b30" d="M496 256c0 137-111 248-248 248c-25.6 0-50.2-3.9-73.4-11.1c10.1-16.5 25.2-43.5 30.8-65c3-11.6 15.4-59 15.4-59c8.1 15.4 31.7 28.5 56.8 28.5c74.8 0 128.7-68.8 128.7-154.3c0-81.9-66.9-143.2-152.9-143.2c-107 0-163.9 71.8-163.9 150.1c0 36.4 19.4 81.7 50.3 96.1c4.7 2.2 7.2 1.2 8.3-3.3c.8-3.4 5-20.3 6.9-28.1c.6-2.5.3-4.7-1.7-7.1c-10.1-12.5-18.3-35.3-18.3-56.6c0-54.7 41.4-107.6 112-107.6c60.9 0 103.6 41.5 103.6 100.9c0 67.1-33.9 113.6-78 113.6c-24.3 0-42.6-20.1-36.7-44.8c7-29.5 20.5-61.3 20.5-82.6c0-19-10.2-34.9-31.4-34.9c-24.9 0-44.9 25.7-44.9 60.2c0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256C0 119 111 8 248 8s248 111 248 248" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 5 - The Executive Team 5 */}
      <section className="dark-team-section dark-team-5">
        <div className="dark-team-overlay">
          <div className="dark-team-container">
            <h2 className="dark-team-title">The Executive Team 5</h2>
            <p className="dark-team-description">
              This is the paragraph where you can write more details about your team. Keep you user engaged by
              providing meaningful information.
            </p>

            <div className="dark-team-grid-2x2">
              {/* Team Member 1 */}
              <div className="dark-team-card-horizontal">
                <div className="dark-team-image-rect">
                  <img src="src/assets/manB.jpg" alt="Alec Thompson" />
                </div>
                <div className="dark-team-content">
                  <h4 className="dark-team-name-white">Alec Thompson</h4>
                  <p className="dark-team-role-white">Founder</p>
                  <p className="dark-team-bio-white">
                    Don't be scared of the truth because we need to restart the human foundation in truth...
                  </p>
                  <div className="team-social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#e4f4f6ff" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <path fill="#e3e4f8ff" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f8f2eeff"
                        fill-rule="evenodd"
                        d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="dark-team-card-horizontal">
                <div className="dark-team-image-rect">
                  <img src="src/assets/farm-gul.jpg" alt="Kendall Andrew" />
                </div>
                <div className="dark-team-content">
                  <h4 className="dark-team-name-white">Kendall Andrew</h4>
                  <p className="dark-team-role-white">Graphic Designer</p>
                  <p className="dark-team-bio-white">
                    Don't be scared of the truth because we need to restart the human foundation in truth...
                  </p>
                  <div className="team-social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#e6ebf3ff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <path fill="#e5e6f4ff" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                      <path fill="#fff9feff" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632a256.51 256.51 0 0 0-241.728-13.952a762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632a256.13 256.13 0 0 0-56.064 331.968a382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128a320.13 320.13 0 0 1-379.264 88.384a382.4 382.4 0 0 0 110.144 229.696a382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448a699.65 699.65 0 0 0-268.8-124.352a382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056a256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112a320.83 320.83 0 0 1 282.112-8.128a382.4 382.4 0 0 0-110.144-229.12a382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6a448 448 0 0 1 633.6 633.6" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f3eae4ff"
                        fill-rule="evenodd"
                        d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="dark-team-card-horizontal">
                <div className="dark-team-image-rect">
                  <img src="/src/assets/sway.jpg" alt="Gina Andrew" />
                </div>
                <div className="dark-team-content">
                  <h4 className="dark-team-name-white">Gina Andrew</h4>
                  <p className="dark-team-role-white">Web Designer</p>
                  <p className="dark-team-bio-white">
                    Don't be scared of the truth because we need to restart the human foundation in truth...
                  </p>
                  <div className="team-social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.45" height="20" viewBox="0 0 256 180">
                      <path fill="#fff" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                      <path fill="rgba(235, 21, 21, 1)" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#f4f8f9ff" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <g fill="none" stroke="#edf0f7ff" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                        <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="dark-team-card-horizontal">
                <div className="dark-team-image-rect">
                  <img src="src/assets/guyB.jpg" alt="George West" />
                </div>
                <div className="dark-team-content">
                  <h4 className="dark-team-name-white">George West</h4>
                  <p className="dark-team-role-white">Backend Hacker</p>
                  <p className="dark-team-bio-white">
                    Don't be scared of the truth because we need to restart the human foundation in truth...
                  </p>
                  <div className="team-social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <path fill="#fff" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M12.037 21.998a10.3 10.3 0 0 1-7.168-3.049a9.9 9.9 0 0 1-2.868-7.118a9.95 9.95 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.94 9.94 0 0 1 6.614 2.564L16.457 6.88a6.2 6.2 0 0 0-4.131-1.566a6.9 6.9 0 0 0-4.794 1.913a6.62 6.62 0 0 0-2.045 4.657a6.6 6.6 0 0 0 1.882 4.723a6.9 6.9 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678q.113.927.1 1.859c-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


const ProductsSections = () => {
  return (
    <>
      {/* Products Section 1 */}
      <section className="products-section products-section-1">
        <div className="products-container">
          <h2 className="products-title">Some of Our Awesome Products - 1</h2>

          {/* Tabs */}
          <div className="products-tabs">
            <button className="products-tab active">ALL</button>
            <button className="products-tab">WEB DESIGN</button>
            <button className="products-tab">BRANDING / IDENTITY</button>
            <button className="products-tab">WEB DEVELOPMENT</button>
            <button className="products-tab">IOS / ANDROID</button>
          </div>

          {/* Products Grid */}
          <div className="products-grid products-grid-asymmetric">
            {/* Product 1 - Top Left */}
            <div className="product-card product-card-large">
              <div className="product-image">
                <img src="src/assets/officebg.jpg" alt="Productivity Apps" />
                <div className="product-overlay">
                  <p className="product-overlay-text">PRODUCTIVITY</p>
                  <h3 className="product-overlay-title">The Best Productivity Apps on Market</h3>
                  <p className="product-overlay-text">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <button className="product-overlay-button red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M16 3H4v13" />
                        <path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
                      </g>
                    </svg> View App
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 - Top Right */}
            <div className="product-card product-card-large">
              <div className="product-image">
                <img src="src/assets/sculpture.jpg" alt="Sculpture" />
                <div className="product-overlay">
                  <p className="product-overlay-text">DESIGN</p>
                  <h3 className="product-overlay-title">The Sculpture Where Details Matter</h3>
                  <p className="product-overlay-text">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <button className="product-overlay-button cyan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#fff" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" />
                    </svg> View project
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 - Full Width Bottom */}
            <div className="product-card product-card-full">
              <div className="product-image">
                <img src="src/assets/Crowd.jpg" alt="Customers" />
                <div className="product-overlay">
                  <p className="product-overlay-text">MARKETING</p>
                  <h3 className="product-overlay-title">0 to 100.000 Customers in 6 months</h3>
                  <p className="product-overlay-text">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <button className="product-overlay-button orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#fff" d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" />
                    </svg>CASE STUDY
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Products Section 2 */}
      <section className="products-section products-section-2">
        <div className="products-container">
          <h2 className="products-title">Some of Our Awesome Products - 2</h2>
          <p className="products-description">
            This is the paragraph where you can write more details about your projects. Keep you user engaged by
            providing meaningful information.
          </p>

          {/* Products Grid */}
          <div className="products-grid products-grid-standard">
            {/* Product Info Card */}
            <div className="product-info-card">
              <span className="product-info-label">Material Free Kit  React</span>
              <h3 className="product-standard-title"> Free UI Kit</h3>
              <p className="product-info-text">
                Material Kit 2 PRO is our newest free Bootstrap 4 UI Kit with a fresh, new design inspired by
                Google's Material Design. It's a great pleasure to introduce...
              </p>
            </div>

            {/* Product 1 */}
            <div className="product-card-standard">
              <div className="product-standard-image">
                <img src="src/assets/DashA.jpg" alt="Light Bootstrap Dashboard" />
              </div>
              <div className="product-standard-content">

                <h4 className="product-standard-title">Light Bootstrap Dashboard PRO React</h4>
                <h6 className="product-info-text">PREMIUM TEMPLATE</h6>
                <p className="product-info-text">
                  Light Bootstrap Dashboard PRO is a Bootstrap 4 Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card-standard">
              <div className="product-standard-image">
                <img src="src/assets/DashB.jpg" alt="Now UI Dashboard" />
              </div>
              <div className="product-standard-content">
                <h4 className="product-standard-title">Now UI Dashboard PRO React</h4>
                <h6 className="product-info-text">PREMIUM TEMPLATE</h6>
                <p className="product-info-text">
                  Now UI Dashboard React is an admin dashboard template designed by Invision and coded by Creative Tim. It is built on top of Reactstrap, using Now UI Dashboard and it is fully responsive.              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




const ProductsSection = () => {
  return (
    <div className="products-container">
      {/* Section 3 - Grid Layout */}
      <section className="products-section section-3">
        <p className="section-label">OUR WORK</p>
        <h2 className="section-title">Some of Our Awesome Products - 3</h2>

        <div className="products-grid-4">
          <div className="product-card">
            <img src="src/assets/productA.jpg" alt="Website Redesign" />
            <div className="product-info">
              <p className="product-category">WEB DESIGN</p>
              <h3 className="product-title">Famous Website Redesign</h3>
              <p className="product-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="src/assets/productB.jpg" alt="Desktop for Designers" />
            <div className="product-info">
              <p className="product-category">PRODUCTIVITY TOOLS</p>
              <h3 className="product-title">Beautiful Desktop for Designers</h3>
              <p className="product-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="src/assets/productC.jpg" alt="Analytics for Android" />
            <div className="product-info">
              <p className="product-category">ANDROID APP</p>
              <h3 className="product-title">Analytics for Android</h3>
              <p className="product-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="src/assets/productD.jpg" alt="Behance Redesign" />
            <div className="product-info">
              <p className="product-category">UX/UI DESIGN</p>
              <h3 className="product-title">Behance Redesign</h3>
              <p className="product-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Alternating Layout */}
      <section className="products-section section-4">
        <h2 className="section-title">Some of Our Awesome Products - 4</h2>
        <p className="section-subtitle">
          This is the paragraph where you can write more details about your projects. Keep your user engaged by providing meaningful information.
        </p>

        <div className="products-alternating">
          <div className="alternating-item">
            <div className="alternating-image">
              <img src="src/assets/productB.jpg" alt="Beautiful Project" />
            </div>
            <div className="alternating-content">
              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#00BCD4' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#41fff8" fill-rule="evenodd" d="M6 1h17v7H6V5.5h-.75a2.25 2.25 0 0 0 0 4.5H15.5v5H18v8h-7v-8h2.5v-3H5.25a4.25 4.25 0 0 1 0-8.5H6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Graphic Design</h3>
                  <p className="feature-description">
                    We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#9C27B0' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Fully Coded in HTML5</h3>
                  <p className="feature-description">
                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#F44336' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">CMS Admin Dashboard</h3>
                  <p className="feature-description">
                    There is also a Fully Customizable CMS Admin Dashboard for this product.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="alternating-item reverse">
            <div className="alternating-content">
              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#E91E63' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Marketing</h3>
                  <p className="feature-description">
                    We've created the marketing campaign of the website. It was a very interesting collaboration.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#4CAF50' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Fully Coded in HTML5</h3>
                  <p className="feature-description">
                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon" style={{ color: '#00BCD4' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Built Audience</h3>
                  <p className="feature-description">
                    There is also a Fully Customizable CMS Admin Dashboard for this product.
                  </p>
                </div>
              </div>
            </div>
            <div className="alternating-image">
              <img src="src/assets/productE.jpg" alt="Another One" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};




const PricingShopCart = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="pricing-container">
      {/* Section 1 - Icon Based Pricing */}
      <section className="pricing-section section-1">
        <div className="pricing-header">
          <h2 className="pricing-title">Pick the best plan for you</h2>
          <p className="pricing-subtitle">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <p className="plan-label">FREELANCER</p>
            <div className="plan-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 640 640">
                <path fill="#fff" d="M144 336c0-47.3-34.2-86.6-79.2-94.5C72 177.6 126.2 128 192 128h256c65.8 0 120 49.6 127.2 113.5c-45 8-79.2 47.2-79.2 94.5v32H144zM0 448V336c0-26.5 21.5-48 48-48s48 21.5 48 48v80h448v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v112c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64" />
              </svg>
            </div>
            <h3 className="plan-price">FREE</h3>
            <p className="plan-description">
              This is good if your company size is between 2 and 10 Persons.
            </p>
            <button className="plan-button">CHOOSE PLAN</button>
          </div>

          <div className="pricing-card featured">
            <p className="plan-label">SMALL COMPANY</p>
            <div className="plan-icon featured-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#E91E63">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <h3 className="plan-price">$29</h3>
            <p className="plan-description">
              This is good if your company size is between 2 and 10 Persons.
            </p>
            <button className="plan-button featured-button">CHOOSE PLAN</button>
          </div>

          <div className="pricing-card">
            <p className="plan-label">MEDIUM COMPANY</p>
            <div className="plan-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
              </svg>
            </div>
            <h3 className="plan-price">$69</h3>
            <p className="plan-description">
              This is good if your company size is between 11 and 99 Persons.
            </p>
            <button className="plan-button">CHOOSE PLAN</button>
          </div>

          <div className="pricing-card">
            <p className="plan-label">ENTERPRISE</p>
            <div className="plan-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z" />
              </svg>
            </div>
            <h3 className="plan-price">$159</h3>
            <p className="plan-description">
              This is good if your company size is 99+ persons.
            </p>
            <button className="plan-button">CHOOSE PLAN</button>
          </div>
        </div>
      </section>

      {/* Section 2 - Feature List Pricing */}
      <section className="pricing-section section-2">
        <div className="pricing-header">
          <h2 className="pricing-title">Pick the best plan for you</h2>

          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              MONTHLY
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              YEARLY
            </button>
          </div>
        </div>

        <div className="pricing-cards-list">
          <div className="pricing-card-list">
            <p className="plan-label-list">FREE</p>
            <div className="plan-price-box">
              <span className="currency">$</span>
              <span className="price-amount">0</span>
              <span className="price-period">/mo</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <span className="feature-value">1</span>
                <span className="feature-text">Project</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">5</span>
                <span className="feature-text">Team Members</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">55</span>
                <span className="feature-text">Personal Contacts</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">5.000</span>
                <span className="feature-text">Messages</span>
              </div>
            </div>
            <button className="plan-button-list">GET STARTED</button>
          </div>

          <div className="pricing-card-list featured-list">
            <p className="plan-label-list">PREMIUM</p>
            <div className="plan-price-box">
              <span className="currency">$</span>
              <span className="price-amount">89</span>
              <span className="price-period">/mo</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <span className="feature-value">500</span>
                <span className="feature-text">Projects</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">50</span>
                <span className="feature-text">Team Members</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">125</span>
                <span className="feature-text">Personal Contacts</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">15.000</span>
                <span className="feature-text">Messages</span>
              </div>
            </div>
            <button className="plan-button-list featured-button-list">GET STARTED</button>
          </div>

          <div className="pricing-card-list">
            <p className="plan-label-list">PLATINUM</p>
            <div className="plan-price-box">
              <span className="currency">$</span>
              <span className="price-amount">199</span>
              <span className="price-period">/mo</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">
                <span className="feature-value">1000</span>
                <span className="feature-text">Projects</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">100</span>
                <span className="feature-text">Team Members</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">550</span>
                <span className="feature-text">Personal Contacts</span>
              </div>
              <div className="feature-item">
                <span className="feature-value">50.000</span>
                <span className="feature-text">Messages</span>
              </div>
            </div>
            <button className="plan-button-list">GET STARTED</button>
          </div>
        </div>
      </section>
    </div>
  );
};





const PricingShopCartV2 = () => {
  return (
    <div className="pricing-container-v2">
      {/* Section 1 - Two Card Pricing with City Background */}
      <section className="pricing-section-v2 section-city">
        <div className="pricing-header-v2">
          <h2 className="pricing-title-v2">Pick the best plan for you</h2>
          <p className="pricing-subtitle-v2">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>

        <div className="pricing-cards-two">
          <div className="pricing-card-v2 white-card">
            <p className="plan-label-v2">FREE</p>
            <div className="plan-price-v2">
              <span className="currency-v2">$</span>
              <span className="price-amount-v2">0</span>
              <span className="price-period-v2">/mo</span>
            </div>
            <div className="plan-features-v2">
              <div className="feature-item-v2">
                <span className="feature-value-v2">1</span>
                <span className="feature-text-v2">Project</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">5</span>
                <span className="feature-text-v2">Team Members</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">55</span>
                <span className="feature-text-v2">Personal Contacts</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">5.000</span>
                <span className="feature-text-v2">Messages</span>
              </div>
            </div>
            <button className="plan-button-v2 purple-button">GET STARTED</button>
          </div>

          <div className="pricing-card-v2 purple-card">
            <p className="plan-label-v2">PREMIUM</p>
            <div className="plan-price-v2">
              <span className="currency-v2">$</span>
              <span className="price-amount-v2">199</span>
              <span className="price-period-v2">/mo</span>
            </div>
            <div className="plan-features-v2">
              <div className="feature-item-v2">
                <span className="feature-value-v2">1000</span>
                <span className="feature-text-v2">Projects</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">100</span>
                <span className="feature-text-v2">Team Members</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">550</span>
                <span className="feature-text-v2">Personal Contacts</span>
              </div>
              <div className="feature-item-v2">
                <span className="feature-value-v2">50.000</span>
                <span className="feature-text-v2">Messages</span>
              </div>
            </div>
            <button className="plan-button-v2 white-button">GET STARTED</button>
          </div>
        </div>
      </section>

      {/* Section 2 - Four Card Feature Comparison */}
      <section className="pricing-section-v2 section-comparison">
        <div className="pricing-header-v2">
          <h2 className="pricing-title-v2">Pick the best plan for you</h2>
          <p className="pricing-subtitle-v2">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>

        <div className="pricing-cards-four">
          <div className="pricing-card-comp">
            <p className="plan-label-comp">STARTUP</p>
            <div className="plan-price-comp">
              <span className="currency-comp">$</span>
              <span className="price-amount-comp">0</span>
            </div>
            <div className="feature-list">
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Sharing Tools</span>
              </div>
              <div className="feature-row excluded">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#F44336">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Design Tools</span>
              </div>
              <div className="feature-row excluded">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#F44336">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Private Messages</span>
              </div>
              <div className="feature-row excluded">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#F44336">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Personal Brand</span>
              </div>
            </div>
            <button className="plan-button-comp red-button">DOWNGRADE PLAN</button>
          </div>

          <div className="pricing-card-comp featured-comp">
            <p className="plan-label-comp">SMALL COMPANY</p>
            <div className="plan-price-comp">
              <span className="currency-comp">$</span>
              <span className="price-amount-comp">89</span>
            </div>
            <div className="feature-list">
              <div className="feature-row included white-text">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Sharing Tools</span>
              </div>
              <div className="feature-row included white-text">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Design Tools</span>
              </div>
              <div className="feature-row excluded white-text">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Private Messages</span>
              </div>
              <div className="feature-row excluded white-text">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Personal Brand</span>
              </div>
            </div>
            <button className="plan-button-comp white-outline-button">CURRENT PLAN</button>
          </div>

          <div className="pricing-card-comp">
            <p className="plan-label-comp">LARGE COMPANY</p>
            <div className="plan-price-comp">
              <span className="currency-comp">$</span>
              <span className="price-amount-comp">189</span>
            </div>
            <div className="feature-list">
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Sharing Tools</span>
              </div>
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Design Tools</span>
              </div>
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Private Messages</span>
              </div>
              <div className="feature-row excluded">
                <svg className="close-icon" width="16" height="16" viewBox="0 0 24 24" fill="#F44336">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <span className="feature-name">Personal Brand</span>
              </div>
            </div>
            <button className="plan-button-comp green-button">UPGRADE PLAN</button>
          </div>

          <div className="pricing-card-comp">
            <p className="plan-label-comp">LARGE COMPANY</p>
            <div className="plan-price-comp">
              <span className="currency-comp">$</span>
              <span className="price-amount-comp">189</span>
            </div>
            <div className="feature-list">
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Sharing Tools</span>
              </div>
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Design Tools</span>
              </div>
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Private Messages</span>
              </div>
              <div className="feature-row included">
                <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="feature-name">Personal Brand</span>
              </div>
            </div>
            <button className="plan-button-comp green-button">UPGRADE PLAN</button>
          </div>
        </div>
      </section>
    </div>
  );
};




const PricingTestimonials = () => {
  return (
    <>
      {/* Pricing Section */}
      <section className="plan-pricing-section">
        <div className="plan-pricing-container">
          <h2 className="plan-pricing-title">Choose a plan for<br />your next project</h2>
          <p className="plan-pricing-description">
            You have Free Unlimited Updates and Premium Support on each package. You also have 30 days to request a refund if
            You're not happy with your purchase.
          </p>

          {/* Toggle Buttons */}
          <div className="plan-pricing-toggle">
            <button className="plan-toggle-btn active">PERSONAL</button>
            <button className="plan-toggle-btn">COMMERCIAL</button>
          </div>

          {/* Pricing Cards */}
          <div className="plan-pricing-grid">
            {/* Free Package */}
            <div className="plan-package-card">
              <p className="plan-package-label">HTML PACKAGE</p>
              <div className="plan-package-price">
                <span className="plan-price-currency">$</span>
                <span className="plan-price-amount">0</span>
              </div>
              <ul className="plan-package-features">
                <li><strong>1</strong> Developer</li>
                <li><strong>99+</strong> Components</li>
                <li><strong>HTML</strong> Elements</li>
                <li><strong>14</strong> Page Examples</li>
              </ul>
              <button className="plan-package-button free">FREE DOWNLOAD</button>
            </div>

            {/* Premium Package */}
            <div className="plan-package-card">
              <p className="plan-package-label">HTML & SKETCH PACKAGE</p>
              <div className="plan-package-price">
                <span className="plan-price-currency">$</span>
                <span className="plan-price-amount">79</span>
              </div>
              <ul className="plan-package-features">
                <li><strong>1</strong> Developer</li>
                <li><strong>199+</strong> Components</li>
                <li><strong>HTML & Sketch</strong> Elements</li>
                <li><strong>22</strong> Page Examples</li>
              </ul>
              <button className="plan-package-button premium">BUY NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 1 - Our Clients Love Us */}
      <section className="testimonials-section testimonials-bg">
        <div className="testimonials-overlay">
          <div className="testimonials-container">
            <h2 className="testimonials-title">Our Clients Love Us</h2>
            <p className="testimonials-description">
              Check out what our clients say! They can tell you more about their experience with our products.
              They certainly helped us a lot!
            </p>

            <div className="testimonials-cards">
              {/* Testimonial 1 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Your products, all the kits that I have downloaded from your site and worked with are sooo cool!
                  I love the color mixtures, cards... everything. Keep up the great work!
                </p>
                <div className="testimonial-author">
                  <div>
                    <h4 className="testimonial-name">Alec Thompson</h4>
                    <p className="testimonial-role">@ALECTHOMPSON</p>
                  </div>
                  <img src="src/assets/manB.jpg" alt="Alec Thompson" className="testimonial-avatar" />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love
                  the elements from your site. Keep up the great work!
                </p>
                <div className="testimonial-author">
                  <div>
                    <h4 className="testimonial-name">Gina Andrew</h4>
                    <p className="testimonial-role">@GINAANDREW</p>
                  </div>
                  <img src="src/assets/sway.jpg" alt="George West" className="testimonial-avatar" />

                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Your products, all the kits that I have downloaded from your site and worked with are sooo cool!
                  I love the color mixtures, cards... everything. Keep up the great work!
                </p>
                <div className="testimonial-author">

                  <div>
                    <h4 className="testimonial-name">George West</h4>
                    <p className="testimonial-role">@GEORGEWEST</p>
                  </div>
                  <img src="src/assets/guyB.jpg" alt="Gina Andrew" className="testimonial-avatar" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="testimonials-section testimonialsbg">
        {/* Carousel Testimonial */}
        <div className="testimonial-carousel">
          <button className="carousel-arrow left">‹</button>
          <div className="carousel-content">
            <img src="src/assets/kend.jpg" alt="Kanye West" className="carousel-avatar" />
            <p className="carousel-text">
              "I used ant-icons.club on the old guard on behalf of the team. I picked up all of the icons of the
              team the icons that I would put a million shows on the old guard on behalf of the...
              Thank you for setting me up on the movement. One of my favorite projects!"
            </p>
            <h4 className="carousel-name">Kanye West Thompson</h4>
            <p className="carousel-company">Founder @ MICROSOFT</p>
            <div className="carousel-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
          <button className="carousel-arrow right">›</button>
        </div>
      </section>


      {/* Testimonials Section 2 - What Clients Say */}
      <section className="testimonials-section testimonials-simple">
        <div className="testimonials-container">
          <h2 className="testimonials-title-dark">What Clients Say</h2>

          <div className="testimonials-grid-simple">
            {/* Client 1 */}
            <div className="testimonial-simple">
              <img src="src/assets/manB.jpg" alt="Alec Thompson" className="testimonial-avatar" />
              <h4>Mike Andrew</h4>
              <p>CEO @ MARKETING DIGITAL LTD</p>
              <p className="testimonial-text">
                "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.
              </p>
            </div>

            {/* Client 2 */}
            <div className="testimonial-simple">
              <img src="src/assets/sway.jpg" alt="Gina Andrew" className="testimonial-avatar" />
              <h4>Tina Thompson</h4>
              <p>CEO @ MARKETING DIGITAL LTD</p>
              <p className="testimonial-text">
                "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.
              </p>
            </div>


            {/* Client 3 */}
            <div className="testimonial-simple">
              <img src="src/assets/farm-gul.jpg" alt="George West" className="testimonial-avatar" />
              <h4>Gina West</h4>
              <p>CFO @ APPLE INC.</p>
              <p className="testimonial-text">
                "I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... Royère doesn't make a Polar bear bed but the Polar bear. This is a very nice testimonial about this company.                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



function Sections() {
  return (
    <div>
      <HeroSection />
      <CTASection />
      <HeroSlider />
      <FeaturesSection />
      <InfoFeaturesSection />
      <ProductInfoSection />
      <CenteredPhoneSection />
      <DarkFeaturesGrid />
      <BlogPostsSection />
      <BlogPostsGrid />
      <BlogPostsList />
      <BlogPostsCentered />
      <TeamSections />
      <DarkTeamSections />
      <ProductsSections />
      <ProductsSection />
      <PricingShopCart />
      <PricingShopCartV2 />
      <PricingTestimonials />
    </div>
  );
}

export default Sections;
