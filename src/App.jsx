import React, { useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [currentStep, setCurrentStep] = useState('hero');
  const [orderData, setOrderData] = useState(null);
  return (
    <div>
      <div className="hero-container">
      <section>
        <h1 className="banner-title">Teknolojik Yemekler</h1>
      </section>
      {currentStep === 'hero' && <Hero setCurrentStep={setCurrentStep} />}
      {currentStep === 'order' && (
        <OrderPage
          setCurrentStep={setCurrentStep}
          setOrderData={setOrderData}
        />
      )}
      </div>
    </div>
  )
}

export default App;
