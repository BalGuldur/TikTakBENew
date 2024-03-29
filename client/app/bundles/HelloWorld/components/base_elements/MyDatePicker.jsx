import React, { Component } from 'react'
import DatePicker from 'react-bootstrap-date-picker'

class MyDatePicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: new Date().toISOString(),
    }
  }

  handleChange = (value, formattedValue) => {
    if (value != null) {
      this.setState({
        value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
        formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
      });
      this.props.handleChange(value)
    }
  }

  onClear = () => {
    this.handleChange(new Date().toISOString())
  }

  render = () => {
    return <div className="inline">

        <DatePicker
          id="example-datepicker"
          value={this.state.value}
          dateFormat="DD MM YYYY"
          className="inline"
          onChange={this.handleChange}
          showClearButton={this.props.showClearButton}
          showTodayButton={this.props.showTodayButton}
          onClear={this.onClear}
        />
    </div>
  }
}

export default MyDatePicker