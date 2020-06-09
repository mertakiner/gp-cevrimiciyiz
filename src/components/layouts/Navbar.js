import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/gp-cevrimiciyiz/">
          çevrimiçiyiz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/gp-cevrimiciyiz/hakkimizda">
              Hakkımızda <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="/gp-cevrimiciyiz/etkinlikler">
              Etkinlikler <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
