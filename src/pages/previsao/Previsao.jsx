import React from 'react'
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import './Previsao.css'
import ListaPrevisao from '../../componentes/ListaPrevisao/ListaPrevisao';
import { getWeatherIcon } from '../../util/weatherIcons';
import ResumoPrevisao from '../../componentes/ResumoPrevisao/ResumoPrevisao';
import { calcularChuvaAcumulada } from '../../util/calcularChuvaAcumulada';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';


const Previsao = () => {
  // Dados vindos do endpoint JSON que analisámos
  const navigate = useNavigate();
  const weatherCode = 'rain';
  const WeatherIcon = getWeatherIcon(weatherCode);
  const {dadosApi, loading} = useWeather();

  if(loading){
    return <p>Carregando...</p>;
  };
  
  const chuvaAcumulada = calcularChuvaAcumulada(
  dadosApi.daily.precipitation_sum
);

  return (
    <>
      <div className="clima-page-container">
        {/* Botão voltar no topo */}
        <BotaoVoltar onClick={() => navigate('/', { replace: true })} />

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
          time={dadosApi.daily.time}
          precipitationSum={dadosApi.daily.precipitation_sum}
        />
        
        {/* Resumo da previsao */}
        <ResumoPrevisao
          dadosApi={dadosApi}
          chuvaAcumulada={chuvaAcumulada}
        />

      </div>
    </>
  )
}

export default Previsao