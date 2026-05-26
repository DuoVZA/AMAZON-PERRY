import './ProductCard.css';

export default function ProductCard(props) {
  return <div className={'ProductCard '+props.item.size}>
    <div className={props.item.unavailable ? `${props.item.unavailable}` : 'hide'}><div><p>Out of stock</p><button>Stock alert</button></div></div>
    <button className={props.item.wishlist ? `${props.item.wishlist}` : 'hide'}><p>Remove</p></button>
    <div id='image'>
      <div className={props.item.sale} id="discount">
        <p>{props.discount}</p>
        <img src='./images/icons/discount-vector.png' />
      </div>
      <img src={props.item.img} />
    </div>
    <div id='information'>
      <p>{props.item.name}</p>
      <div id='icons'>
        <span id='stars'><img src='./images/icons/Icon-Star-full.png' /><p>{props.item.stars}</p></span>
        <span id='reviews'><img src='./images/icons/Icon-Comments.png' /><p>{props.item.comments}</p></span>
      </div>
    </div>
    <div id='price'>
      <p id='currentPrice'>$ {props.item.price}</p><p id='currentPriceCents'>{props.item.priceCents}</p>
      <p className={props.item.sale} id="oldPrice">{props.item.oldPrice}</p>
    </div>
  </div>
}