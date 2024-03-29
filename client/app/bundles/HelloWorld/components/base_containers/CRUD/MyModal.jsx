import React, {Component} from 'react'
import Modal from 'react-bootstrap-modal'
import * as lib from '../../../lib'

// isOpen - "true" or "false" - state modal
// header - text - Заголовок модалки
// modalSubmit - function - событие при submit
// modalClose - function - change state modal in parent
// children - отображаемое в Body модалки
// hideFooter - "true" "false" - скрытие footer
class MyModal extends Component {
  constructor(props) {
    super(props)
  }

  modalSubmit = () => {
    this.props.modalClose()
    this.props.modalSubmit()
  }

  renderFooter = () => {
    let submitTitle = this.props.submitTitle || "Применить"
    let hideFooter = lib.propToBool(this.props.hideFooter)

    if (!hideFooter) {
      return <Modal.Footer>
        <Modal.Dismiss
          className="btn btn-default"
          onClick={this.props.modalClose}
        >
          Отмена
        </Modal.Dismiss>
        <button
          className="btn btn-primary"
          onClick={this.modalSubmit}
        >
          {submitTitle}
        </button>
      </Modal.Footer>
    } else { return ""}
  }
  render = () => {
    let header = this.props.header || ""

    return <Modal
      show={this.props.isOpen}
      onHide={this.props.modalClose}
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

