// rcc

import React, { Component } from "react";

export default class RenderGlasses extends Component {
  render() {
    return (
      <img
        src={this.props.element.url}
        alt=""
        width={250}
        height={125}
        style={{
          borderRadius: 40,
          border: "1px dashed black",
          cursor: "pointer",
          margin: "30px 20px",
        }}
        onClick={() => this.getGlassesColor(this.props.element.url)}
      />
    );
  }
}
