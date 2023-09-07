import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./BookList";
import { Component } from "react";
import Form from "react-bootstrap/Form";

class FilterBookList extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-5 mt-5">
          <Form.Label>Search a Book</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Query"
            onChange={ev => BookList.setState({ filter: { ...ev.target.value }, isSearching: true })}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default FilterBookList;
