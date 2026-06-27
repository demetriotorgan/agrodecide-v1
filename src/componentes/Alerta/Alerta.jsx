import { TriangleAlert } from 'lucide-react'
import React from 'react'
import './Alerta.css'

const Alerta = () => {
    return (
        <>
            <div className="alert-banner" role="alert">
                <span className="alert-icon"><TriangleAlert /></span>
                <span className="alert-text">Gerar Alertas Climáticos Importantes</span>
            </div>
        </>
    )
}

export default Alerta