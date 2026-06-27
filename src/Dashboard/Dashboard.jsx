import React from 'react'
import './Dashboard.css'
import Header from './header/Header'
import Menu from './Menu/Menu'
import Alerta from './Alerta/Alerta'
import Footer from './Footer/Footer'

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