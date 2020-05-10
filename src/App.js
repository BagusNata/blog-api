import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isloading: false
    }
  }

  async componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    console.log("data", data)
  }
  
  render() {
    return (
      <div>
        <h1>sadksan</h1>
      </div>
    )
  }
}

export default App
