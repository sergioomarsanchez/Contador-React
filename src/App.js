import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoSergio from './imagenes/Sergio Sánchez.png'
import { useState } from 'react'


function App() {

const [numClics, setNumClics] = useState(0);



const manejarClic = ()=> {
setNumClics(numClics + 1);
}

const reiniciarContador = () =>{
setNumClics(0);
}

  return (
  
    
    
    <div className="App">
      <img 
       className='logo-imagen'
       src={logoSergio}
       alt='Logo de Sergio'/>
     <div className='logo'>
     </div>
     <div id={ numClics>10? 'background-green' : null } className='contenedor-contador'>
       <Contador numClics={numClics} />
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic} />

      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
