import React from 'react'
import AboutBackgroundImage from "../Assets/about-background-image.png";


export default function About() {
    return (
        <div>
       
        <div className="about-section-container">
          
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
          </div>
          <div className="about-section-text-container" >
            
            <h1 className="primary-heading" style={{  color: 'black' }}>
            {/* Law is the Foundation of a Just Society */}
            Our Mission
            </h1>
            <p className="primary-text" style={{   fontSize: '20px' , color: 'black'}}>
            At <strong style={{   fontSize: '20px' , color: 'black'}}>My Lawyer (LK) Limited</strong>, we are committed to supporting Sri Lankan expatriates worldwide by providing a structured platform to address issues and questions that may have a legal basis.<strong style={{   fontSize: '20px' , color: 'black'}}>Established and operating from the United Kingdom</strong> , we ensure clear, accessible, and reliable guidance tailored to the unique needs of individuals and businesses.

            </p>
            <p className="primary-text" style={{   fontSize: '20px', color: 'black' }}>
            With a team of qualified and experienced professionals, we strive to simplify complex legal matters, offering personalized insights that inspire trust, security, and confidence. Our goal is to bridge the gap between legal frameworks and everyday concerns, fostering clarity and peace of mind in every interaction.

            </p>
            <p className="primary-text" style={{   fontSize: '20px', color: 'black' }}>
            Whether assisting with personal or professional matters, we remain dedicated to upholding integrity, professionalism, and transparency. Through our structured approach, we empower expatriates to make well-informed decisions while ensuring seamless and efficient access to legal guidance; anytime, anywhere.
            </p>

          </div>
        </div>
        </div>
      );
}
