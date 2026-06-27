import React from 'react';
import './ListaPrevisao.css';
import { formatarData } from '../../util/formatarData';
import { obterIconeClima } from '../../util/obterIconeClima';

const ListaPrevisao = ({ time = [], precipitationSum = [] }) => {
  return (
    <div className="lista-previsao-container">
      {time.map((dataStr, index) => {
        const chuvaValue = precipitationSum[index] || 0;
        const semChuva = chuvaValue === 0;
        const ehHoje = index === 0; // Identifica se é o primeiro item (Hoje)

        return (
          <div 
            key={dataStr} 
            className={`previsao-linha-item ${semChuva ? 'dia-seco' : 'dia-chuva'} ${ehHoje ? 'dia-atual' : ''}`}
          >
            {/* Esquerda: Data Formatada */}
            <span className="previsao-item-data">
              {formatarData(dataStr, index)}
            </span>

            {/* Centro: Ícone Condicional */}
            <div className="previsao-item-icone">
              {obterIconeClima(chuvaValue)}
            </div>

            {/* Direita: Volume em mm */}
            <span className="previsao-item-mm">
              {chuvaValue.toFixed(1)} mm
            </span>
          </div>
        );
      })}      
    </div>
  );
};

export default ListaPrevisao;