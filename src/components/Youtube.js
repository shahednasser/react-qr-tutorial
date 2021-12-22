import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Youtube ({ setQrText }) {
  const [videoId, setVideoId] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    setQrText('youtube://' + videoId);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Video ID</Form.Label>
        <Form.Control type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Youtube