import React from 'react'
import MyModal from './MyModal'
import StandartForm from './StandartForm'

const StandartModalForm = (props) =>
  <MyModal
    header={props.header}
    closeModal={props.closeModal}
    isOpen={props.isOpen}
    emptyFooter="true"
  >
    <StandartForm
      closeModal={props.closeModal}
      handleSubmit={props.handleSubmit}
      submitButtonTitle={props.submitTitle}
      element={props.element}
      renderFormElements={props.renderFormElements}
    />
  </MyModal>

export default StandartModalForm

// <StandartForm
// closeModal={this.props.closeModal}
// handleSubmit={this.props.handleSubmit}
// submitButtonTitle={this.props.submitTitle}
// element={this.props.element}
// renderFormElements={this.props.renderFormElements}
// />