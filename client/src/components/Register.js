import { useState, useEffect } from 'react';
import { Logo } from '../components';
import RegisterPageWrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  return <h1>Register</h1>;
}

export default Register;
