import React from 'react'
import './App.css'
import Mensaje from './Components/Mensaje.js'
import Descripcion from './Components/Descripcion.js'

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
    </div>
  )
}

export default App;
