import React from 'react';
import './Work.css';

const Work = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 512 512">
                <path fill="#ffffffff" d="M47.547 63.547v384.906a16 16 0 0 0 16 16h384.906a16 16 0 0 0 16-16V63.547a16 16 0 0 0-16-16H63.547a16 16 0 0 0-16 16m288.6 16h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Z" />
            </svg>,
            title: 'Material UI Grid',
            description: 'Enjoy the fluid grid system based on 12 columns. Material Kit PRO is built over Bootstrap and has all the benefits that the framework comes with.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 20 20">
                <path fill="#ffffffff" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v7a1.5 1.5 0 0 1-1.5 1.5H10v-1h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V6H3zM10 15h7.5a.5.5 0 0 0 0-1H10zm-5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM2 8.5A1.5 1.5 0 0 1 3.5 7h4A1.5 1.5 0 0 1 9 8.5v8A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5zM3.5 8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z" />
            </svg>,
            title: 'Fully Responsive',
            description: 'This Material UI kit is built mobile-first and looks amazing on any device. Regardless of the screen size, the website content will naturally fit the given resolution.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
                <path fill="#ffffffff" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" />
            </svg>,
            title: 'Save Time',
            description: "Using the Material Kit PRO will save you large amount of time. You don't have to worry about customising the basic Bootstrap design or generating new components."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
                <path fill="#ffffffff" d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4m-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399m8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4" />
            </svg>,
            title: 'Save Money',
            description: 'Creating your design from scratch with dedicated designers can be very expensive. Using a kit is the best option to start your development while bootstrapping your budget.'
        }
    ];

    return (
        <div className="features-section12">
            <div className="stars12"></div>
            <div className="features-container12">
                <h1 className="features-title121">Your work will get much easier</h1>
                <div className="features-grids12">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card12">
                            <div className="feature-icon12">{feature.icon}</div>
                            <h3 className="feature-title12">{feature.title}</h3>
                            <p className="feature-descriptions12">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;