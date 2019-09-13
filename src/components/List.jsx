import React, { Component } from "react";

class List extends Component {
  state = {
    techs: ["node.js", "reactJs", "react native"]
  };
  render() {
    return (
      <ul>
        <li>node.js</li>
        <li>reactJs</li>
        <li>react Native</li>
      </ul>
    );
  }
}
export default List;
