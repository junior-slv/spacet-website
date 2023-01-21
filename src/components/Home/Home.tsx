import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_content">
        <div className="home_content-left">
          <div className="home_content-text">
            <h4>ENTÃO, VOCÊ QUER VIAJAR PARA O</h4>
            <h2>ESPAÇO</h2>
            <p>
              Convenhamos, se você quer ir para o espaço, pode muito bem ir
              genuinamente para o espaço sideral e não pairar no limite dele.
              Bem, sente-se e relaxe porque vamos dar-lhe uma experiência
              verdadeiramente fora deste mundo!
            </p>
          </div>
        </div>
        <div className="home_content-right">
            <div className="home_content-circle cd">
                <p>EXPLORAR</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
