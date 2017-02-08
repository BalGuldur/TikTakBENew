import React, {Component} from 'react'
import ContentLayout from '../layouts/ContentLayout'
import ButtonPlank from '../layouts/ButtonPlank'

class Menu extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('halls will mount')
  }
  componentDidMount() {
    this.props.initialUserSubscriptions()
  }
  componentWillUnmount() {
    this.props.cancelAllUserSubscriptions()
  }

  render = () => {
    console.log(this.props.myProp)

    return <div id="menu">
      <ContentLayout>
        <ButtonPlank>
          <div>Test Buttons</div>
        </ButtonPlank>
        <div>Test Menu</div>
      </ContentLayout>
    </div>
  }
}

export default Menu