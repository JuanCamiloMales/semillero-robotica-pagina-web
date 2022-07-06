import React from 'react'
import { Route } from 'wouter'
import './App.css'
import Header from './componentes/Header/Header'
import Projects from './componentes/Projects/Projects'
import Guides from './componentes/Guides/Guides'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-Conteiner'>
        <Route
          path="/Proyectos"
          component={Projects} 
        />
        <Route
          path="/Guias"
          component={Guides} 
        />
        <Route
          path="/Guias/:keyword"
          component={Guides} 
        />
      </div>
    </div>
  )
}

export default App
