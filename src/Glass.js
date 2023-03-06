import React, { Component } from "react";
import dataGlass from "./data/dataGlasses.json";
class Glass extends Component {
  state = {
    glassesCurrent: {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  randerDataGlass = () => {
    return dataGlass.map((glassesItem, i) => {
      return (
        <img
          onClick={() => {
            this.changGlasses(glassesItem);
          }}
          className="border p-2 "
          style={{ cursor: "pointer", width: "120px" }}
          key={i}
          src={glassesItem.url}
        />
      );
    });
  };

  changGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "2000px",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: "2000px" }}
        >
          <h3
            style={{ backgroundColor: "rgba(255, 99, 71, 0.4)" }}
            className="p-3"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "40%" }}
                    src="./glassesImage/model.jpg"
                    alt=""
                  />
                  <img
                    className="position-absolute"
                    style={{ top: "80px", left: "378px", width: "136px" }}
                    src={this.state.glassesCurrent.url}
                    alt=""
                  />
                  <div
                    className="position-relative text-start"
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      width: "255px",
                      left: "318px",
                      top: "208px",
                      backgroundColor: "rgba(226, 81, 55, 0.65)",
                    }}
                  >
                    <p
                      className="mb-0 fw-bold ms-2"
                      style={{ color: "blueviolet" }}
                    >
                      {this.state.glassesCurrent.name}
                    </p>
                    <p
                      className=" ms-2 mb-0"
                      style={{ color: "white", fontSize: "13px" }}
                    >
                      {this.state.glassesCurrent.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "40%" }}
                  src="./glassesImage/model.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-light mt-5 container d-flex justify-content-around p-5">
              {this.randerDataGlass()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Glass;
