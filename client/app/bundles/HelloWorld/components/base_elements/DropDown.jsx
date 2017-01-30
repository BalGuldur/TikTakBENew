// Компонент для отображения меню по нажатию на весь элемент
// Внутри компонента должен быть <ul className="dropdown-menu animated fadeInRight m-t-xs">
import React, {Component} from 'react'

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: false}
  }

  insertClassOpen = () => {
    if(this.state.opened) {
      return " open"
    } else {
      return ""
    }
  }

  changeOpen = () => {
    this.setState({opened: !this.state.opened})
  }

  render = () =>
    <div className={"dropdown" + this.insertClassOpen()} onClick={this.changeOpen}>
      {this.props.children}
    </div>
}

export {DropDown}