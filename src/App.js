import React from 'react'
import { Route } from 'wouter'
import './App.css'
import Header from './componentes/Header/Header'
import Proyectos from './componentes/Proyectos/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-Conteiner'>
        <Route
          path="/Proyectos"
          component={Proyectos} 
        />
      </div>
    </div>
  )
}

export default App
