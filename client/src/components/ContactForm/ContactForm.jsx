import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import './ContactForm.scss'

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Form submitted:", { name, email, message });
  };
  return (
    <>
<h1 className="pb-2 fw-bold">Contact </h1>
    <section className="contact_page shadow-lg rounded p-3 fw-semibold">
   
    <Form onSubmit={handleSubmit} className="border  p-2 rounder" >
      <Form.Group className="mb-3" controlId="formName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        {/* <Form.Label>Message</Form.Label> */}
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
      </Form.Group>

      <Button className="w-100" variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
          </>
  );
}

export default ContactForm;
