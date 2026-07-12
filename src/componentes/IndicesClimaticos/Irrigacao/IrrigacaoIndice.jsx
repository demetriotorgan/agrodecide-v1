import React from 'react'
import BotaoVoltar from '../../botaoVoltar/BotaoVoltar'
import { useNavigate } from 'react-router-dom'
import { Droplet } from 'lucide-react';

const IrrigacaoIndice = () => {
  const navigate = useNavigate();
  return (
    <>
      <BotaoVoltar onClick={() => navigate('/indicadores')} />
      <div className='componentes-indicador'>
        <div className="indicadores-header">
          <h2>Indicador de Irrigação  <Droplet /></h2>
        </div>
        </div>
    </>

  )
}

export default IrrigacaoIndice