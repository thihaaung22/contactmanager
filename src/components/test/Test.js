import React, { Component } from "react";

class Test extends Component {
  state = { title: "", body: "" };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));

    console.log(this.state);
  }

  /* componentWillMount() {
    console.log("componetWillMount");
  }

  componentDidUpdate() {
    console.log("componetDidUpdate");
  }

  componentWillUpdate() {
    console.log("componetWillUpdate");
  }

  componentWillReceiveProps(nextProps, nextStaate) {
    console.log("componetWillReceiveMount");
  } */

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p className="lead">
          {title}
          {body}
        </p>
      </div>
    );
  }
}

export default Test;

// life cycle methods are only available in class component
