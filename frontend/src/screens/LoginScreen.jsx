import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormContainer from '../components/formContainer';
import {Link} from 'react-router-dom';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () =>{
        e.preventDefault();
        console.log("login submit handler");
    } 
  return (
    <FormContainer>
     <h1>Sign In form</h1>   
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <Link to='/register' className="mx-3">Register?</Link>
    </Form>
    </FormContainer>
  );
}

export default LoginScreen;