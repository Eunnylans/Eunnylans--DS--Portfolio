import React from 'react';
import './heroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
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
                    <li><strong>Tools:</strong> Python, R, SQL, Tableau, Power BI</li>
                    <li><strong>Experience:</strong> 7+ years in diverse industries including finance, healthcare, and retail</li>
                </ul>
                <button className="cta-button">Unlock the Power of Your Data</button>
            </div>
        </div>
    );
};

export default HeroSection;
