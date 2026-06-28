import { Loader2, TriangleAlert } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import './Alerta.css'
import { listarModelos, obterInsightClimatico } from '../../services/apiGemini';

const Alerta = ({dadosApi}) => {
    const [mensagemAlerta, setMensagemAlerta] = useState('Analisando dados do clima...');
    const [carregando, setCarregando] = useState(true);

//     useEffect(() => {
//     const verificarEBuscar = async () => {
//         console.log(import.meta.env.VITE_GEMINI_API_KEY)
//         setCarregando(true);
//         const sucesso = await listarModelos(); // Verifica conexão
//         if (sucesso) {
//             const conselho = await obterInsightClimatico(dadosApi);
//             setMensagemAlerta(conselho);
//         } else {
//             setMensagemAlerta("Erro de conexão com o AgroDecide IA.");
//         }
//         setCarregando(false);
//     };
    
//     verificarEBuscar();
// }, [dadosApi]);

    return (
        <>
            <div className="alert-banner">
                <div className="alert-icon">
                    {carregando ? <Loader2 className='animate-spin'/> : <TriangleAlert />}
                </div>
                <p className="alert-message">{mensagemAlerta}</p>
            </div>
        </>
    )
};

export default Alerta