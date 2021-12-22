import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Call ({ setQrText }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    setQrText("TEL:" + phoneNumber);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Call