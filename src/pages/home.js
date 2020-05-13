import React, { Component } from "react";



export class home extends Component {
         constructor() {
           super();
           this.state = {
             isLoading: true,
             person: null
           };
         }

        async componentDidMount(){
          const url = "https://api.randomuser.me/";
          const response = await fetch(url);
          const data = await response.json();
          this.setState({person: data.results[0], isLoading:false})

          console.log("data :", this.state.person)

        }


         render() {
           if (this.state.isLoading) {
             return <div className="header">loading...</div>;
           };

           if (!this.state.isLoading) {
             return <div className="header">didn't get person</div>;
           };

           return (
             <div>
               <div>
                 <div>{this.state.person.name.title}</div>
                 <div>{this.state.person.name.first}</div>
                 <div>{this.state.person.name.last}</div>
                 <img src={this.state.person.picture.large} />
               </div>
             </div>
           );
         }
       }

export default home;
