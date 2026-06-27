import { TriangleAlert } from 'lucide-react'
import React from 'react'
import './Alerta.css'

const Alerta = () => {
    // Exemplo de texto dinâmico que mudaria dependendo da API
    const mensagemAlerta = "Atenção: Previsão de chuvas excessivas para os próximos 3 dias."
    return (
        <>
            <div className="alert-banner">
                <div className="alert-icon">
                    <TriangleAlert />
                </div>
                <p className="alert-message">{mensagemAlerta}</p>
            </div>
        </>
    )
}

export default Alerta