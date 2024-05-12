import React from 'react'

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Savir</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Venue Booking</a></li>
                            <li><a className="dropdown-item" href="/"> Manpower</a></li>
                            
                            
                        </ul>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
    </div>
  )
}
