import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormContainer from '../components/formContainer';
import {Link} from 'react-router-dom';

function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const submitHandler = () =>{
        e.preventDefault();
        console.log("login submit handler");
    } 
  return (
    <FormContainer>
     <h1>Sign Up</h1>   
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>  
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      Already have an account? <Link to='/login' className="mx-3">Login</Link>
    </Form>
    </FormContainer>
  );
}

export default RegisterScreen;