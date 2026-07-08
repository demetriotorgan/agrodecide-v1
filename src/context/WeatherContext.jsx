import { createContext, useContext, useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
import { getCurrentLocation } from "../util/geolocation";

export const WeatherContext = createContext();

export function WeatherProvider({children}){
    const [dadosApi, setDadosApi] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function carregarDados(){
            try {
                const {latitude, longitude } = await getCurrentLocation();
                const dados = await getWeather({latitude, longitude});
                // console.log(dados);
                setDadosApi(dados);
            } catch (error) {
                 console.log('CATCH:', error);

                 console.error(
                    'Erro ao carregar dados de clima:',
                    error
                );

                setError(
                    error.message ||
                    'Não foi possível carregar os dados climáticos.'
                );
            }finally{
                setLoading(false);
            }
        }
        carregarDados();
    },[]);

    return(
        <WeatherContext.Provider value={{dadosApi, loading, error}}>
            {children}
        </WeatherContext.Provider>
    );
};

