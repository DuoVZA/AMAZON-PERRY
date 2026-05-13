import './CategoryCard.css';

export function CategoryCard(props) {
  return <div className="CategoryCard">
    <div id='information'>
      <img src={props.item.img} alt={props.item.name}></img>
      <p>{props.item.name}</p>
    </div>
    <div id='seeAll'>
      <a>See all</a>
      <img src="./images/icons/card-arrow-right.png"></img>
    </div>
  </div>
}
