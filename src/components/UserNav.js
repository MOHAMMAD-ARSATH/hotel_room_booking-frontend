import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Login from './Login';


function UserNav() {
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("currentUser"));

  function handleLogout() {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/";
  }

  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };


  const navAction = () => {
    if (user) {
      return (
        <ul className="navbar-nav mr-5">
          <li className="nav-item active" style={{ margin: '0 20px' }}>

            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/"}>
              Home
            </button>
          </li>
          <li className="nav-item active" style={{ margin: '0 20px' }}>
            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/about"}>
              About
            </button>
          </li>
          <li className="nav-item active" style={{ margin: '0 20px' }}>
            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/allrooms/"}>
              Rooms
            </button>
          </li>
          <li className="nav-item active" style={{ margin: '0 20px' }}>
            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/gallery"}>
              Gallery
            </button>
          </li>
          <li className="nav-item active" style={{ margin: '0 20px' }}>
            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/facilities"}>
              Facilities
            </button>
          </li>
          <li className="nav-item active" style={{ margin: '0 20px' }}>
            <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/contact"}>
              Contact
            </button>
          </li>
          <div className="dropdown ml-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user mr-2"></i>
              {user.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/mybookings">
                My Bookings
              </a>

              <a className="dropdown-item" onClick={() => setShowModal(true)}>
                Logout
              </a>
            </div>
          </div>
        </ul>
      );
    }

    return (
      <ul className="navbar-nav" >
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/"}>
            Home
          </button>
        </li>
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/about"}>
            About
          </button>
        </li>
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/allrooms/"}>
            Rooms
          </button>
        </li>
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/gallery"}>
            Gallery
          </button>
        </li>
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/facilities"}>
            Facilities
          </button>
        </li>
        <li className="nav-item active" style={{ margin: '0 20px' }}>
          <button className="nav-link btn btn-link" style={{ fontWeight: 'bold' }} onClick={() => window.location.href = "/contact"}>
            Contact
          </button>
        </li>
        <li className="nav-item active mr-5" style={{ margin: '0 20px' }}>
          <button
            onClick={openLoginModal}
            type='button'
            style={{
              backgroundColor: '#A9822D',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '5px',
              border: '1px solid #3498db',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderColor: '#A9822D',
              fontSize: '15px',
              fontWeight: 'bold'

            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#A9822D'; // Change text color to match the original button color
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#A9822D';
              e.target.style.color = 'white'; // Restore text color on hover out
            }}
          >
            Book Now
          </button>

        </li>
        {showLoginModal && <Login closeModal={closeLoginModal} />}
        {/* <li className="nav-item">
    <button className="nav-link btn btn-link" onClick={() => window.location.href = "/login"}>
      Login
    </button>
  </li> */}
      </ul>

    );
  };

  return (
    <div style={{ zIndex: "999", width: "100%", position: "sticky", top: "0px" }}>
      <nav className="navbar navbar-expand-lg" >
        <a className="navbar-brand ml-4" href="/">
          <img src="https://cjpallazzio.com/wp-content/uploads/2023/06/cj-pallazzio-logo.png"
            height="55px"
            width="110px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navAction()}
        </div>

        {/* Logout Confirmation Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header >
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to logout?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              No
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>

      </nav>
    </div>
  );
}

export default UserNav;
