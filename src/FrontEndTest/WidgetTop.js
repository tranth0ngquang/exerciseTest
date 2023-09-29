import React, { Component } from "react";
import {
  Box,
  Building,
  Additem,
  InfoCircle,
  FavoriteChart,
  People,
  ShoppingCart,
  ChartSquare,
  TicketDiscount,
} from "iconsax-react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default class WidgetTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalContent: "",
      modalHeader: "", // Thêm state để lưu nội dung của thẻ h2

      cart: [], // State để lưu giỏ hàng
    };
  }

  // Hàm này sẽ mở modal và thiết lập nội dung modal và thẻ h2
  openModal(content, header) {
    this.setState({
      showModal: true,
      modalContent: content,
      modalHeader: header, // Cập nhật thẻ h2
    });
  }

  // Hàm này sẽ đóng modal
  closeModal() {
    this.setState({
      showModal: false,
      modalContent: "",
      modalHeader: "", // Đặt lại nội dung thẻ h2 khi đóng modal
    });
  }

  // Hàm này sẽ đóng modal khi người dùng click ra ngoài modal
  closeOnOverlayClick(e) {
    if (e.target.classList.contains("modal")) {
      this.closeModal();
    }
  }

  render() {
    const MyModalContent1 = () => {
      return (
        <div className="modal-margin">
          <div className="column">
            <div className="icon">
              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <Box size="32" color="white" variant="Bold" />
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Product Category</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <Building size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Company</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    const MyModalContent2 = () => {
      return (
        <div className="modal-margin" style={{ width: "100%" }}>
          <div className="column">
            <div className="icon">
              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <Additem size="32" color="white" variant="Bold" />
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Add Subscription</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <InfoCircle size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className="  text text-center">Public Information</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <FavoriteChart size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className="  text text-center">Business Information</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <People size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className="  text text-center">Connection</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    const MyModalContent3 = () => {
      return (
        <div className="modal-margin" style={{ width: "100%" }}>
          <div className="column">
            <div className="icon">
              <div className="popUp__smallItem" id="onlineshop">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <ShoppingCart size="32" color="white" variant="Bold" />
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Online Shop</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <ChartSquare size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Product Dashboard</p>
              </div>

              <div className="popUp__smallItem">
                <div className="d-flex justify-content-center">
                  <div className="circle">
                    <div className="shape">
                      <TicketDiscount size="32" color="white" variant="Bold" />{" "}
                    </div>
                  </div>
                </div>
                <p className=" text text-center">Offer Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div >
        <div className="container p-0 ">
          <div className="row" style={{ width: "90%", textAlign: "center" }}>
            <div
              className="col-sm-4 col-12 widget__item"
              onClick={() => this.openModal(<MyModalContent1 />, "Explore")}
            >
              <div className="column">
                <div className="card">
                  <div className="icon">
                    <div className="circle">
                      <div className="shape">
                        <Box size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                    <div className="circle">
                      <div className="shape">
                        <Building size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="icon display__opacity" style={{ opacity: 0 }}>
                    <div className="circle">
                      <div className="shape">
                        <Box size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                    <div className="circle">
                      <div className="shape">
                        <Building size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">Explore</div>
              </div>
            </div>
            <div
              className="col-sm-4 col-12  widget__item"
              onClick={() => this.openModal(<MyModalContent2 />, "Profiles")}
            >
              <div className="column">
                <div className="card">
                  <div className="icon">
                    <div className="circle">
                      <div className="shape">
                        <Additem size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                    <div className="circle">
                      <div className="shape">
                        <InfoCircle size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="icon">
                    <div className="circle">
                      <div className="shape">
                        <FavoriteChart size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                    <div className="circle">
                      <div className="shape">
                        <People size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">Profiles</div>
              </div>
            </div>
            <div
              className="col-sm-4 col-12 widget__item"
              onClick={() => this.openModal(<MyModalContent3 />, "Store")}
            >
              <div className="column">
                <div className="card">
                  <div className="icon">
                    <div className="circle">
                      <div className="shape">
                        <ShoppingCart size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                    <div className="circle">
                      <div className="shape">
                        <ChartSquare size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="icon">
                    <div className="circle">
                      <div className="shape">
                        <TicketDiscount
                          size="32"
                          color="white"
                          variant="Bold"
                        />{" "}
                      </div>
                    </div>
                    <div className="circle" style={{ opacity: 0 }}>
                      <div className="shape">
                        <ChartSquare size="32" color="white" variant="Bold" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">Store</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`modal ${
            this.state.showModal ? "show" : ""
          } modal__background align-items-center`}
          style={{ display: this.state.showModal ? "block" : "none" }}
          onClick={(e) => this.closeOnOverlayClick(e)}
        >
          <div className="popupItem-margin">
            <div className="modal-dialog ">
              <p className="modal-title modal__p">{this.state.modalHeader}</p>
              <div className="modal-content modal-content__background">
                <div className="modal-body">{this.state.modalContent}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`modal-backdrop fade ${
            this.state.showModal ? "show" : ""
          }`}
          style={{ display: this.state.showModal ? "block" : "none" }}
          onClick={() => this.closeModal()}
        ></div> */}
      </div>
    );
  }
}
