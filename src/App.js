import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';
 
function App() {

  const [numClics, setNumClics]= useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciiarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logo} 
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciiar'
          esBotonDeClic={false}
          manejarClic={reiniciiarContador}
        />
      </div>
    </div>
  );
}

export default App;
