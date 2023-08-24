import React from "react";

const Navbar = ({switchtoColor, switchtoColorCode}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 text-dark  bg-white shadow">
        <div className="container-fluid">
          <a className="navbar-brand px-5" href="#">
            Color Flipper
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bsScrollHeight": "100px" }}
            ></ul>
            <div className="d-flex gap-4 justify-content-around px-5">
              <a className="nav-link text-decoration-underline" onClick={switchtoColor}>
                Simple
              </a>
              <a className="nav-link text-decoration-underline" onClick={switchtoColorCode}>
                Hex
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
