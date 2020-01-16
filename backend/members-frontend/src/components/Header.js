import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/31aRdGLBCYL._SX466_.jpg"
          width="100"
          className="text"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h1 className="text">Участники</h1>
      </div>
    );
  }
}

export default Header;
