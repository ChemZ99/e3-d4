import { Component } from "react";
//import Card from "react-bootstrap/Card";

import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    isLoading: true,
    hasError: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njc3ZDEwYmNhMDAwMTQ1ODNmZTIiLCJpYXQiOjE2OTI5NTI0NDUsImV4cCI6MTY5NDE2MjA0NX0.ZV4YbUxty2vnx9jFkUmon4mlImMTNzrfNVxtYoPuLH0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    return (
      <div className="CommentArea">
        <h3>Commenti</h3>
        <CommentsList datacom={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
