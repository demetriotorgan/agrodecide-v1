import React, { useEffect, useState } from 'react';
import { Thermometer, CloudRain, CheckCircle, XCircle, Brain, ArrowLeft } from 'lucide-react';
import './Indicadores.css';
import { useWeather } from '../../hooks/useWeather';
import LoadingTrator from '../../assets/LoadingTrator/LoadingTrator'
import { obterIconeFator } from '../../util/obterIconeFator';
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import { Navigate, useNavigate } from 'react-router-dom';
import PlantioIndice from '../../componentes/IndicesClimaticos/Plantio/PlantioIndice';

const Indicadores = () => {
  const navigate = useNavigate();
  const { dadosApi, loading } = useWeather();
  
  if (loading) {
    return <LoadingTrator /> }   
  
  const { plantio } = dadosApi.indices;
  const textoAnalisePlantio = dadosApi?.analises.analiseDePlantio || 'Nenhuma recomendação disponível';    

  return (
    <>
      <BotaoVoltar onClick={() => navigate('/', { replace: true })} />

      <div className="indicadores-container">

       <PlantioIndice
       classificacao ={plantio.classificacao}
       indicePlantio={plantio.indicePlantio}
       temperaturaMedia={plantio.temperaturaMedia}
       precipitacaoAcumulada={plantio.precipitacaoAcumulada}
       fatores={plantio.fatores}
       analisePlantio={textoAnalisePlantio}
       />

      </div>
    </>
  );
};

export default Indicadores;




