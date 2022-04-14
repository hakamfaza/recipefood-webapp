import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import checkbox from '../assets/styles/style.module.css';

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <AuthJumbotron />
        </div>
        <div className="col-sm" style={styles.auth}>
          <div style={styles.formInput}>
            <h3 className="font" style={styles.authTitle}>
              Welcome
            </h3>
            <p style={styles.authTxt}>Log in into your exiting account</p>
            <Form>
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
              <Form inline>
                <FormGroup style={styles.checkboxAuth} check>
                  <Label style={styles.textChecbox} check>
                    <Input
                      type="checkbox"
                      style={(checkbox.check, styles.check)}
                      className="check"
                      required
                    />{' '}
                    I agree to terms & conditions
                  </Label>
                </FormGroup>
              </Form>
              <ButtonComponent title="Submit" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
