import 'bootstrap/dist/css/bootstrap.min.css';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlertDismiss from './AlertDismiss';
function BusinessCard() {
  return (
    <div className="Container">
      <AlertDismiss />
      <Container fluid="md">
        <Row>
          <Col lg="6 mx-auto">
            <Card className="  my-2 p-2 Card bg-dark shadow-lg">
              <Card.Img src="1655611259928.jfif" className="ProfileImage mx-auto mt-5 img-responsive"></Card.Img>
              <Card.Body className="text-center mx-1">
                <Card.Title className="text-light fs-1">Peter Skowronek</Card.Title>
                <Card.Subtitle className="text-warning fs-2">Software Developer</Card.Subtitle>
                <Button
                  className="EmailButton w-75 my-3 p-2 mt-3 text-dark fs-5 bg-light btn-outline-warning"
                  href="mailto:peterskowronek@my.ccsu.edu"
                >
                  <EnvelopeFill className="mx-2 my-1" />
                  Email
                </Button>
                <hr className="line"></hr>
                <h2 className="my-3 text-center text-light">About</h2>
                <p className="text-light text-center">
                  I am a recent college graduate who has completed a degree in <strong>computer science</strong> from
                  Central Connecticut State University. I am currently searching for a job and working on gaining
                  valuable skills in the mean time. I am currently learning React and used it here to create this
                  buisness card with the help of Bootstrap. Some skills that I possess are{' '}
                  <strong>C++, C#, Python, Java, JavaScript, HTML, CSS, Agile methodology, and SQL. </strong> I am a
                  very motivated invididual who will continue adding skills to my toolbox so that I can become a better
                  developer and problem solver.
                </p>
                <hr className="line"></hr>
                <h2 className="my-3 text-center text-light">Interests</h2>
                <p className="text-light text-center">
                  Some of my hobbies include learning, collecting various items such as sneaker, cards, and other items.
                  I also enjoy playing and watching sports like basketball, football, soccer, baseball and Formula 1. I
                  enjoy hiking and traveling as well. My most recent trip was to Acadia, Maine.
                </p>
                <hr className="line"></hr>
                <a href="https://www.linkedin.com/in/peter-skowronek/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-light fa-3x mx-3" />
                </a>
                <a href="https://github.com/1Pete3" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} className="text-light fa-3x mx-3" />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <AlertDismiss />
    </div>
  );
}
export default BusinessCard;
