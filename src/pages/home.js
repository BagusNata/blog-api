import React, { Component } from 'react';

export class home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPostData();
  }

  async getPostData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.setState({ posts: data });
  }

  getPostCards() {
    const data = [];
    this.state.posts.forEach((user, index) => {
      data.push(
        <div key={index} className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>{user.title}</h5>
            <p className='card-text'>{user.body}</p>
            <button type="button" className="btn btn-primary">Read more</button>
          </div>
        </div>
      );
    });
    return data;
  }

  render() {
    const postsCardJsx = this.getPostCards();
    return (
      <div>
        <h1 className='my-5 text-center'>Home page</h1>
        {postsCardJsx}
      </div>
    );
  }
}

export default home;
