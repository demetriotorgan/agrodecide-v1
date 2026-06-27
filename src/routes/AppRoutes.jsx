import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Home from '../pages/Home'
import Previsao from '../pages/previsao/Previsao'
import Indicadores from '../pages/indicadores/Indicadores'
import Historico from '../pages/historico/Historico'
import Comparacao from '../pages/compararcao/Comparacao'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route index element={<Home />} />            
              <Route path='previsao' element={<Previsao/>}/>
              <Route path='indicadores' element={<Indicadores/>}/>
              <Route path='historico' element={<Historico/>}/>
              <Route path='comparacao' element={<Comparacao/>}/>
              </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes