import './index.css'

const AppointmentItem = props => {
  const {item, staring} = props
  const {name, date, isStarred, id} = item

  const toggleStar = () => staring(id)

  const strUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-item">
      <div className="item-header">
        <p className="name">{name}</p>
        <button type="button" className="str-button" onClick={toggleStar}>
          <img src={strUrl} alt="" className="str" />
        </button>
      </div>
      <p className="date">Date:{date}</p>
    </li>
  )
}
export default AppointmentItem
