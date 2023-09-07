import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    query: "",
  };

  render() {
    return (
      <>
        <Form.Group className="mb-5 mt-5">
          <Form.Label>Search a Book</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Query"
            onChange={ev => this.setState({ query: ev.target.value })}
          />
        </Form.Group>

        <Row>
          {this.props.Data.filter(element => element.title.toLowerCase().includes(this.state.query.toLowerCase())).map(
            (element, index) => (
              <SingleBook key={element.asin} element={element} />
            )
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
