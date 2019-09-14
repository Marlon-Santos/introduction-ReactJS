import React, { Component } from "react";

class List extends Component {
  state = {
    newTech: "",
    techs: ["node.js", "reactJs", "react native"]
  };
  onChange = e => {
    this.setState({ newTech: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  removeList = e => {
    this.setState({
      techs: this.state.techs.filter(item => item !== e.value)
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <ul>
          {this.state.techs.map(value => {
            return (
              <li key={value}>
                {value}
                <button
                  type="button"
                  onClick={() => {
                    this.removeList({ value });
                  }}
                >
                  Remover
                </button>
              </li>
            );
          })}
          <input
            type="text"
            id="inputTech"
            onChange={this.onChange}
            value={this.state.newTech}
          ></input>
          <input type="submit"></input>
        </ul>
      </form>
    );
  }
}
export default List;
