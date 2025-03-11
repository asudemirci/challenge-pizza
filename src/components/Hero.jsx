import React from 'react';
import './Hero.css';

const Hero = ({setCurrentStep}) => {
 return (
    <div className="hero-container">
        <div className="hero-banner">
            <section>
                <h1 className="banner-title">Teknolojik Yemekler</h1>
              </section>
            <section>
                <p className="hero-text">KOD ACIKTIRIR Pizza, DOYURUR</p>
            </section>
            <section>
                <button className='hero-btn' onClick={() => setCurrentStep('order')}>ACIKTIM</button>
            </section>
        </div>           
    </div>
 )
}
export default Hero;