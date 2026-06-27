import React from 'react'
import { Mountain, CloudRain, CloudDrizzle, Sun } from 'lucide-react'
import './ResumoPrevisao.css'

const ResumoPrevisao = ({ dadosApi, chuvaAcumulada, diasComChuva = 3, diasSecos = 4 }) => {
  return (
    <section className="resumo-climatico-container">
      
      <div className="resumo-item">
        <div className="resumo-conteudo">
          <span className="resumo-label">Elevação</span>
          <strong className="resumo-valor">
            {dadosApi?.elevation ?? 0} m
          </strong>
        </div>
        <Mountain size={18} className="resumo-icone" />
      </div>

      <div className="resumo-item">
        <div className="resumo-conteudo">
          <span className="resumo-label">Chuva Acumulada</span>
          <strong className="resumo-valor">
            {chuvaAcumulada ? chuvaAcumulada.toFixed(1) : "0.0"} mm
          </strong>
        </div>
        <CloudRain size={18} className="resumo-icone" />
      </div>

      <div className="resumo-item">
        <div className="resumo-conteudo">
          <span className="resumo-label">Dias com Chuva</span>
          <strong className="resumo-valor destaque-chuva">{diasComChuva} dias</strong>
        </div>
        <CloudDrizzle size={18} className="resumo-icone destaque-chuva" />
      </div>

      <div className="resumo-item">
        <div className="resumo-conteudo">
          <span className="resumo-label">Dias Secos</span>
          <strong className="resumo-valor destaque-seco">{diasSecos} dias</strong>
        </div>
        <Sun size={18} className="resumo-icone destaque-seco" />
      </div>

    </section>
  )
}

export default ResumoPrevisao