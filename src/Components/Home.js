import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image2.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';


export default function Home() {
  return (
    <div className='home-container'>
       
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" style={{  color: 'black' , fontSize: '50px'}}>
          {/* Your Trusted Legal Partner, Just a Contact Away */}
          Providing reliable legal guidance to Sri Lankans worldwide
          </h1>
          <p className="primary-text" style={{   fontSize: '20px'}}>
          {/* Our expert legal team handles the prep work, so you can focus on making confident decisions */}
          Our expert legal team handles all the prep work, from document research to strategy, so you can focus on making informed decisions with confidence
          </p>
          <Link to="/contact" style={{ textDecoration: 'none'}}>
          <button className="secondary-button" >
            Contact Us <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section" style={{ transform: 'rotate(7deg)' }}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About/>
      <Contact/>
      <Service/>
    </div>
  )
}
