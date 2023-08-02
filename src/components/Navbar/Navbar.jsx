import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand" to="#">Clinica</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profesionales">Profesionales</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/turnos">Turnos</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contacto
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_TELEFONO" target="_blank">Whatsapp</Link></li>
                  <li><Link className="dropdown-item" to="tel:+1234567890">Telefono</Link></li>
                  <li><Link className="dropdown-item" to="mailto:ejemplo@correo.com">E-mail</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
    
  
     
    
}

export default Navbar