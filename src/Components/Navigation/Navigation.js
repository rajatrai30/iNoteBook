import React from 'react';
import { Link, useLocation, useNavigate} from "react-router-dom";


const Navigation = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{
      backgroundColor: "#3e96e3 !important",
      'boxShadow': '0 2px 8px 0 rgb(0 0 0)'
    }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to='/about'>About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link to="/login" className="btn btn-primary mx-1" role="button">Login</Link>
            <Link to="/signup" className="btn btn-primary mx-1" role="button">SignUp</Link>
          </form>: <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </nav>
  )
}
export default Navigation;