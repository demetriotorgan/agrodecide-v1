import React from 'react'
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import './Previsao.css'
import ListaPrevisao from '../../componentes/ListaPrevisao/ListaPrevisao';
import { getWeatherIcon } from '../../util/weatherIcons';
import ResumoPrevisao from '../../componentes/ResumoPrevisao/ResumoPrevisao';
import { calcularChuvaAcumulada } from '../../util/calcularChuvaAcumulada';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import { formatarData } from '../../util/formatarData';
import { obterIconeClima } from '../../util/obterIconeClima';


const Previsao = () => {
  // Dados vindos do endpoint JSON que analisámos
  const navigate = useNavigate();
  const weatherCode = 'rain';  
  const { dadosApi, loading } = useWeather();

  if (loading) {
    return <p>Carregando...</p>;
  };  

  const chuvaAcumulada = calcularChuvaAcumulada(
    dadosApi.daily.precipitation_sum
  );

  const dataHoje = dadosApi.hoje.data;

  const WeatherIcon = obterIconeClima({
  codigoClima: dadosApi.hoje.codigoClima,
  chuva: dadosApi.hoje.chuva,
  chanceChuva: dadosApi.hoje.chanceChuva
});

  return (
    <>
      <div className="clima-page-container">
        {/* Botão voltar no topo */}
        <BotaoVoltar onClick={() => navigate('/', { replace: true })} />

        {/* Nova Seção: Destaque da Previsão */}
        <section className="previsao-destaque-card">
          <div className="destaque-info-esquerda">
            <h2 className="destaque-titulo">Previsão para os próximos dias</h2>
            <p className="destaque-data">Hoje {formatarData(dataHoje)}</p>
            <p className="destaque-chuva">
              Chuva Prevista: <strong>{dadosApi.hoje.chuva.toFixed(1)}mm</strong>
            </p>
            <small>Chance de Chuva: {dadosApi.hoje.chanceChuva}%</small>
          </div>

          {/* SVG */}
          <div className="destaque-icone-direita">
            <WeatherIcon size={28} />
          </div>
        </section>

        {/* LISTA DOS 7 DIAS COMPONETIZADA */}
        <ListaPrevisao
          previsaoDias={dadosApi.previsaoDias}
        />

        {/* Resumo da previsao */}
        <ResumoPrevisao
          dadosApi={dadosApi}          
        />

      </div>
    </>
  )
}

export default Previsao