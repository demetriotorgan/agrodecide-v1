import React from 'react';
import './Alerta.css';
import { TriangleAlert } from 'lucide-react';

const Alerta = ({ dadosApi }) => {
    return (
        <div className="alert-banner">
            <div className="alert-icon">
                <TriangleAlert />
            </div>

            <p className="alert-message">
                {dadosApi?.insightAgronomico ||
                 'Nenhuma recomendação disponível'}
            </p>
        </div>
    );
};

export default Alerta;