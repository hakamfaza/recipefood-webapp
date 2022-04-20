import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { BiUserCircle } from 'react-icons/bi';
import styles from '../../assets/styles/styles';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    setUser(JSON.parse(getUser));
  }, []);

  return (
    <div>
      <Navbar
        style={styles.nav}
        className="shadow-sm"
        // color="success"
        expand="md"
        light
      >
        {/* <NavbarBrand
          href="/"
          style={isOpen ? { } : { display: 'none' }}
        >
          Mama Recipe
        </NavbarBrand> */}
        <NavbarToggler className="me-2" onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <NavItem>
              <NavLink href="/" style={styles.navtext}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addrecipe" style={styles.navtext}>
                Add Recipe
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`/${user.name}`} style={styles.navtext}>
                Profile
              </NavLink>
            </NavItem>

            <NavItem
              style={isOpen ? {} : { position: 'absolute', right: '100px' }}
            >
              <NavLink href="/login">
                <BiUserCircle style={styles.navIcon}>?</BiUserCircle>
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
