import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { FormRow, Alert } from '../components';
import RegisterPageWrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

function Register() {
  const [values, setValues] = useState(initialState);
  // global state and usenavigate

  const handleChange = (e) => {
    console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <RegisterPageWrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <img src={logo} alt='' className='logo' />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </RegisterPageWrapper>
  );
}

export default Register;
