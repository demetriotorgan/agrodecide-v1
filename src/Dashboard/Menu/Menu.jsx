import React from 'react'

const Menu = () => {
  return (
    <>
     <section className="access-grid">
          <article className="access-card">
            <div className="card-icon">☁️</div>
            <div className="card-title">Consultar Previsões Climáticas</div>
          </article>
          
          <article className="access-card">
            <div className="card-icon">📊</div>
            <div className="card-title">Visualizar Indicadores Climáticos</div>
          </article>
          
          <article className="access-card">
            <div className="card-icon">↩️</div>
            <div className="card-title">Consultar Histórico Climático</div>
          </article>
          
          <article className="access-card">
            <div className="card-icon">🌐</div>
            <div className="card-title">Comparar Períodos Climáticos</div>
          </article>
        </section>
    </>
  )
}

export default Menu