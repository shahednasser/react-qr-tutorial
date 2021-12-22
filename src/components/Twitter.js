import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Twitter ({ setQrText }) {
  const [type, setType] = useState('profile')
  const [text, setText] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    setQrText('https://twitter.com/' + (type === 'profile' ? text : 'intent/tweet?text=' + text));

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Select value={type} aria-label="Type" onChange={(e) => setType(e.target.value)}>
          <option value="profile">Profile</option>
          <option value="tweet">Tweet</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username or Tweet Text</Form.Label>
        <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Twitter