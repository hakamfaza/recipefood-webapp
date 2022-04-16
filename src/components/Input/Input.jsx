import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styles from '../../assets/styles/styles';

const InputAuth = (params) => {
  return (
    <>
      <Form inline>
        <FormGroup>
          <Label for={params.for} style={styles.txtLabel}>
            {params.title}
          </Label>
          <Input
            id={params.id}
            name={params.name}
            type={params.type}
            placeholder={params.placeholder}
            style={styles.authInput}
            className="input"
            required
          />
        </FormGroup>{' '}
      </Form>
    </>
  );
};

export default InputAuth;
