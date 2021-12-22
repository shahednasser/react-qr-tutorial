import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Mail ({ setQrText }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  function handleSubmit (e) {
    e.preventDefault();

    setQrText(`MATMSG:TO:${to};SUB:${subject};BODY:${message};;`);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>To Email</Form.Label>
        <Form.Control type="email" value={to} onChange={(e) => setTo(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Mail