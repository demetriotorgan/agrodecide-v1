import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="phone-container">
      <header>
        <div className="logo-placeholder">LOGO</div>
        <div className="contact-btn">CONTATO</div>
      </header>

      <main>
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

        <div className="alert-banner" role="alert">
          <span className="alert-icon">⚠️</span>
          <span className="alert-text">Gerar Alertas Climáticos Importantes</span>
        </div>
      </main>

      <footer>
        <div className="footer-logo-round">Logotipo Redondo</div>
        <div className="footer-content">
          <h3>Sobre o Projeto</h3>
          <p>Aqui está o espaço para contar resumidamente o propósito da sua aplicação climática.</p>
          <p>Breve texto explicativo sobre a aplicação.</p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard