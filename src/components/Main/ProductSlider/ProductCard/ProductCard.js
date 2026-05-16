import './ProductCard.css';

export default function ProductCard(props) {
  return (
    <div className={`ProductCard-${props.size}`}>
      {/* <div className={props.unavailable}><div><p>Out of stock</p><button>Stock alert</button></div></div> */}
      {/* <button className="wishlist"><p>Remove</p></button> */}
      <div id='image'>
        <div className={props.sale} id="discount">
          <p>{props.discount}</p>
          <img src='/images/icons/discount-vector.png' alt="discount" />
        </div>
        <img src={props.img} alt={props.name} />
      </div>
      <div id='information'>
        <p>{props.name}</p>
        <div id='icons'>
          <span id='stars'><img src='/images/icons/Icon-Star-full.png' alt="star" /><p>{props.stars}</p></span>
          <span id='reviews'><img src='/images/icons/Icon-Comments.png' alt="comments" /><p>{props.comments}</p></span>
        </div>
      </div>
      <div id='price'>
        <p id='currentPrice'>$ {props.price}</p>
        <p id='currentPriceCents'>{props.priceCents}</p>
        <p className={props.sale} id="oldPrice">{props.oldPrice}</p>
      </div>
    </div>
  );
}