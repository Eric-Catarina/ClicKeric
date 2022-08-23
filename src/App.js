import './App.css'
import React, { useState } from 'react';


export default function App() {
  const [cliques, setCliques] = useState(0);

  function BotaoFoiClicado() {
    setCliques(cliques + 1);
  }



  return (
    <main>
      <div className='divBody'>
        <div className='divCentral col-10 card position-absolute top-50 start-50 translate-middle'>
          <div className='divCentral card-body text-center col-12 neumorfico'>
            <h1 className='card-title text-white'>Clique na Área abaixo ! </h1>
            <h1 className='card-title text-white-50'>Cliques: {cliques} </h1>

            <button onClick={BotaoFoiClicado} className=
              'botaoCliques col-12 btn  neumorfico'>
              React ⚛️ + Éric ⚡ + Replit 🌀
            </button>
          </div>
        </div>
      </div>



    </main>
  )
}
