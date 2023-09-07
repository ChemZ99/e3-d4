import { Component } from "react";
//import Card from "react-bootstrap/Card";

class SingleComment extends Component {
  state = {};
  render() {
    return (
      <>
        <p>{this.props.data.rate}</p> <p>{this.props.data.comment}</p>
      </>
    );
  }
}

export default SingleComment;
