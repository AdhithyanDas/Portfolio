import React from 'react'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white container-fluid position-fixed" style={{ minHeight: "40px", zIndex: '1' }}>
                <div className="container">
                    <button className="navbar-toggler border-0 text-white me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center fw-bold">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header