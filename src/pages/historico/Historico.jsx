import './Historico.css'
import React, { useEffect, useState } from 'react'
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../../hooks/useWeather'
import LoadingTrator from '../../assets/LoadingTrator/LoadingTrator'
import { getCurrentDate, getDateDaysAgo } from '../../util/getDate'
import { CloudHail, CloudRainWind, Feather, FolderClock, Sun, ThermometerSun, Umbrella } from 'lucide-react'

const Historico = () => {
  const { historical, carregarHistorical, loadingHistorical, historicalError, location } = useWeather();
  const [periodo, setPeriodo] = useState(7)

  const hoje = getCurrentDate();


  const navigate = useNavigate();

  useEffect(() => {
    if (!location) return;

    carregarHistorical({
      start_date: getDateDaysAgo(periodo),
      end_date: hoje
    })
  }, [location, periodo]);

  console.log("Historical:", historical);
  console.log("Loading:", loadingHistorical);
  console.log("Erro:", historicalError);
  console.log(getCurrentDate());
  console.log(getDateDaysAgo(1));

  if (loadingHistorical) {
    return <LoadingTrator />
  }

  return (
    <>
      <BotaoVoltar onClick={() => navigate('/', { replace: true })} />
      <div className='painel-historical'>
        <div className='historical-dias'>
          <p><FolderClock /> Escolha um período de histórico</p>
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}>
            <option value={7}>7 dias atrás</option>
            <option value={15}>15 dias atrás</option>
            <option value={30}>30 dias atrás</option>
            <option value={60}>60 dias atrás</option>
            <option value={90}>90 dias atrás</option>
          </select>
        </div>
        <div className='painel-chuvaAcumulada'>
          <p><Umbrella /> Chuva Acumulada</p>
          <p>128mm</p>
        </div>
        <div className='painel-diasComChuva'>
          <p><CloudRainWind /> Dias com Chuva</p>
          <p>4</p>
        </div>
        <div className='painel-diasSecos'>
          <p><Sun /> Dias Secos</p>
          <p>4</p>
        </div>
        <div className='painel-maiorChuva'>
          <p><CloudHail /> Maior Chuva</p>
          <p>49mm</p>
        </div>
        <div className='painel-temperaturaMedia'>
          <p><ThermometerSun /> Temperatura Média</p>
          <p>21</p>
        </div>
        <div className='painel-etoMedio'>
          <p><Feather /> ETo Médio</p>
          <p>27.8</p>
        </div>
      </div>
    </>
  )
}

export default Historico