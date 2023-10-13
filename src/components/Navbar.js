import { useHistory, Link, NavLink } from "react-router-dom";
import React from 'react'



const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  //useHistory lets you access the history instance of the react router


  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  }
  //pushes new search text history and routes the user to the search page automatically

//renders the navbar with search input  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">
                Must Watch List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
         
          
          <form className="d-flex">
            <input
              id="search-input"
              className="form-control me-2"
              type="search"
              placeholder="Search for a Movie"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;