import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import checkbox from '../assets/styles/style.module.css';

const SignUp = () => {
  return (
    <div className="container-fluid" style={styles.containerSignUp}>
      <div className="row">
        <div className="col-sm">
          <div style={styles.positionJumbotron}>
            <AuthJumbotron />
          </div>
        </div>
        <div className="col-sm" style={styles.authSignup}>
          <div style={styles.formInput}>
            <h3 className="font" style={styles.authTitle}>
              Let’s Get Started !
            </h3>
            <p style={styles.authTxt}>
              Create new account to access all features
            </p>
            <Form style={styles.formWidth}>
              <InputAuth
                title="Name"
                for="name"
                id="name"
                name="name"
                type="name"
                placeholder="Name"
              />
              <InputAuth
                title="Email Adsress"
                for="email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              <InputAuth
                title="Phone Number"
                for="number"
                id="number"
                name="number"
                type="number"
                placeholder="08xxxxxxxxxx"
              />
              <InputAuth
                title="Create New Password"
                for="password"
                id="password"
                name="password"
                type="password"
                placeholder="Create New Password"
              />
              <InputAuth
                title="New Password"
                for="password"
                id="password"
                name="password"
                type="password"
                placeholder="New Password"
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
              <ButtonComponent title="Register Account" />
              <p style={styles.txtAuth}>
                Already have account?{' '}
                <a style={styles.txtAuthAction} href="/login">
                  Log in Here
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
