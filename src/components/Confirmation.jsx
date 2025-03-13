import React from 'react';
import './Confirmation.css'

const Confirmation = () => {
    return (
        <div className="banner-wrapper">
            <section>
                <h1 className="banner-title">Teknolojik Yemekler</h1>
            </section>
            <div className="confirmation-container">
                <h2 className="confirmation-message">
                    TEBRIKLER!
                    <br />
                    SİPARİŞİNİZ ALINDI!
                </h2>
            </div>
        </div>
    );
};
export default Confirmation;