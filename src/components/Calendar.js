import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Calendar ({ setQrText }) {
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');


  function handleSubmit (e) {
    e.preventDefault();

    const dateStartFormatted = dateStart.replace(/-/g, "");
    const dateEndFormatted = dateEnd.replace(/-/g, "")

    setQrText(`BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:${dateStartFormatted}\nDTEND:${dateEndFormatted}\nSUMMARY:${title}\nEND:VEVENT\nEND:VCALENDAR`);

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
        <Form.Control type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  )
}

export default Calendar