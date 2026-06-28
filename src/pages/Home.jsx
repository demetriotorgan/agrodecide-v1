import React from 'react'
import Menu from '../componentes/Menu/Menu'
import Alerta from '../componentes/Alerta/Alerta'
import { useWeather } from '../hooks/useWeather';


const Home = () => {
  const {dadosApi, loading} = useWeather();

  if(loading){
    return <p>Carregando...</p>;
  }
  return (
    <>
    <Menu />
    <Alerta dadosApi={dadosApi} />
    </>
    
  )
}

export default Home