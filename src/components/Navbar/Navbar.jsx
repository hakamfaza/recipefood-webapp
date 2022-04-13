import React from 'react';
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
  return (
    <div>
      <Navbar
        style={styles.nav}
        className="shadow-sm"
        // color="success"
        expand="md"
        light
      >
        {/* <NavbarBrand href="/">Mama Recipe</NavbarBrand> */}
        <NavbarToggler
          className="me-2"
          // onClick={function noRefCheck(){}}
        />
        <Collapse navbar>
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
              <NavLink href="/profile" style={styles.navtext}>
                Profile
              </NavLink>
            </NavItem>

            <NavItem style={{ position: 'absolute', right: '100px' }}>
              <NavLink href="/auth">
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
