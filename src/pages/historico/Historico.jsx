import React from 'react'
import BotaoVoltar from '../../componentes/botaoVoltar/BotaoVoltar'
import { useNavigate } from 'react-router-dom'

const Historico = () => {
  const navigate = useNavigate();
  return (
    <>
    <BotaoVoltar  onClick={()=> navigate('/', {repalce:true})}/>
    <p>Historico</p>
    </>
  )
}

export default Historico