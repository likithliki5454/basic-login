import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      emails: "",
      password: "",
      number: "",
      items: [],
    };

  }

  componentDidMount() {
    localStorage.removeItem("Outputdata");
  }

  handleFormSubmit(event) {
    var newdata = [...this.state.items];
    newdata.push({
      username: this.state.username,
      emails: this.state.emails,
      password: this.state.password,
      number: this.state.number,
    });
    this.setState(
      {
        items: newdata,
      },
      () => {
        this.postdata();
        alert('Sucessfully submitted')
      }
    );
  }

  postdata = () => {
    localStorage.setItem("Outputdata", JSON.stringify(this.state.items));
    window.location.href = "/table";
  };

  render() {
    return (
      <div className="App">
        <form id="Form">
          <h1 id="lpn">PLEASE FILL THE FORM</h1>
          <label>
            Name:
            <input
              value={this.state.username}
              type="text"
              placeholder="Enter your name"
              id="username"
              onChange={(text) => {
                this.setState({
                  username: text.target.value,
                });
              }}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Email:
            <input
              value={this.state.emails}
              type="email"
              placeholder="Enter your eamil"
              id="email"
              onChange={(text) => {
                this.setState({
                  emails: text.target.value,
                });
              }}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password:
            <input
              value={this.state.password}
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={(pwd) => {
                this.setState({
                  password: pwd.target.value,
                });
              }}
              required
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Phone Number:
            <input
              value={this.state.number}
              type="number"
              placeholder="Enter your number"
              id="number"
              onChange={(phn) => {
                this.setState({
                  number: phn.target.value,
                });
              }}
              required
            />
          </label>
          <br></br>
          <br></br>
          <button
            id="bton"
            type="submit"
            value="Submit"
            onClick={this.handleFormSubmit.bind(this)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
