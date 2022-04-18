import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { REACT_APP_API_URL } from '../config/env';

import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import checkbox from '../assets/styles/style.module.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };

  console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    axios
      .post(`${REACT_APP_API_URL}/login`, body, {})
      .then((response) => {
        if (response.data.status === 'failed') {
          console.log('failed');
        } else {
          console.log('success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Form
              method="get"
              action="/profile"
              style={styles.formWidth}
              onSubmit={(e) => onSubmit(e)}
            >
              <InputAuth
                title="E-mail"
                for="email"
                id="email"
                name="email"
                type="email"
                placeholder="examplexxx@gmail.com"
                onChange={(e) => onChangeInput(e, 'email')}
              />
              <InputAuth
                title="Password"
                for="password"
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => onChangeInput(e, 'password')}
              />
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
              <Link to="/profile">
                <ButtonComponent style={styles.buttonSubmit} title="Submit" />
              </Link>

              <a style={styles.txtForgotPassword} href="/">
                Forgot Password ?
              </a>
              <p style={styles.txtAuth}>
                Don't have an account{' '}
                <a style={styles.txtAuthAction} href="/signup">
                  Sign Up
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
