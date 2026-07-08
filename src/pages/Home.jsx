import React from 'react'
import Menu from '../componentes/Menu/Menu'
import Alerta from '../componentes/Alerta/Alerta'
import { useWeather } from '../hooks/useWeather';
import LoadingTrator from '../assets/LoadingTrator/LoadingTrator';
import Banner from '../componentes/Banner/Banner';


const Home = () => {
  const { dadosApi, loading, error } = useWeather(); 
  
  if (loading) {
    return <LoadingTrator />
  }

  if (error) {
    return (
      <LoadingTrator
        erro={error}
      />
    );
  }
  return (
    <>
      <Banner dadosApi={dadosApi} />
      <Alerta dadosApi={dadosApi} />
      <Menu />
      
    </>

  )
}

export default Home