import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import PostComment from "./PostComment";

class SingleBook extends Component {
  state = {
    selected: false,
    isPosting: false,
  };
  render() {
    return (
      <Col key={`${this.props.element.category}-${this.props.element.asin}`} xs={12} md={6} xl={3}>
        <Card className={`${this.state.selected ? "border-danger" : ""}`}>
          <Card.Img
            style={{ height: "600px", objectFit: "contain" }}
            className="img-fluid"
            variant="top"
            src={this.props.element.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.element.title}</Card.Title>
            <div>
              <Button onClick={() => this.setState({ isPosting: !this.state.isPosting })} variant="primary">
                Post Comment
              </Button>
              {this.state.isPosting && <PostComment asin={this.props.element.asin} />}
            </div>
            <div>{this.state.selected && <CommentArea asin={this.props.element.asin} />}</div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
