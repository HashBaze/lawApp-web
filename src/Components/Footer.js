import React from 'react'
import Logo from "../Assets/Logo.png";
import { Link } from 'react-router';

export default function Footer() {
    const styles = {
        footer: {
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#2c3e50",
            color: "white",
            marginTop: "-80px",
           
        },
    }
    return (
        <span>
        <div className="footer-wrapper">
          <div className="footer-section-one">
            <div className="footer-logo-container">
                 <Link to="/">
              <img src={Logo} alt="" />
              </Link>
            </div>
            
          </div>
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <span>
              <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                About Us
                </Link>
                </span>
              <span>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }} >
                Contact Us
                </Link>
                </span>
            
            </div>
            <div className="footer-section-columns">
              <span style={{ textDecoration: 'none', color: 'black' }} >+94773255161</span>
              <span style={{ textDecoration: 'none', color: 'black' }} >info@mylawyerlk.com</span>
             
            </div>
            <div className="footer-section-columns">
              <span>
              <Link to="/service" style={{ textDecoration: 'none', color: 'black' , marginLeft: '70px' }}>
                Service
                </Link>
                </span>

                
              <span>
                <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'black' , marginLeft: '70px' }}>
                Privacy Policy
                </Link>
                </span>
            </div>
            
          </div>
          
          
        </div>
        <footer style={styles.footer}>
                <p>© 2025 MyLawyer | Contact -  info@mylawyerlk.com</p>
            </footer>
        </span>
      );
}
