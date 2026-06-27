import React from 'react'
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import './Previsao.css'
import ListaPrevisao from '../../componentes/ListaPrevisao/ListaPrevisao';
import { getWeatherIcon } from '../../util/weatherIcons';
import ResumoPrevisao from '../../componentes/ResumoPrevisao/ResumoPrevisao';
import { calcularChuvaAcumulada } from '../../util/calcularChuvaAcumulada';

const Previsao = () => {
  // Dados vindos do endpoint JSON que analisámos
  const weatherCode = 'rain';
  const WeatherIcon = getWeatherIcon(weatherCode);

  const dadosApiMock = {
     elevation: 333.0,
    "daily": {
      "time": [
        "2026-06-27",
        "2026-06-28",
        "2026-06-29",
        "2026-06-30",
        "2026-07-01",
        "2026-07-02",
        "2026-07-03"
      ],
      "precipitation_sum": [0.30, 1.30, 0.40, 0.00, 0.00, 0.00, 0.00]
    }
  };

  const chuvaAcumulada = calcularChuvaAcumulada(
  dadosApiMock.daily.precipitation_sum
);

  return (
    <>
      <div className="clima-page-container">
        {/* Botão voltar no topo */}
        <BotaoVoltar onClick={() => console.log('Voltar para Home')} />

        {/* Nova Seção: Destaque da Previsão */}
        <section className="previsao-destaque-card">
          <div className="destaque-info-esquerda">
            <h2 className="destaque-titulo">Previsão para os próximos dias</h2>
            <p className="destaque-data">Hoje (27/06)</p>
            <p className="destaque-chuva">
              Chuva Prevista: <strong>3.1 mm</strong>
            </p>
          </div>

          {/* SVG */}
          <div className="destaque-icone-direita">
            <WeatherIcon />
          </div>
        </section>

        {/* LISTA DOS 7 DIAS COMPONETIZADA */}
        <ListaPrevisao
          time={dadosApiMock.daily.time}
          precipitationSum={dadosApiMock.daily.precipitation_sum}
        />
        
        {/* Resumo da previsao */}
        <ResumoPrevisao
          dadosApi={dadosApiMock}
          chuvaAcumulada={chuvaAcumulada}
        />

      </div>
    </>
  )
}

export default Previsao