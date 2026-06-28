import { createContext, useContext, useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

export const WeatherContext = createContext();

export function WeatherProvider({children}){
    const [dadosApi, setDadosApi] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function carregarDados(){
            try {
                const dados = await getWeather();
                setDadosApi(dados);
            } catch (error) {
                console.error('Erro ao carregar dados de clima: ', error);
            }finally{
                setLoading(false);
            }
        }
        carregarDados();
    },[]);

    return(
        <WeatherContext.Provider value={{dadosApi, loading}}>
            {children}
        </WeatherContext.Provider>
    );
};

