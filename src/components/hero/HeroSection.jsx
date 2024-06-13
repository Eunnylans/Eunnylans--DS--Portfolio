import React from 'react';
import './heroSection.css';
import VisibilityIcon from "@material-ui/icons/Visibility";



const HeroSection = () => {
    return (
        <div className="hero-container" id='hero-container'>
            <div className="hero-content">
                <h1>Transforming Data into Insightful Decisions</h1>
                <h2>Meet Eunice Igbinedion: Your Expert Data Analyst</h2>
                {/*
                <p>
                    In today's data-driven world, making informed decisions is key to success.
                    Jane Doe is a seasoned Data Analyst with a passion for turning raw data into
                    actionable insights. With her expertise in statistical analysis, data visualization,
                    and predictive modeling, Jane empowers businesses to unlock their full potential.
                    From streamlining operations to enhancing customer experiences, Jane’s data-driven
                    strategies ensure you stay ahead of the curve.
                </p>
                */}
                <ul>
                    <li><strong>Expertise:</strong> Advanced Analytics, Data Visualization, Machine Learning</li>
                    <li><strong>Tools:</strong> Excel, Python, SQL, Tableau, Power BI,  machine Learning</li>
                    <li><strong>Experience:</strong> 7+ years in diverse industries including finance, healthcare, and retail</li>
                </ul>
                <button className="cta-button">VIEW PORTFOLIO <VisibilityIcon className="cta-button-icon" /></button>
            </div>
        </div>
    );
};

export default HeroSection;
