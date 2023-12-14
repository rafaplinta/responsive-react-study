import React from 'react';
import "../style/Body.css"

function Body() {
  return (
    <main>
      <hr className="line"></hr>
      <section className="box-section">
        <div className="div-one square">1</div>
        <div className="div-two square">2</div>
        <div className="div-three square">3</div>
        <div className="div-four square">4</div>
        <div className="div-five square">5</div>
      </section>
        <hr className="line"></hr>
      <section className="text-section">
        <div className="div-with-subtitle"/>
        <div className="text-box">
          <p className="text">Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, 
            sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!</p>
        </div>
      </section>
    </main>
  )
}

export default Body;