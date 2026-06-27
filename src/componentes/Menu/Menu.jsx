import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
     <section className="access-grid">
          
          <Link to="/previsao" className="access-card">
            <div className="card-icon">☁️</div>
            <div className="card-title">Consultar Previsões Climáticas</div>
          </Link>
          
          <Link to="/indicadores" className="access-card">
            <div className="card-icon">📊</div>
            <div className="card-title">Visualizar Indicadores Climáticos</div>
          </Link>
          
          <Link to="/historico" className="access-card">
            <div className="card-icon">↩️</div>
            <div className="card-title">Consultar Histórico Climático</div>
          </Link>
          
          <Link to="/comparacao" className="access-card">
            <div className="card-icon">🌐</div>
            <div className="card-title">Comparar Períodos Climáticos</div>
          </Link>
        </section>
    </>
  )
}

export default Menu