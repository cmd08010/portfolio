import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ marginLeft: "100px" }}>
        <img
          src="Colleen_face.jpg"
          style={{
            height: "75%",
            width: "75%",
            borderRadius: "75px",
            margin: "30px",
          }}
        ></img>
      </div>
    );
  }
}

export default FeelingProud;
