// import React, { Component } from 'react'

// export default class Semdata extends Component {
//     state = {
//         number:0,
//     }
//     getRandomNumber = () => {
//         this.setState({number:Math.round(Math.random()*100)})
//     }
//   render() {
//     return (
//         <div>
//             <h2>{this.state.number}</h2>
//             <button onClick={this.getRandomNumber}>click</button>
//       </div>
//     )
//   }
// }

import React, { Component } from "react";
import "./global.css";

export default class Semdata extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  // single increment it wont remmeber previous value
  //   Incre = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  //   Decre = () => {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   };
  //   Reset = () => {
  //     this.setState({
  //       count: 0,
  //     });
  //   };

    // 2nd method
  Incre = () => {
    this.setState(prevValue => ({
      count: prevValue.count + 10,
    }));
    this.setState(prevValue => ({
      count: prevValue.count + 10,
    }));
  };
  Decre = () => {
    this.setState(prevValue => ({
      count: prevValue.count - 10,
    }));
    this.setState(prevValue => ({
      count: prevValue.count - 10,
    }));
  };
  Reset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div>
        <section id="countGrade">
          <article>
            <h1>{this.state.count}</h1>
            <button onClick={this.Incre}>Increment</button>
            <button onClick={this.Decre}>Decrement</button>
            <button onClick={this.Reset}>Reset</button>
          </article>
        </section>
      </div>
    );
  }
}
