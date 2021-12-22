import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Instagram ({ setQrText }) {
  const [username, setUsername] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    setQrText('https://instagram.com/' + username);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Instagram