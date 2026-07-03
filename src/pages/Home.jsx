import React from 'react'
import Menu from '../componentes/Menu/Menu'
import Alerta from '../componentes/Alerta/Alerta'
import { useWeather } from '../hooks/useWeather';
import LoadingTrator from '../assets/LoadingTrator/LoadingTrator';


const Home = () => {
  const {dadosApi, loading} = useWeather();

  if(loading){
    return <LoadingTrator />
  }
  return (
    <>
    <Menu />
    <Alerta dadosApi={dadosApi} />
    </>
    
  )
}

export default Home