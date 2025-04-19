import { useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Header() {

    return (
        <>
            <div class="bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#6f42c1' }}>
                    <div className="container-fluid">
                        <img src="src\img\ennjoy.png" alt="This is ennjoy" className="img-fluid" height={300} width={150} />

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold text-warning px-2" href="#">Playz</a>
                                </li>
                               
                                <li className="nav-item align">
                                    <a className="nav-link fw-bold text-warning px-2" href="#">Vibez</a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="btn btn-primary px-2 fw-bold" href="#">Login</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Header
