import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header cd">
        <nav className="nav">
            <div className="header-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                    />
                </g>
                </svg>
            </div>
            <div className="header_line cd">
                <span className="header_line-line"></span>
            </div>
            <div className="header-nav">
                <ul className="header-link cd">
                    <li><a href="#">Home</a></li>
                    <li><a href="#destino">Destinos</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                    <li><a href="#tecnologia">Tecnologia</a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Header;
