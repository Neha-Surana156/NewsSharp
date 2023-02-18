import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar=()=> {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsSharp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item"><a className="nav-a" href="/business">Business</a></li>
              <li className="nav-item"><a className="nav-a" href="/entertainment">Entertainment</a></li>
              <li className="nav-item"><a className="nav-a" href="/general">General</a></li>
              <li className="nav-item"><a className="nav-a" href="/health">Health</a></li>
              <li className="nav-item"><a className="nav-a" href="/science">Science</a></li>
              <li className="nav-item"><a className="nav-a" href="/sports">Sports</a></li>
              <li className="nav-item"><a className="nav-a" href="/technology">Technology</a></li>
            </ul> */}
                      
          </div>
        </div>
        </nav>
      </>
    )
  }
export default NavBar
