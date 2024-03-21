// Write your code here.
import './index.css'

const CardItem = props => {
  const {personDetails} = props
  const {title, description, imgUrl, className} = personDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
