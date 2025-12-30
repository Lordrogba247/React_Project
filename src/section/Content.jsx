import React, { useEffect, useRef, useState } from 'react'
import './Content.css'
import presentationIpadImage from '../assets/presentation-ipad.0bd584d0.jpg';
import shoppingCartImage from '../assets/shopping_cart.jpg';
import ipadCommentsImage from '../assets/ipad-comments.3ce86419.jpg';

const Content = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div className='content' ref={contentRef}>
            <div className='content-text'>
                <h2>Content Areas</h2>
                <h4>FOR AREAS THAT NEED MORE SPACE</h4>
                <h3>
                    If you need elements such as tables, comments, description areas,
                    tabs and many others, we've got you covered. We took into consideration
                    multiple use cases and came up with some specific elements that you will love to use.
                    They're beautiful and easy to use for the end user navigating your website.
                </h3>
            </div>
            <div className='content-image'>
                <img src={presentationIpadImage} alt="" className='p1' />
                <img
                    src={shoppingCartImage}
                    alt=""
                    className={`p2 ${isVisible ? 'animate' : ''}`}
                />
                <img
                    src={ipadCommentsImage}
                    alt=""
                    className={`p3 ${isVisible ? 'animate' : ''}`}
                />
            </div>
        </div>
    )
}

export default Content