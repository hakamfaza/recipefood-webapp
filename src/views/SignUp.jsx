import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import AuthJumbotron from '../components/AuthJumbotron/AuthJumbotron';
import InputAuth from '../components/Input/Input';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

import styles from '../assets/styles/styles';
import '../assets/styles/style.css';
import checkbox from '../assets/styles/style.module.css';
import { useNavigate } from 'react-router-dom';

// import user from '../assets/img/user.png';

const SignUp = () => {
  const navigate = useNavigate();

  // set default
  const [form, setForm] = useState({
    photo: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    newPassword: ''
  });

  // when input is typed
  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };
  // when submitted
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.newPassword) {
      alert('password is not the same, please check again!');
    } else {
      const bodyFormData = new FormData();

      for (const key in form) {
        bodyFormData.append(key, form[key]);
      }
      console.log(bodyFormData);
      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, bodyFormData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
          // navigate('/profile');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
            <Form
              action="/profile"
              style={styles.formWidth}
              onSubmit={(e) => onSubmit(e)}
            >
              <InputAuth
                title="Photo"
                for="photo"
                id="photo"
                name="photo"
                type="file"
                onChange={(e) => onChangeInput(e, 'name')}
              />
              <InputAuth
                title="Name"
                for="name"
                id="name"
                name="name"
                type="name"
                placeholder="Name"
                onChange={(e) => onChangeInput(e, 'name')}
              />
              <InputAuth
                title="Email Adsress"
                for="email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={(e) => onChangeInput(e, 'email')}
              />
              <InputAuth
                title="Phone Number"
                for="number"
                id="number"
                name="number"
                type="number"
                placeholder="08xxxxxxxxxx"
                onChange={(e) => onChangeInput(e, 'phone')}
              />
              <InputAuth
                title="Create New Password"
                for="password"
                id="password"
                name="password"
                type="password"
                placeholder="Create New Password"
                onChange={(e) => onChangeInput(e, 'password')}
              />
              <InputAuth
                title="New Password"
                for="newpassword"
                id="newpassword"
                name="newpassword"
                type="password"
                placeholder="New Password"
                onChange={(e) => onChangeInput(e, 'newPassword')}
              />
              {/* <p
                style={
                  
                    ? styles.errPasword
                    : styles.displayErrPasword
                }
                // onSubmit={() => setPasswordMessage(false)}
              >
                password is not the same, please check again!
              </p> */}
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
              <ButtonComponent
                style={styles.buttonSubmit}
                title="Register Account"
              />
            </Form>
            <p style={styles.txtAuth}>
              Already have account?{' '}
              <a style={styles.txtAuthAction} href="/login">
                Log in Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
