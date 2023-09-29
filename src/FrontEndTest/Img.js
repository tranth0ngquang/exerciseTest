import React, { Component } from "react";

export default class Img extends Component {
  render() {
    return (
      <div className="img">
        <img
          className="img-fluid animate__animated animate__backInLeft"
          src="./img/chuan.png"
        ></img>
      </div>
    );
  }
}
