import React from 'react';
import Titulo from '../components/landing/Titulo';
import Formulario_Land from '../components/landing/Formulario_Land';

const LandingPage: React.FC = () => {
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
        <Titulo />
        <Formulario_Land />
    </div>
  );
};

export default LandingPage;