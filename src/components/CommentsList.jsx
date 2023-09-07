import { Component } from "react";
//import Card from "react-bootstrap/Card";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>CommentsList</h3>
        {this.props.datacom.map(elem => {
          return <SingleComment key={elem._id} data={elem} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
