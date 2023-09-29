import React, { Component } from "react";
import Welcome from "./Welcome";
import "./css/index.css";
import Img from "./Img";
import WidgetTop from "./WidgetTop";
// import WidgetTopItem from "./WidgetTopItem";
import WidgetBot from "./WidgetBot";
import PopupModal from "./PopupModal";
import Modal1 from "./Modal1";
// import ExplorePopup from "./ExplorePopup";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid mybackground m-0 p-0">
        <div className="row">
          <div className="col-12">
            <Welcome />
          </div>
        </div>
        <div className="row smallwidgets">
          <div className="col-6">
            {" "}
            <Img />
          </div>
          <div className="col-6 widget__right">
            <WidgetTop />
            <WidgetBot />
          </div>
        </div>
      </div>
    );
  }
}
