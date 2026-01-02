import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">🍺</div>
          <div className="logo-text">
            <span className="logo-title">Bar do Bispo</span>
            <span className="logo-subtitle">Drinks & Petiscos</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="navbar-menu">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/cardapio">Cardápio</NavLink>
          <NavLink to="/about">Quem somos</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>

        {/* Botão */}
        <div className="navbar-action">
          <button>Reservar mesa</button>
        </div>

      </div>
    </header>
  );
}
