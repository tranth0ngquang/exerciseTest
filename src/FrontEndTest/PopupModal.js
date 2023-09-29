import React, { Component } from 'react';
// import './PopupModal.css';

class PopupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalContent: '',
    };
  }

  handleCardClick = (content) => {
    this.setState({
      modalContent: content,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen, modalContent } = this.state;

    return (
      <div>
        <div className="popup__card" onClick={() => this.handleCardClick('Nội dung cho thẻ 1')}>
          Thẻ 1
        </div>
        <div className="popup__card" onClick={() => this.handleCardClick('Nội dung cho thẻ 2')}>
          Thẻ 2
        </div>
        <div className="popup__card" onClick={() => this.handleCardClick('Nội dung cho thẻ 3')}>
          Thẻ 3
        </div>

        {isModalOpen && (
          <div className="popup__modal-overlay">
            <div className="popup__modal">
              <button className="popup__close-button" onClick={this.closeModal}>
                Đóng
              </button>
              <div className="popup__modal-content">{modalContent}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PopupModal;
