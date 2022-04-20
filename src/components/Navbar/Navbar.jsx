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
import styles from '../../assets/styles/components/navbar/navbar.module.css';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    setUser(JSON.parse(getUser));
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Navbar
        className={navbar ? styles.navActive : styles.nav}
        // color={window.screenTop < 0 ? 'danger' : 'white'}
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
              <NavLink href="/" className={styles.navText}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addrecipe" className={styles.navText}>
                Add Recipe
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile" className={styles.navText}>
                Profile
              </NavLink>
            </NavItem>

            <NavItem
              style={isOpen ? {} : { position: 'absolute', right: '100px' }}
            >
              <NavLink
                href="/login"
                className={navbar ? styles.iconTextActive : styles.iconText}
              >
                <BiUserCircle
                  className={navbar ? styles.navIconActive : styles.navIcon}
                >
                  ?
                </BiUserCircle>
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
