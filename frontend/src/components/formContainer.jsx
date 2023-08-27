import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function formContainer({children}) {
  return (
    <Container>
        <Row>
            <Col md={12} lg={6}>{children}</Col>
        </Row>
    </Container>
  )
}
