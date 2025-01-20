import React from 'react'
import { Link } from 'react-router-dom';


export default function Service() {
    const styles = {
        primaryHeading: {
            fontSize: "3rem",
            // color: "#2c3e50",
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
        },
        secondaryHeading: {
            fontSize: "1.8rem",
            color: "#7f8c8d",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: "40px",
        },
        sectionContainer: {
            padding: "20px 10%",
            marginBottom: "40px",
        },
        sectionTitle: {
            fontSize: "2rem",
            color: "#2c3e50",
            fontWeight: "600",
            marginBottom: "20px",
            textAlign: "center",
        },
        serviceItem: {
            backgroundColor: "#f8f9fa",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        },
        serviceTitle: {
            fontSize: "1.6rem",
            color: "#2c3e50",
            fontWeight: "600",
        },
        serviceDescription: {
            fontSize: "1.2rem",
            color: "#7f8c8d",
            marginTop: "10px",
        },
        stepItem: {
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
        },
        stepIcon: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#3498db",
            color: "white",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "15px",
        },
        stepText: {
            fontSize: "1.2rem",
            color: "#34495e",
        },
        ctaButton: {
            backgroundColor: "#3498db",
            color: "white",
            padding: "12px 25px",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "block",
            margin: "40px auto 0",
            textAlign: "center",
        },
       
    };

    // Detailed list of services provided by the legal firm
    const services = [
      
        {
            title: "Study the problem",
            description:
                "Once you contact us, our support team will study your case thoroughly to understand the details and provide suitable solutions to solve your problems.",
        },
        {
            title: "Referral to appropriate legal counsel",
            description:
                "After understanding your legal needs, we will connect you with the best-suited legal counsel from our team to ensure you receive the most effective advice and representation.",
        },
        {
            title: "Giving necessary advice to the client",
            description:
                "Then our legal counsel will provide the best advice and guidance tailored to your needs, ensuring a smooth resolution for your problem.",
        },
      
    ];

    
    const steps = [
        { icon: "1", text: "Start by submitting your legal query through our contact support, providing details of your requirements." },
        { icon: "2", text: "We analyze your case and carefully match you with the most suitable lawyer based on expertise and specialization." },
        { icon: "3", text: "Receive personalized legal advice and actionable solutions tailored to your specific needs from your assigned lawyer." },
    ];

    return (
        <>
      
           
            <header>
                <h1 style={styles.primaryHeading}>Our Services</h1>
                {/* <h2 style={styles.secondaryHeading}>
                    Comprehensive Legal Advice from Seasoned Attorneys You Can Trust
                </h2> */}
            </header>

            {/* Section displaying available services */}
            <div style={styles.sectionContainer}>
                {/* <h3 style={styles.sectionTitle}>Our Services</h3> */}
                {services.map((service, index) => (
                    <div key={index} style={styles.serviceItem}>
                        <h4 style={styles.serviceTitle}>{service.title}</h4>
                        <p style={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Section explaining the process of obtaining services */}
            <div style={styles.sectionContainer}>
                <h3 style={styles.sectionTitle}>How It Works</h3>
                {steps.map((step, index) => (
                    <div key={index} style={styles.stepItem}>
                        <div style={styles.stepIcon}>{step.icon}</div>
                        <p style={styles.stepText}>{step.text}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action for contacting the firm */}
            <div style={styles.sectionContainer}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                <button style={styles.ctaButton}>Contact Us Now</button>
           </Link>
            </div>

          
       
        </>
    );
    
    
}
