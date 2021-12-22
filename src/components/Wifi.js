import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Wifi ({ setQrText }) {
  const [authentication, setAuthentication] = useState('nopass');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(false);


  function handleSubmit (e) {
    e.preventDefault();

    setQrText(`WIFI:T:${authentication};S:${name};${authentication !== 'nopass' ? `P:${password};` : ''}H:${hidden};`);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Authentication type</Form.Label>
        <Form.Select value={authentication} aria-label="Authentication" onChange={(e) => setAuthentication(e.target.value)}>
          <option value="nopass">No Password</option>
          <option value="WEP">WEP</option>
          <option value="WPA">WPA</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Network Name (SSID)</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password (Optional)</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hidden?</Form.Label>
        <Form.Check 
          type={'checkbox'}
          checked={hidden}
          onChange={(e) => setHidden(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Wifi