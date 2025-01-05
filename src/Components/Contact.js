import React from "react";


const Contact = () => {
    const contactPageWrapper = {
        width: "100%",
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      };
    
      const contactHeader = {
        textAlign: "center",
        marginBottom: "30px",
      };
    
      const primaryHeading = {
        fontSize: "2.8rem",
        // color: "#2c3e50",
        color: 'black' ,
        fontWeight: "bold",
        marginBottom: "10px",
      };
    
      const secondaryHeading = {
        fontSize: "1.8rem",
        color: "#7f8c8d",
        fontWeight: "500",
      };
    
      const contactInfo = {
        padding: "20px",
      };
    
      const sectionTitle = {
        fontSize: "1.8rem",
        color: "#2c3e50",
        fontWeight: "600",
        marginBottom: "20px",
      };
    
      const infoItem = {
        marginBottom: "18px",
      };
    
      const infoHeading = {
        fontWeight: "bold",
        color: "#34495e",
        marginBottom: "5px",
        fontSize: "1rem",
      };
    
      const infoParagraph = {
        fontSize: "1.1rem",
        color: "#7f8c8d",
        marginLeft: "15px",
        fontWeight: "400",
      };
    
      const infoParagraphHover = {
        textDecoration: "underline",
        cursor: "pointer",
      };
    
      return (
        <div>
   
        <div style={contactPageWrapper}>
          <div style={contactHeader}>
            <h1 style={primaryHeading}>How Can We Help You Today?</h1>
            <h2 style={secondaryHeading}>Let Us Assist You</h2>
          </div>
    
          <div style={contactInfo}>
            <h3 style={sectionTitle}>Reach Out to Us:</h3>
            <div style={infoItem}>
              <h6 style={infoHeading}>Email:</h6>
              <p style={infoParagraph}>info@mylawyerlk.com</p>
            </div>
            <div style={infoItem}>
              <h6 style={infoHeading}>Phone:</h6>
              <p style={infoParagraph}> +94 773255161</p>
            </div>
            <div style={infoItem}>
              <h6 style={infoHeading}>Office Hours:</h6>
              <p style={infoParagraph}>Monday – Friday: 9:00 AM – 6:00 PM</p>
            </div>
            <div style={infoItem}>
              <h6 style={infoHeading}>Address:</h6>
              <p style={infoParagraph}>246 Crackley Bank, NEWCASTLE,ST5 7AB,GB , United Kingdom</p>
            </div>
          </div>
        </div>
        </div>
      );
};

export default Contact;