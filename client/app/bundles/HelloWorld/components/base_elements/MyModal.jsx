import React, {Component} from 'react'
import Modal from 'react-bootstrap-modal'

class MyModal extends Component {
  constructor(props) {
    super(props)
  }

  renderFooter = () => {
    if(this.props.emptyFooter) {
      return ""
    } else {
      return <Modal.Footer>
        <Modal.Dismiss className="btn btn-default">Отмена</Modal.Dismiss>
        <button
          className="btn btn-primary"
          onClick={this.props.submitModal}
        >
          Применить
        </button>
      </Modal.Footer>
    }
  }

  render = () => {
    return <Modal
      show={this.props.isOpen}
      onHide={this.props.closeModal}
      aria-labelledby="ModalHeader"
    >
      <Modal.Header closeButton>
        <Modal.Title id="ModalHeader">{this.props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {this.props.children}
      </Modal.Body>
      {this.renderFooter()}
    </Modal>
  }
}

export default MyModal

