export const weatherMapper = (data) => {

  const previsaoDias = data.daily.time.map((dataStr, index) => ({
    data: dataStr,
    chuva:
      data.daily.precipitation_sum?.[index] ?? 0,
    temperaturaMaxima:
      data.daily.temperature_2m_max?.[index] ?? 0,
    temperaturaMinima:
      data.daily.temperature_2m_min?.[index] ?? 0,
    chanceChuva:
      data.daily.precipitation_probability_max?.[index] ?? 0,
    codigoClima:
      data.daily.weather_code?.[index] ?? null
  }));

  const hoje = previsaoDias[0];

  return {

    ...data,
    hoje,    
    previsaoDias
  };
};