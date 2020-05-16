import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export class postDetail extends Component {
  postId;

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comment: [],
    };
  }

  componentDidMount() {
    this.postId = this.props.match.params.id;
    this.getPost();
    this.getComments();
  }

  async getPost() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ post: data });
    console.log("post :", this.state.post);
  }

  async getComments() {
    const url = `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ comment: data });
    console.log("comment :", this.state.comment);
  }

  renderPost() {
    let postBody = '';
    for (let i = 0; i < 10; i++) {
      postBody += " " + this.state.post.body;
    }

    return (
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title clr-title">{this.state.post.title} </h5>

          <h6 className="card-subtitle mb-2 text-muted">
            {this.state.post.title}
          </h6>
          <p className="card-text">{postBody}</p>
        </div>
      </div>
    );
  }

  render() {
    const commentCardJSX = [];

    this.state.comment.forEach((comment, index) => {
      commentCardJSX.push(
        <div className="card mt-4" key={index}>
          <div className="card-body">
            <h5 className="card-title clr-title">{comment.name} </h5>

            <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
            <p className="card-text">{comment.body}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {this.state.post ? this.renderPost() : null}
        <h5 style={{ marginTop: "30px" }}>Comment : </h5>
        {commentCardJSX}
      </div>
    );
  }
}

export default postDetail;
