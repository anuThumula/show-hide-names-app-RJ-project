// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    onFirstName: false,
    onLastName: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({
      onFirstName: !prevState.onFirstName,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      onLastName: !prevState.onLastName,
    }))
  }

  getBtn1 = () => {
    const {onFirstName, onLastName} = this.state
    return onFirstName ? 'joe' : ''
  }

  getBtn2 = () => {
    const {onFirstName, onLastName} = this.state
    return onLastName ? 'jonas' : ''
  }

  render() {
    const {onFirstName, onLastName} = this.state
    const bg1 = onFirstName ? '' : 'names'
    const bg2 = onLastName ? '' : 'names'

    const btnText1 = this.getBtn1()
    const btnText2 = this.getBtn2()

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-cont">
            <button className="btn1" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>

            <button className="btn2" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
          </div>

          <div className="names-cont">
            <p className={`first-name ${bg1}`}>{btnText1}</p>

            <p className={`last-name ${bg2}`}>{btnText2}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
