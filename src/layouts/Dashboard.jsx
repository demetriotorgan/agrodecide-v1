import React from 'react'
import './Dashboard.css'
import Header from '../componentes/header/Header'
import Menu from '../componentes/Menu/Menu'
import Alerta from '../componentes/Alerta/Alerta'
import Footer from '../componentes/Footer/Footer'

const Dashboard = () => {
  return (
    <div className="phone-container">
      <Header />
      <main>
        <Menu />
        <Alerta />
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard