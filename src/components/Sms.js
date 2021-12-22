import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Sms ({ setQrText }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    setQrText(`smsto:${phoneNumber}:${message}`);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message (Optional)</Form.Label>
        <Form.Control type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Sms