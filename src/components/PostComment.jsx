import { Component } from "react";
//import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class PostComment extends Component {
  state = {
    Comment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  render() {
    return (
      <Form>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One Star</option>
          <option value="2">Two Stars</option>
          <option value="3">Three Stars</option>
          <option value="4">Four Stars</option>
          <option value="5">Five Stars</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Write Your Comment Here</Form.Label>
          <Form.Control type="text" placeholder="..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default PostComment;
