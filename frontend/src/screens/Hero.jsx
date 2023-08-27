import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

export default function LoginDiv() {
  return (
    <Container>
    <h1>Mern Authentication</h1>
    <p>This is just a working template</p>
    <LinkContainer to='/logIn'>
        <Button variant="primary" className='mx-2'>Log In</Button>
    </LinkContainer>
    <LinkContainer to='/register'>
        <Button variant="secondary" className='mx-2'>Register</Button>
    </LinkContainer>
    </Container>
  );
}