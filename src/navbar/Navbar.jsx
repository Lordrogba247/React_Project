import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={`nav-container ${isSticky ? 'sticky' : ''}`}>
      <div className="left-title">Material Kit PRO React</div>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        <span className={isMobileMenuOpen ? 'active' : ''}></span>
        <span className={isMobileMenuOpen ? 'active' : ''}></span>
        <span className={isMobileMenuOpen ? 'active' : ''}></span>
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li className="nav-item">
          <button onClick={() => toggleDropdown("components")} className="nav-btn">
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#ffffffff" d="M7.25 2.043H2v5.25h5.25zm2 0v5.25h5.5v-5.25zm7.5 0v5.25H22v-5.25zM22 9.293h-5.25v5.5H22zm0 7.5h-5.25v5.25H22zm-7.25 5.25v-5.25h-5.5v5.25zm-7.5 0v-5.25H2v5.25zM2 14.793h5.25v-5.5H2zm7.25 0v-5.5h5.5v5.5z" />
            </svg></span> COMPONENTS ▾
          </button>

          {openDropdown === "components" && (
            <div className="dropdown">
              <Link to="/" onClick={closeMobileMenu}> <svg focusable="false" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path fill="#a7a7a7ff" d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></svg> Presentation Page</Link>
            </div>
          )}
        </li>

        <li className="nav-item">
          <button onClick={() => toggleDropdown("sections")} className="nav-btn">
            <svg focusable="false" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffffff" d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></svg> SECTIONS ▾
          </button>

          {openDropdown === "sections" && (
            <div className="dropdown">
              <Link to="/sections" onClick={closeMobileMenu}><svg focusable="false" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path fill="#a7a7a7ff" d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg> Headers</Link>
              <Link to="/#features" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" />
              </svg> Features</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="M7 9V7h14v2zm0 4v-2h14v2zm0 4v-2h14v2zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17" />
              </svg> Blogs</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5" />
              </svg> Teams</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512">
                <path fill="#999999" d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0m0 64a32 32 0 1 1 0 64a32 32 0 1 1 0-64M72 272a24 24 0 1 1 48 0a24 24 0 1 1-48 0m104-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16M72 368a24 24 0 1 1 48 0a24 24 0 1 1-48 0m88 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16" />
              </svg> Projects</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                <path fill="#999999" d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652s-.564-1.397-1.5-1.652" />
                <path fill="#999999" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75" clipRule="evenodd" />
              </svg> Pricing</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
              </svg> Testimonials</Link>
              <Link to="/sections" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
              </svg> Contact</Link>
            </div>
          )}
        </li>

        <li className="nav-item">
          <button onClick={() => toggleDropdown("examples")} className="nav-btn" style={{ alignContent: "center" }}>
            <svg focusable="false" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffffff" d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></svg> EXAMPLES ▾
          </button>

          {openDropdown === "examples" && (
            <div className="dropdown">
              <Link to="/blogpage" onClick={closeMobileMenu}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#999999" d="M21 2h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h11v-9H2zM2 3v8h12V2H3c-.6 0-1 .4-1 1" />
              </svg> Blog Posts</Link>
              <Link to="/landing" onClick={closeMobileMenu}><svg focusable="false" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path fill="#999999" d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></svg> Landing Page</Link>
            </div>
          )}
        </li>

        <li>
          <button className="buy-btn" onClick={closeMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill="#999999" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
            </svg> BUY NOW
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;