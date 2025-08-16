import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ContactForm() {
  return (
    <section id="contact" className="p-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message" />
          </Form.Group>
          <Button variant="primary" type="submit">Send</Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactForm;
