import React from 'react'
import Menu from '../componentes/Menu/Menu'
import Alerta from '../componentes/Alerta/Alerta'

const Home = () => {
   const dadosApiMock = {
     elevation: 333.0,
    "daily": {
      "time": [
        "2026-06-27",
        "2026-06-28",
        "2026-06-29",
        "2026-06-30",
        "2026-07-01",
        "2026-07-02",
        "2026-07-03"
      ],
      "precipitation_sum": [0.30, 1.30, 0.40, 0.00, 0.00, 0.00, 0.00]
    }
  };
  return (

    <>
    <Menu />
    <Alerta dadosApi={dadosApiMock} />
    </>
    
  )
}

export default Home