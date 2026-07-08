import React, { useEffect, useState } from 'react';
import { Thermometer, CloudRain, CheckCircle, XCircle, Brain, ArrowLeft } from 'lucide-react';
import './Indicadores.css';
import { useWeather } from '../../hooks/useWeather';
import LoadingTrator from '../../assets/LoadingTrator/LoadingTrator'
import { obterIconeFator } from '../../util/obterIconeFator';
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import { Navigate, useNavigate } from 'react-router-dom';
const Indicadores = () => {
  const { dadosApi, loading } = useWeather();
  
  if (loading) {
    return <LoadingTrator />
  }

  const { plantio } = dadosApi.indices;
  const textoCompleto = dadosApi?.analises.analiseDePlantio || 'Nenhuma recomendação disponível';

  const [textoExibido, setTextoExibido] = useState('');
  const [estaDigitando, setEstaDigitando] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Toda vez que o insight mudar, reinicia o efeito de digitação
    setTextoExibido('');
    setEstaDigitando(true);

    let index = 0;

    // Define a velocidade da digitação (em milissegundos por caractere)
    const velocidade = 25;

    const temporizador = setInterval(() => {
      if (index < textoCompleto.length) {
        // Adiciona o próximo caractere usando a referência mais atual do index
        setTextoExibido(() => textoCompleto.slice(0, index + 1));
        index++;
      } else {
        // Quando terminar de digitar tudo, limpa o intervalo e desativa o cursor
        clearInterval(temporizador);
        setEstaDigitando(false);
      }
    }, velocidade);

    // Função de limpeza caso o componente seja desmontado antes de terminar
    return () => clearInterval(temporizador);
  }, [textoCompleto]);


  return (
    <>
      <BotaoVoltar onClick={() => navigate('/', { replace: true })} />
      <div className="indicadores-container">

        <div className="indicadores-header">
          <h2>Indicadores de Plantio</h2>
        </div>

        <div className="indicador-card">
          <div className="indicador-card-header">
            <span className="indicador-label">Índice Climático para Plantio</span>
            <span className={`status-badge status-${plantio.classificacao.toLowerCase()}`}>
              {plantio.classificacao}
            </span>
          </div>

          <div className="barra-progresso-container">
            <div
              className={`barra-progresso-preenchimento progresso-${plantio.classificacao.toLowerCase()}`}
              style={{ width: `${plantio.indicePlantio}%` }}
            ></div>
          </div>
          <div className="barra-progresso-valores">
            <span>0%</span>
            <span className="valor-atual">{plantio.indicePlantio}%</span>
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
              {plantio.temperaturaMedia.toFixed(1)}°C
            </strong>
          </div>

          <div className="metrica-item">
            <div className="metrica-topo">
              <CloudRain size={20} className="icon-chuva" />
              <span>Chuva Acum. (7d)</span>
            </div>
            <strong className="metrica-valor">
              {plantio.precipitacaoAcumulada.toFixed(1)} mm
            </strong>
          </div>
        </div>

        <div className="fatores-card">
          <h3>Fatores Analisados</h3>
          <ul className="fatores-lista">
            {plantio.fatores.map((fator, index) => (
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

      </div>
    </>
  );
};

export default Indicadores;




