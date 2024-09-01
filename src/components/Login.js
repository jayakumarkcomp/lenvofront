import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { username, password });
      const token = response.data;
      // Set token in local storage or context API
      localStorage.setItem('token', token);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <br />
      <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <Button variant="contained" color="primary" type="submit">Login</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
