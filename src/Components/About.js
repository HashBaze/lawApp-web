import React from 'react'
import AboutBackgroundImage from "../Assets/about-background-image.png";


export default function About() {
    return (
        <div>
       
        <div className="about-section-container">
          
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
          </div>
          <div className="about-section-text-container">
            
            <h1 className="primary-heading" style={{  color: 'black'}}>
            {/* Law is the Foundation of a Just Society */}
            Our Mission
            </h1>
            <p className="primary-text" style={{   fontSize: '20px'}}>
            At MyLawyer, our mission is to provide accessible, expert legal advice to individuals and businesses alike. As a team of dedicated legal professionals, we are committed to simplifying the legal process and offering guidance that empowers our clients to make informed decisions. We believe that everyone deserves clear, practical legal support that fosters trust, security, and confidence.
            {/* At MyLawyer, we are committed to making legal education accessible and relevant to all. Our courses are designed to help individuals understand the law and its application in real-life situations, whether you're pursuing a legal career or seeking to expand your knowledge. */}
            </p>
            <p className="primary-text" style={{   fontSize: '20px' }}>
            We aim to bridge the gap between complex legal matters and everyday concerns by delivering tailored solutions that address your unique needs. Whether you’re navigating personal legal challenges or require assistance with business-related issues, we are here to offer advice you can rely on.
            {/* With expert instructors and practical learning resources, we aim to empower you with the tools needed to navigate the legal system and contribute to a more informed, just society. */}
            </p>
            {/* <p className="primary-text" style={{  color: 'black' , fontSize: '20px'}}>
            At MyLawyer, we prioritize building lasting relationships based on integrity, transparency, and understanding. Our goal is to be more than just your legal advisors—we want to be your trusted partners, helping you resolve matters with clarity and confidence. Through our platform, we strive to create a more informed, just society, one client at a time.
            </p> */}

          </div>
        </div>
        </div>
      );
}
