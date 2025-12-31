import React from 'react';
import './Landing.css';
import cardProfile1Image from '../assets/card-profile1-square.78a01818.jpg';
import cardProfile6Image from '../assets/card-profile6-square.9f286150.jpg';
import cardProfile4Image from '../assets/card-profile4-square.368a64e8.jpg';
import cardProfile2Image from '../assets/card-profile2-square.2868d711.jpg';
import bg8Image from '../assets/bg8.ac3c23fa.jpg';
const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section111" style={{ backgroundImage: `url(${bg8Image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="hero-content111">
          <h1 className="hero-title">Your Story Starts With Us.</h1>
          <p className="hero-description">
            Every landing page needs a small description after the big bold title,
            that's why we added this text here. Add here all the information that
            can make you or your product create the first impression.
          </p>

          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"><button className="watch-video-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24">
            <path fill="#fff" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" />
          </svg> WATCH VIDEO </button></a>

        </div>
      </section>

      <div className="main-content-container">
        <section className="product-section">
          <h2 className="section-title">Let's talk product</h2>
          <p className="section-description">
            This is the paragraph where you can write more details about your product.
            Keep you user engaged by providing meaningful information. Remember that by
            this time, the user is curious, otherwise he wouldn't scroll to get here.
            Add a button if you want the user to see more.
          </p>

          <div className="features-grid111">
            <div className="feature-item111">
              <div className="feature-icon111 cyan-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="#55adc1" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
                </svg>
              </div>
              <h3 className="feature-title">Free Chat</h3>
              <p className="feature-description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature will be enough.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-item111">
              <div className="feature-icon111 green-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="#53af50" d="m11.19 1.36l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0m-1.9 14.93L6.7 13.7a.996.996 0 1 1 1.41-1.41L10 14.17l5.88-5.88a.996.996 0 1 1 1.41 1.41l-6.59 6.59a.996.996 0 0 1-1.41 0" />
                </svg>
              </div>
              <h3 className="feature-title">Verified Users</h3>
              <p className="feature-description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature will be enough.
              </p>
            </div>

            <div className="feature-item111">
              <div className="feature-icon111 red-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                  <path fill="#d26a60" d="M12.025 4.475q2.65 0 5 1.138T20.95 8.9q.175.225.113.4t-.213.3t-.35.113t-.35-.213q-1.375-1.95-3.537-2.987t-4.588-1.038t-4.55 1.038T3.95 9.5q-.15.225-.35.25t-.35-.1q-.175-.125-.213-.312t.113-.388q1.55-2.125 3.888-3.3t4.987-1.175m0 2.35q3.375 0 5.8 2.25t2.425 5.575q0 1.25-.887 2.088t-2.163.837t-2.187-.837t-.913-2.088q0-.825-.612-1.388t-1.463-.562t-1.463.563t-.612 1.387q0 2.425 1.438 4.05t3.712 2.275q.225.075.3.25t.025.375q-.05.175-.2.3t-.375.075q-2.6-.65-4.25-2.588T8.95 14.65q0-1.25.9-2.1t2.175-.85t2.175.85t.9 2.1q0 .825.625 1.388t1.475.562t1.45-.562t.6-1.388q0-2.9-2.125-4.875T12.05 7.8T6.975 9.775t-2.125 4.85q0 .6.113 1.5t.537 2.1q.075.225-.012.4t-.288.25t-.387-.012t-.263-.288q-.375-.975-.537-1.937T3.85 14.65q0-3.325 2.413-5.575t5.762-2.25m0-4.8q1.6 0 3.125.387t2.95 1.113q.225.125.263.3t-.038.35t-.25.275t-.425-.025q-1.325-.675-2.738-1.037t-2.887-.363q-1.45 0-2.85.338T6.5 4.425q-.2.125-.4.063t-.3-.263t-.05-.362t.25-.288q1.4-.75 2.925-1.15t3.1-.4m0 7.225q2.325 0 4 1.563T17.7 14.65q0 .225-.137.363t-.363.137q-.2 0-.35-.137t-.15-.363q0-1.875-1.388-3.137t-3.287-1.263t-3.262 1.263T7.4 14.65q0 2.025.7 3.438t2.05 2.837q.15.15.15.35t-.15.35t-.35.15t-.35-.15q-1.475-1.55-2.262-3.162T6.4 14.65q0-2.275 1.65-3.838t3.975-1.562M12 14.15q.225 0 .363.15t.137.35q0 1.875 1.35 3.075t3.15 1.2q.15 0 .425-.025t.575-.075q.225-.05.388.063t.212.337q.05.2-.075.35t-.325.2q-.45.125-.787.138t-.413.012q-2.225 0-3.863-1.5T11.5 14.65q0-.2.138-.35t.362-.15" />
                </svg>
              </div>
              <h3 className="feature-title">Fingerprint</h3>
              <p className="feature-description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature will be enough.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <h2 className="section-title111">Here is our team</h2>
        <section className="team-section111">

          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-card111">
              <div className="team-image111">
                <img src={cardProfile1Image} alt="Alec Thompson" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Alec Thompson</h3>
                <p className="team-role">FOUNDER</p>
                <p className="team-bio">
                  Don't be scared of the truth because we need to restart
                  the human foundation in truth...
                </p>
                <div className="team-socials">
                  <a href="#" className="social-link twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="209" viewBox="0 0 256 209">
                      <path fill="#55acee" d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" />
                    </svg>
                  </a>
                  <a href="#" className="social-link facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="128" viewBox="0 0 128 128">
                      <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
                      <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link google"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#d26a60" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187" />
                  </svg></a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card111">
              <div className="team-image111">
                <img src={cardProfile6Image} alt="Kendall Andrew" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Kendall Andrew</h3>
                <p className="team-role">GRAPHIC DESIGNER</p>
                <p className="team-bio">
                  Don't be scared of the truth because we need to restart
                  the human foundation in truth...
                </p>
                <div className="team-socials">
                  <a href="#" className="social-link linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="4" cy="4" r="2" fill="#3a76b4" fill-opacity="0">
                        <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
                      </circle>
                      <g fill="none" stroke="#3a76b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0" />
                        </path>
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0" />
                        </path>
                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0" />
                        </path>
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="social-link facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="128" viewBox="0 0 128 128">
                      <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
                      <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link dribbble">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 48 48">
                      <g fill="none" stroke="#e85490" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                        <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24" />
                        <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
                        <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835" />
                        <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991" />
                        <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827" />
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="social-link google"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#d26a60" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187" />
                  </svg></a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card111">
              <div className="team-image111">
                <img src={cardProfile4Image} alt="Gina Andrew" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Gina Andrew</h3>
                <p className="team-role">WEB DESIGNER</p>
                <p className="team-bio">
                  I love you like Kanye loves Kanye. Don't be scared of the truth.
                </p>
                <div className="team-socials">
                  <a href="#" className="social-link youtube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="180" viewBox="0 0 256 180">
                      <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                      <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="209" viewBox="0 0 256 209">
                      <path fill="#55acee" d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" />
                    </svg>
                  </a>
                  <a href="#" className="social-link instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none">
                        <path stroke="#47759e" stroke-width="2" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" />
                        <circle cx="16.5" cy="7.5" r="1.5" fill="#47759e" />
                        <circle cx="12" cy="12" r="3" stroke="#47759e" stroke-width="2" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-card111">
              <div className="team-image111">
                <img src={cardProfile2Image} alt="George West" />
              </div>
              <div className="team-info">
                <h3 className="team-name">George West</h3>
                <p className="team-role">BACKEND HACKER</p>
                <p className="team-bio">
                  I love you like Kanye loves Kanye. Don't be scared of the truth.
                </p>
                <div className="team-socials">
                  <a href="#" className="social-link linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="4" cy="4" r="2" fill="#3a76b4" fill-opacity="0">
                        <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
                      </circle>
                      <g fill="none" stroke="#3a76b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0" />
                        </path>
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0" />
                        </path>
                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0" />
                        </path>
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="social-link facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="128" viewBox="0 0 128 128">
                      <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
                      <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link google"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#d26a60" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187" />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section111">
          <h2 className="section-title">Work with us</h2>
          <p className="section-description">
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further collaboration.
            We will responde get back to you in a couple of hours.
          </p>

          <form className="contact-form111">
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input111"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input111"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              rows="6"
            ></textarea>
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer111">
        <div className="footer-content111">
          <div className="footer-links111">
            <a href="#">CREATIVE TIM</a>
            <a href="#">ABOUT US</a>
            <a href="#">BLOG</a>
            <a href="#">LICENSES</a>
          </div>
          <div className="footer-copyright111">
            © 2025, made with ❤️ by <a href="#">Creative Tim</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;