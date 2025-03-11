import React, { useState } from 'react';
import Hero from './components/Hero';
import OrderPage from './components/OrderPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentStep, setCurrentStep] = useState('hero');
  const [orderData, setOrderData] = useState(null);
  return (
    <div>
      
      {currentStep === 'hero' && <Hero setCurrentStep={setCurrentStep} />}
      {currentStep === 'order' && (
        <OrderPage
          setCurrentStep={setCurrentStep}
          setOrderData={setOrderData}
        />
      )}
      </div>

  )
}

export default App;
