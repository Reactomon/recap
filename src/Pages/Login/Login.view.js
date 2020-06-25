import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Validate from './loginValidations';
import './Login.css'

const renderTextField = (
  { input, label, meta: { touched, error }, type = "input", ...custom },
) => (
  <TextField
    hintText={label}
    type={type}
    floatingLabelText={label}
    variant="outlined"
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="formContainer">
      <div className="wrapper">
      <div className="formHeading"><h3>Login here</h3></div>
      <div className="loginForm">
      <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="username"
          component={renderTextField}
          label="User Name"
        />
      </div>
      <div>
        <Field name="password" type="password" component={renderTextField} label="Password" />
      </div>
      <div className="buttonsContainer">
        <button className="primaryButton"  type="submit">Submit</button>
        <button className="secondaryButton" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
      </div>
      
    </div>
  );
};

export default reduxForm({
  form: 'loginForm',
  validate: Validate,
})(LoginForm);
