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
            title: "Family Law",
            description:
                "We provide expert legal advice on matters related to family law, including divorce proceedings, child custody disputes, alimony arrangements, and property settlements. Our experienced attorneys are committed to offering compassionate and effective support to resolve your family issues.",
        },
        {
            title: "Criminal Law",
            description:
                "Our skilled criminal defense lawyers assist clients in navigating complex criminal charges. From strategic advice to strong courtroom representation, we ensure your legal rights are protected and defended effectively.",
        },
        {
            title: "Corporate Law",
            description:
                "We help businesses operate smoothly by providing legal support in contracts, mergers and acquisitions, intellectual property rights, and regulatory compliance. Our services ensure your corporate interests are safeguarded at all times.",
        },
        {
            title: "Immigration Law",
            description:
                "Whether you're applying for visas, seeking residency, or applying for citizenship, we simplify the immigration process with detailed guidance and ensure all requirements are met seamlessly.",
        },
        {
            title: "Employment Law",
            description:
                "We advocate for fairness in the workplace by handling disputes, discrimination cases, and contract negotiations. Our legal team ensures your workplace rights are protected and upheld.",
        },
    ];

    // Step-by-step process to access legal services provided by the firm
    const steps = [
        { icon: "1", text: "Start by submitting your legal query through our online form, detailing your requirements." },
        { icon: "2", text: "We analyze your case and carefully match you with the most suitable lawyer based on expertise and specialization." },
        { icon: "3", text: "Receive personalized legal advice and actionable solutions tailored to your specific needs from your assigned lawyer." },
    ];

    return (
        <>
      
            {/* Header Section introducing the services */}
            <header>
                <h1 style={styles.primaryHeading}>Our Legal Services</h1>
                <h2 style={styles.secondaryHeading}>
                    Comprehensive Legal Advice from Seasoned Attorneys You Can Trust
                </h2>
            </header>

            {/* Section displaying available services */}
            <div style={styles.sectionContainer}>
                <h3 style={styles.sectionTitle}>Our Services</h3>
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
