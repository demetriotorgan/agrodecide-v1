import { Brain, CloudRain, Thermometer } from 'lucide-react'
import React from 'react'
import { obterIconeFator } from '../../../util/obterIconeFator'
import { useDigitarTexto } from '../../../hooks/useDigitarTexto';

const PlantioIndice = ({classificacao, indicePlantio, temperaturaMedia,precipitacaoAcumulada, fatores,analisePlantio}) => {
  const { textoExibido, estaDigitando} = useDigitarTexto(analisePlantio);
  return (
    <>
     <div className="indicadores-header">
          <h2>Indicadores de Plantio</h2>
      </div>

       <div className="indicador-card">
          <div className="indicador-card-header">
            <span className="indicador-label">Índice Climático para Plantio</span>
            <span className={`status-badge status-${classificacao.toLowerCase()}`}>
              {classificacao}
            </span>
          </div>

          <div className="barra-progresso-container">
            <div
              className={`barra-progresso-preenchimento progresso-${classificacao.toLowerCase()}`}
              style={{ width: `${indicePlantio}%` }}
            ></div>
          </div>
          <div className="barra-progresso-valores">
            <span>0%</span>
            <span className="valor-atual">{indicePlantio}%</span>
            <span>100%</span>
          </div>
      </div>

        <div className="metricas-grid">
          <div className="metrica-item">
            <div className="metrica-topo">
              <Thermometer size={20} className="icon-temp" />
              <span>Temp. Média (7d)</span>
            </div>
            <strong className="metrica-valor">
              {temperaturaMedia.toFixed(1)}°C
            </strong>
          </div>

          <div className="metrica-item">
            <div className="metrica-topo">
              <CloudRain size={20} className="icon-chuva" />
              <span>Chuva Acum. (7d)</span>
            </div>
            <strong className="metrica-valor">
              {precipitacaoAcumulada.toFixed(1)} mm
            </strong>
          </div>
        </div>

         <div className="fatores-card">
          <h3>Fatores Analisados</h3>
          <ul className="fatores-lista">
            {fatores.map((fator, index) => (
              <li key={index} className="fator-item">
                {obterIconeFator(fator)}
                <span>{fator}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="banner-ia">
          <div className="banner-ia-titulo">
            <Brain size={20} />
            <h4>Análise Inteligente (Groq)</h4>
          </div>
          <p className="banner-ia-texto">
            {textoExibido}
            {estaDigitando && <span className="cursor">|</span>}
          </p>
        </div>
      
    </>
  )
}

export default PlantioIndice