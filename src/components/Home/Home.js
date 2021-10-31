import React from 'react';
import MainOfferings from '../MainOfferings/MainOfferings';
import './Home.css';
const Home = () => {
    return (
        <div>
          
            {/* banner section */}
            <div>
                <img className='w-100 banner-img' src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            <MainOfferings></MainOfferings>

            {/* about us section */}
            <div className='about-us-section d-grid mx-auto my-5'>
                <div>
                    <h4 className='text-primary'>About Us</h4>
                    <h2>Explore All Corners of The World With Us</h2>
                    <p>Sundarban Travel Agency is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</p>
                    <button className='btn btn-primary'>Read more</button>
                </div>
                <div className='about-us-img-section d-grid'>
                    <div className='me-2'>
                        <img src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <img src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg" alt="" />
                    </div>
                    <div className='me-2'>
                        <img src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <img src="https://image.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* popular destination section */}
            <h2 className='text-center'>Popular Destination</h2>
            <p className='text-center'>We offer a lot of destinations around the globe. Check out below.</p>
            <div className='popular-destination-section d-grid mx-auto my-5'>
                <div className='popular-destination-card'>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg" alt="" />
                    <p className='popular-destination-text'>Italy</p>
                </div>
                <div className='popular-destination-card mt-3'>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/nyc-aerial-view-new-york-city-night_181624-45081.jpg" alt="" />
                    <p className='popular-destination-text'>America</p>
                </div>
                <div className='popular-destination-card'>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/big-ben-house-parliament-night-london-united-kingdom_268835-1396.jpg" alt="" />
                    <p className='popular-destination-text'>UK</p>
                </div>
                <div className='popular-destination-card'>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/famous-eiffel-tower-paris-with-gorgeous-colors_268835-830.jpg" alt="" />
                    <p className='popular-destination-text'>France</p>
                </div>
                <div className='popular-destination-card mt-3'>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/scenic-sunrise-ocean-istanbul-turkey_53876-14875.jpg" alt="" />
                    <p className='popular-destination-text '>Turkey</p>
                </div>
                <div className='popular-destination-card '>
                    <img className='popular-destination-img w-100' src="https://image.freepik.com/free-photo/modetn-city-luxury-center-dubai-united-arab-emirates_231208-7596.jpg" alt="" />
                    <p className='popular-destination-text '>UAE</p>
                </div>
            </div>
        </div>
    );
};

export default Home;