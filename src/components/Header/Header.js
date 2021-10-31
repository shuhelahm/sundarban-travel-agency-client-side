import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)
    return (
  <div className='nav-section'>
  <Navbar className='nav-bar mx-auto' sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Sundarban Travel Agency</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      { user.email ?? <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
      }
      { user.email ?? <Nav.Link as={Link} to="/manageallorders">Manage All Orders</Nav.Link>
      }
      { user.email ?? <Nav.Link as={Link} to="/addanewservice">Add a New Service</Nav.Link>
      }
      { user.email ? <button className='btn btn-danger' onClick={logOut}>Logout</button>
      :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
    </Navbar.Collapse>
  </Navbar> 
</div>
    );
};

export default Header;