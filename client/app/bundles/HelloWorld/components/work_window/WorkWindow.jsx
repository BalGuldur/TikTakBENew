import React, {Component} from 'react'
import Halls from '../new_halls/HallsContainer'
import IBox from '../layouts/IBox'

class WorkWindow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choosed_place_ids: [],
    }
  }

  render = () => {
  return <div id="work_window">
    <Halls/>
  </div>
  }
}

export default WorkWindow