import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
    <div class="phone-container">
        <header>
            <div class="logo-placeholder">LOGO</div>
            <div class="contact-btn">CONTATO</div>
        </header>

        <main>
            <section class="access-grid">
                <article class="access-card">
                    <div class="card-icon">☁️</div>
                    <div class="card-title">Consultar Previsões Climáticas</div>
                </article>
                
                <article class="access-card">
                    <div class="card-icon">📊</div>
                    <div class="card-title">Visualizar Indicadores Climáticos</div>
                </article>
                
                <article class="access-card">
                    <div class="card-icon">↩️</div>
                    <div class="card-title">Consultar Histórico Climático</div>
                </article>
                
                <article class="access-card">
                    <div class="card-icon">🌐</div>
                    <div class="card-title">Comparar Períodos Climáticos</div>
                </article>
            </section>

            <div class="alert-banner" role="alert">
                <span class="alert-icon">⚠️</span>
                <span class="alert-text">Gerar Alertas Climáticos Importantes</span>
            </div>
        </main>

        <footer>
            <div class="footer-logo-round">Logotipo Redondo</div>
            <div class="footer-content">
                <h3>Sobre o Projeto</h3>
                <p>Aqui está o espaço para contar resumidamente o propósito da sua aplicação climática.</p>
                <p>Breve texto explicativo sobre a aplicação.</p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Dashboard