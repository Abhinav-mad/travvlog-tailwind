import React from 'react'
import LazyLoad from 'react-lazyload';
import homeimg1 from '../assets/images/homeimg1.png'
import homeimg2 from '../assets/images/homeimg2.png'
import homeimg3 from '../assets/images/homeimg3.png'


function Home() {
  return (
    <>
      <section className="home-section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-8 md:mb-0">
          <button className="home-button">Explore the world!</button>
          <h1 className="home-title">
            Travel <span className="title-highlight">top destination </span>of the world
          </h1>
          <p className="home-text">
            We always make our customers happy by providing as many choices as possible
          </p>
          <div className="home-buttons">
            <button className="primary">Get Started</button>
            <button className="secondary">Watch Demo</button>
          </div>
        </div>
        <div className="flex-1 image-grid">
          <div className="col-span-2 image-container">
            <LazyLoad height={200} offset={100}>
            <img src={homeimg1} alt="Destination 1" className="image" />
            </LazyLoad>
            <div className="image-icon pink">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 8a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" />
              </svg>
            </div>
          </div>
          <div className="image-container">
            <LazyLoad height={200} offset={100}>
            <img src={homeimg2} alt="Destination 2" className="image" />
            </LazyLoad>
            <div className="image-icon yellow">
              
            </div>
          </div>
          <div className="image-container "  >
            <LazyLoad height={200} offset={100}>
            <img src={homeimg3} alt="Destination 3" className="image " />
            </LazyLoad>
            <div className="image-icon orange">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 8a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Home