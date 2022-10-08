import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {name: '', date: '', appointmentDetails: []}

  onAddAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    const updatedAppDetails = {
      id: uuidv4(),
      name,
      date,
      isStarred: false,
    }
    if (name !== '') {
      this.setState(p => ({
        appointmentDetails: [...p.appointmentDetails, updatedAppDetails],
        name: '',
        date: '',
      }))
    }
  }

  nameChange = event => this.setState({name: event.target.value})

  dateChange = event => this.setState({date: event.target.value})

  staring = id => {
    this.setState(p => ({
      appointmentDetails: p.appointmentDetails.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, date, appointmentDetails} = this.state
    console.log(date)
    return (
      <div className="bg-container">
        <div className="main-card">
          <div className="card">
            <form className="form-container" onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointments</h1>
              <label htmlFor="name" className="label">
                TITLE
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Title"
                value={name}
                onChange={this.nameChange}
              />
              <label htmlFor="date" className="label">
                DATE
              </label>
              <input
                type="date"
                className="input"
                id="date"
                value={date}
                onChange={this.dateChange}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr />
          <div className="list-header">
            <h1>Appointments</h1>
            <button type="button" className="str-btn" onClick={this.staredItem}>
              Starred
            </button>
          </div>
          <ul className="list">
            {appointmentDetails.map(each => (
              <AppointmentItem
                item={each}
                key={each.id}
                staring={this.staring}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
