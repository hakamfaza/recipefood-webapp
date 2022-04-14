import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styles from '../../assets/styles/styles';
import logo from '../../assets/img/logo.svg';
import '../../assets/styles/style.css';
import st from '../../assets/styles/s.module.css';
import InputAuth from '../Input/Input';

const Auth = () => {
  return (
    <div className="container-fluid" style={styles.containerAuth}>
      <div className="row">
        <div className="col-sm bg-success" style={styles.containerAuthLogo}>
          <img src={logo} alt="Logo" />
          <h5 style={styles.titleLogo} className="font">
            Mama Recipe.
          </h5>
        </div>
        <div className="col-sm" style={styles.auth}>
          <div style={styles.formInput}>
            <h3 className="font" style={styles.authTitle}>
              Welcome
            </h3>
            <p style={styles.authTxt}>Log in into your exiting account</p>
            <Form inline>
              <InputAuth
                title="E-mail"
                for="email"
                id="email"
                name="email"
                type="email"
                placeholder="examplexxx@gmail.com"
              />
              <InputAuth
                title="Password"
                for="password"
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              <FormGroup style={(st.check, styles.checkboxAuth)} check>
                <Label check>
                  <Input type="checkbox" style={styles.check} required /> I
                  agree to terms & conditions
                </Label>
              </FormGroup>
              <Button style={styles.buttonSubmit}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
