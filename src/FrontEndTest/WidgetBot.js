import React, { Component } from "react";
import { Data } from "iconsax-react";
import { Login } from "iconsax-react";
import { Logout } from "iconsax-react";

export default class WidgetBot extends Component {
  render() {
    return (
      <div className="widgetBot__Big">
        <div className="widgetBot__container">
          <div className="row" style={{ width: "80%", textAlign: "center",margin: "0 auto" }}>
            <div className="col-4 widget__item p-0">
              {" "}
              <div className="widgetBot__column">
                <div className="widgetBot__card">
                  <div className="widgetBot__icon">
                    <div className="widgetBot__circle">
                      <div className="widgetBot__innerCircle">
                        <div className="widgetBot__smallIcon">
                          <Data size="70" color="white" variant="Bold" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widgetBot__text text">Developer</div>
              </div>
            </div>
            <div className="col-4  widget__item  p-0">
              <div className="widgetBot__column">
                <div className="widgetBot__card">
                  <div className="widgetBot__icon">
                    <div className="widgetBot__innerCircle">
                      <div className="widgetBot__smallIcon">
                        <Login size="70" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widgetBot__text text">Message</div>
              </div>
            </div>
            <div className="col-4  widget__item  p-0">
              <div className="widgetBot__column">
                <div className="widgetBot__card">
                  <div className="widgetBot__icon" style={{transform:'rotate(180deg)'}}>
                    <div className="widgetBot__circle">
                      <div className="widgetBot__innerCircle">
                        <div className="widgetBot__smallIcon" >
                          <Logout size="70" color="white" variant="Bold" />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widgetBot__text text">Log out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
