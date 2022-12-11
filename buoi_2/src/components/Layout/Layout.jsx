//rcc

import React, { Component } from "react";
import data from "../../data/dataGlasses.json";
import RenderGlasses from "../RenderGlasses/RenderGlasses";

export default class Layout extends Component {
  state = {
    imageUrl: "./images/v1.png",
  };

  getGlassesColor = (imageUrl) => {
    const newState = {
      imageUrl: imageUrl,
    };

    this.setState(newState);
  };

  renderGlassesList = () => {
    return data.map((element) => {
      return (
        <RenderGlasses
          element={element}
          getGlassesColor={this.getGlassesColor}
        />
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("./images/background.jpg")',
          backgroundSize: "cover",
          height: 1000,
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div className="row align-items-center " width={"100%"} height={"100%"}>
          <div className="col-12  mb-5">
            <div className="container row mx-auto justify-content-around mt-5">
              <div className="col-5">
                <img
                  src="./images/model.jpg"
                  alt=""
                  width={400}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "30px",
                    boxShadow: "-20px 10px 40px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(0,0,0, 0.5)",
                  }}
                />
                <img
                  src={this.state.imageUrl}
                  alt=""
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    right: 0,
                    left: 92,
                    bottom: 275,
                    opacity: 0.9,
                  }}
                  width={250}
                />
              </div>
              <div className="col-5 ">
                <img
                  src="./images/model.jpg"
                  alt=""
                  width={400}
                  style={{
                    borderRadius: "30px",
                    boxShadow: "-20px 10px 40px rgba(0,0,0,0.3)",
                    border: "1px solid rgba(0,0,0, 0.5)",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-12"
            style={{
              border: "1px solid black",
              borderRadius: "40px",
              backgroundColor: "white",
            }}
          >
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
