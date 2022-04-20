import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import checkbox from '../assets/styles/style.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [getUser, setUser] = useState([]);

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };

  // console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, body, {})
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        setUser(response.data.data.user.name);
        navigate(`/profile/${getUser}`);
        // if (response.data.status === 'failed') {
        //   console.log('failed');
        // } else {
        //   console.log('success');
        // }
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
              <ButtonComponent style={styles.buttonSubmit} title="Submit" />
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
