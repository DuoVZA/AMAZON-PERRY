import './CategoryCard.css';

export function CategoryCard(props) {
  return <div className="CategoryCard">
    <img src={props.img} alt={props.name}></img>
    <p>{props.name}</p>
    <a>See all <img src="./images/icons/card-arrow-right.png"></img></a>
  </div>
}