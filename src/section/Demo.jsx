import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo'>
            <div className='Demo-text'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                    <path fill="#777777" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
                <h1>Free Demo</h1>
                <h3>
                    Do you want to test and see the benefits of this kit before purchasing it?
                    You can give the demo version a try. It features enough basic components for
                    you to get a feel of the design and also test the quality of the code.
                    Get it free on GitHub!
                </h3>
                <button className='git-btn'>VIEW DEMO ON GITHUB</button>
            </div>
            <div>
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th>Free Demo</th>
                            <th>PRO Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="count">60</span> <span className="label">Components</span></td>
                            <td><span className="count">1000+</span> <span className="label">Components</span></td>
                        </tr>
                        <tr>
                            <td><span className="count">3</span> <span className="label">Example Pages</span></td>
                            <td><span className="count">12</span> <span className="label">Example Pages</span></td>
                        </tr>
                        <tr>
                            <td><span className="cross">✕</span> <span className="label">Unconventional Cards</span></td>
                            <td><span className="check">✓</span> <span className="label">Unconventional Cards</span></td>
                        </tr>
                        <tr>
                            <td><span className="cross">✕</span> <span className="label">Sections</span></td>
                            <td><span className="check">✓</span> <span className="label">Sections</span></td>
                        </tr>
                        <tr>
                            <td><span className="cross">✕</span> <span className="label">Photoshop for Prototype</span></td>
                            <td><span className="check">✓</span> <span className="label">Photoshop for Prototype</span></td>
                        </tr>
                        <tr>
                            <td><span className="cross">✕</span> <span className="label">Premium Support</span></td>
                            <td><span className="check">✓</span> <span className="label">Premium Support</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Demo