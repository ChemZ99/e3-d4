import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./assets/fantasy.json";
import history from "./assets/history.json";
import horror from "./assets/horror.json";
import romance from "./assets/romance.json";
import scifi from "./assets/scifi.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {fantasy.map((book, index) => (
            <Col key={`fantasy-${index}`} xs={12} md={6} xl={3}>
              <Card>
                <Card.Img
                  style={{ height: "600px", objectFit: "contain" }}
                  className="img-fluid"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {history.map((book, index) => (
            <Col key={`history-${index}`} xs={12} md={6} xl={3}>
              <Card>
                <Card.Img
                  style={{ height: "600px", objectFit: "contain" }}
                  className="img-fluid"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {horror.map((book, index) => (
            <Col key={`horror-${index}`} xs={12} md={6} xl={3}>
              <Card>
                <Card.Img
                  style={{ height: "600px", objectFit: "contain" }}
                  className="img-fluid"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {romance.map((book, index) => (
            <Col key={`romance-${index}`} xs={12} md={6} xl={3}>
              <Card>
                <Card.Img
                  style={{ height: "600px", objectFit: "contain" }}
                  className="img-fluid"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {scifi.map((book, index) => (
            <Col key={`scifi-${index}`} xs={12} md={6} xl={3}>
              <Card>
                <Card.Img
                  style={{ height: "600px", objectFit: "contain" }}
                  className="img-fluid"
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
