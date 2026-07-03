import React from 'react'
import { Tractor } from 'lucide-react';
import './LoadingTrator.css';

const LoadingTrator = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* O ícone do trator ganha uma classe para a animação */}
        <Tractor className="trator-animado" size={64} />
        <p className="loading-texto">A carregar dados do campo...</p>
      </div>
    </div>
  )
}

export default LoadingTrator