import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

function Geolocation ({ setQrText }) {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);

  function getCurrentLocation () {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
      setLocationLoading(false);
    }, (err) => {
      alert(err.message);
      setLocationLoading(false);
    }, {
      enableHighAccuracy: true
    });
  }

  function handleSubmit (e) {
    e.preventDefault();

    setQrText('http://maps.google.com/maps?q=' + lat + ','+ long);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control type="text" value={long} onChange={(e) => setLong(e.target.value)} />
      </Form.Group>
      <Button variant="secondary" type="button" className="me-2" disabled={locationLoading} onClick={getCurrentLocation}>
        {locationLoading && <Spinner animation="border" className="me-2 align-middle" />}
        Set Current Location
      </Button>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Geolocation