import React from 'react'
import './Example.css'

const Example = () => {
    return (
        <div className='example'>
            <div>
                <h3 className='vs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis praesentium fugit voluptates inventore recusandae iure perspiciatis amet porro, aspernatur sed?</h3>
            </div>
            <div className='example-text'>
                <h1>Example Pages</h1>
                <h3>
                    The easiest way to get started is to use one of our pre-built example pages.
                    From landing pages to e-commerce or blog pages, you will be able jump start your development.
                    Show your clients a quick prototype and get inspired for your next project!
                </h3>
            </div>
            <div className='example-image'>
                <div className='example-image1'>
                    <h2>About Us</h2>
                    <img src="src/assets/a1.jpg" alt="" />
                    <h2>Landing Page</h2>
                    <img src="src/assets/a2.jpg" alt="" />
                    <h2>Contact Us</h2>
                    <img src="src/assets/a3.jpg" alt="" />
                </div>

                <div className='example-image1'>
                    <h2>Blog Post</h2>
                    <img src="src/assets/b1.jpg" alt="" />
                    <h2>Product Page</h2>
                    <img src="src/assets/b2.jpg" alt="" />
                    <h2>Login Page</h2>
                    <img src="src/assets/b3.jpg" alt="" />
                </div>

                <div className='example-image1'>
                    <h2>Pricing Page</h2>
                    <img src="src/assets/c1.jpg" alt="" />
                    <h2>Signup Page</h2>
                    <img src="src/assets/c2.jpg" alt="" />
                    <h2>Profile Page</h2>
                    <img src="src/assets/c3.jpg" alt="" />
                    <h2>Blog Post</h2>
                    <img src="src/assets/c4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Example