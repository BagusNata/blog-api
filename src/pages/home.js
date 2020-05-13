import React, { Component } from 'react'

export class home extends Component {
  constructor() {
    super()
    this.state = {
       post: []
    }
  }
  
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({post: data})

    console.log("post :", this.state.post)
  };

  handleClick = (userId) => {
    console.log("clicked",userId)
  }

  
  
  
  render() {
    const postCardJSX = [];

    this.state.post.forEach((post,index) => {
      postCardJSX.push(
        <div className="card mt-4" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title} </h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.title} </h6>
            <p className="card-text">{post.body}</p>
            <button onClick={() => this.handleClick(post.id)} type="button" className="btn btn-primary">
              Read more
            </button>
          </div>
        </div>
      );
    })
    
    return (
      <div>
        <h1 className="header">home</h1>
        {postCardJSX}
        
      </div>
    );
  }
}

export default home
