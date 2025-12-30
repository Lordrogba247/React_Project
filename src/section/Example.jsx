import React from 'react'
import './Example.css'
import imageA1 from '../assets/a1.jpg';
import imageA2 from '../assets/a2.jpg';
import imageA3 from '../assets/a3.jpg';
import imageB1 from '../assets/b1.jpg';
import imageB2 from '../assets/b2.jpg';
import imageB3 from '../assets/b3.jpg';
import imageC1 from '../assets/c1.jpg';
import imageC2 from '../assets/c2.jpg';
import imageC3 from '../assets/c3.jpg';
import imageC4 from '../assets/c4.jpg';

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
                    <img src={imageA1} alt="" />
                    <h2>Landing Page</h2>
                    <img src={imageA2} alt="" />
                    <h2>Contact Us</h2>
                    <img src={imageA3} alt="" />
                </div>

                <div className='example-image1'>
                    <h2>Blog Post</h2>
                    <img src={imageB1} alt="" />
                    <h2>Product Page</h2>
                    <img src={imageB2} alt="" />
                    <h2>Login Page</h2>
                    <img src={imageB3} alt="" />
                </div>

                <div className='example-image1'>
                    <h2>Pricing Page</h2>
                    <img src={imageC1} alt="" />
                    <h2>Signup Page</h2>
                    <img src={imageC2} alt="" />
                    <h2>Profile Page</h2>
                    <img src={imageC3} alt="" />
                    <h2>Blog Post</h2>
                    <img src={imageC4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Example