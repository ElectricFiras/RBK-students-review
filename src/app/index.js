import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
    	<div>
          <h1>Welcome to RBK Students Evaluation</h1>
          <h3> Please Login first </h3>
          <form action='/rep' method="GET">
            Enter your Information : 
            <br/>
            <input type='text' placeholder = "username" name = "username"/>
            <input type='text' placeholder = "password"  name = "password"/>
            <button> Submit </button>
          </form>
        </div>
    	)
  }
}

render(
  <App  /> ,
  document.getElementById('app')
);