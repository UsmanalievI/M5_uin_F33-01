import React from 'react';
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function ReegistrationPage() {
  const [validated, setValidated] = useState(false);
  const {preloader}=useSelector(state=>state.preloaderReducer)
  const regExp=/^[A-Za-z0-9_+-.]+@gmail\.com$/;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
        {preloader ? <Spinner animation='border' role='status'/>:
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Ilichbek"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Usmanaliev"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>E-Mail</Form.Label>
                <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="E-Mail"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
        }
    </Container>
  );
}

export default ReegistrationPage;