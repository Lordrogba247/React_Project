import React from 'react'
import './Section.css'
import Section2 from './Section2.jsx'
import Content from './Content.jsx'
import Ready from './Ready.jsx'
import Example from './Example.jsx'
import Demo from './Demo.jsx'
import Work from './Work.jsx'
import Trusted from './Trusted.jsx'
import Footer from '../footer/Footer.jsx'

const Section = () => {
  return (
    <>
      <div className='Main'>
        <h1>Material Kit React <sup>PRO</sup></h1>
        <h3>A Badass Material-UI Kit based on Material Design.</h3>
      </div>
      <div className="section">

        <p className='p'>
          Material Kit React PRO is a Material-UI Kit with a fresh, new design inspired by Google's Material Design. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.
        </p>
        <div className='Main-Section'>
          <div className='Section-1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path fill="#e74133" d="M7.25 2.043H2v5.25h5.25zm2 0v5.25h5.5v-5.25zm7.5 0v5.25H22v-5.25zM22 9.293h-5.25v5.5H22zm0 7.5h-5.25v5.25H22zm-7.25 5.25v-5.25h-5.5v5.25zm-7.5 0v-5.25H2v5.25zM2 14.793h5.25v-5.5H2zm7.25 0v-5.5h5.5v5.5z" />
              </svg>
            </div>
            <div className='section-title-1'>
              Huge Number of Components
            </div>
            <div className='section-text'>
              Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.
            </div>
          </div>

          <div className='Section-1'>
            <div>
              <svg focusable="false" width="50" height="50" viewBox="0 0 24 24" aria-hidden="true"><path fill="#9c27b0" d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></svg>
            </div>
            <div className='section-title-1'>
              Multi-Purpose Sections
            </div>
            <div className='section-text'>
              Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.
            </div>
          </div>

          <div className='Section-1'>
            <div>
              <svg focusable="false" width="50" height="50" viewBox="0 0 24 24" aria-hidden="true"><path fill="#53af50" d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></svg>
            </div>
            <div className='section-title-1'>
              Example Pages
            </div>
            <div className='section-text'>
              If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.
            </div>
          </div>
        </div>

        <div className='basic-componentss'>
          <div className='component-text1'>
            <h2>Basic Components</h2>
            <h5 className='h5'>THE CORE ELEMENTS OF YOUR WEBSITE</h5>
            <h5>We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other.
              All the Bootstrap components that you need in a development have been re-design with the new look.
              Besides the numerous basic elements, we have also created additional classes. All these items will help you
              take your project to the next level.</h5>
          </div>

          <div className='animation'>
            <img src='src/assets/laptop-basics.90d9570c.png' alt="Laptop" className='laptop' />
            <img src="src/assets/facebook.jpeg" alt="" className='i1' />
            <img src="src/assets/IMG-20251206-WA0045.jpg" alt="" className='i2' />
            <img src="src/assets/IMG-20251206-WA0048.jpg" alt="" className='i3' />
            <img src="src/assets/ipad-table.86938250.jpg" alt="" className='i4' />
            <img src="src/assets/IMG-20251206-WA0044.jpg" alt="" className='i5' />
            <img src="src/assets/social-row.b61dc2df.jpg" alt="" className='i6' />
          </div>
        </div>

        <Section2 />
        <Content />
        <Ready />
        <Example />
        <Demo />
        <Work />
        <Trusted />

      </div>
      <Footer />
    </>
  )
}

export default Section