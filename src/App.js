import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import QRCode from 'react-qr-code'
import Text from './components/Text'
import Geolocation from './components/Geolocation';
import Calendar from './components/Calendar';
import Mail from './components/Mail';
import Sms from './components/Sms';
import Call from './components/Call';
import Wifi from './components/Wifi';
import Youtube from './components/Youtube';
import Instagram from './components/Instagram';
import Twitter from './components/Twitter';

function App() {
  const [qrText, setQrText] = useState("");
  return (
    <Container className='mx-auto'>
      <h1 className='my-4'>Qr Generator</h1>
      {qrText.length > 0 && <QRCode value={qrText} />}
      <p className='text-muted mt-4'>
        <a href="#">Learn how this works</a> - <a href="https://github.com/shahednasser/react-qr-tutorial">View on GitHub</a>
        <a href="https://www.buymeacoffee.com/shahednasser" target="_blank" rel="noreferrer" className='buy-coffee mt-3'>
          <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" />
        </a>
      </p>
      <h4 className='my-3'>Choose the type of QRCode format</h4>
      <Tab.Container defaultActiveKey="text">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="text">Text and URLs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="geo">GeoLocation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="calendar">Calendar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mail">Mail</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="call">Call</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sms">SMS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wifi">Wifi</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="youtube">Youtube</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="instagram">Instagram</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="twitter">Twitter</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="text">
                <Text setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="geo">
                <Geolocation setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="calendar">
                <Calendar setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="mail">
                <Mail setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="call">
                <Call setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="sms">
                <Sms setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="wifi">
                <Wifi setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="youtube">
                <Youtube setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="instagram">
                <Instagram setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="twitter">
                <Twitter setQrText={setQrText} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
