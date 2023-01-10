//Import images
import tshirt from "../assets/clothes/tshirt.jpg";
import dress from "../assets/clothes/dress.jpg";
import jeans from "../assets/clothes/jeans.jpg";
import jacket from "../assets/clothes/jacket.jpg";
import sweater from "../assets/clothes/sweater.jpg";
import sneakers from "../assets/clothes/sneakers.jpg";
import boots from "../assets/clothes/boots.jpg";
import sandals from "../assets/clothes/sandals.jpg";
import heels from "../assets/clothes/heels.jpg";
import hat from "../assets/clothes/hat.jpg";
import bag from "../assets/clothes/bag.jpg";
//Create the function that returns the correct image based on the name prop
const renderImg = (src) => {
  switch (src) {
    case "T-Shirt":
      return tshirt;
    case "Dress":
      return dress;
    case "Jeans":
      return jeans;
    case "Jacket":
      return jacket;
    case "Sweater":
      return sweater;
    case "Sneakers":
      return sneakers;
    case "Boots":
      return boots;
    case "Sandals":
      return sandals;
    case "Heels":
      return heels;
    case "Hat":
      return hat;
    case "Bag":
      return bag;
    default:
      return "";
  }
};
const ProductCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={renderImg(props.name)}
          alt={props.name}
          className="rounded-xl h-48 w-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.name}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
        <div className="stat">
          <div className="stat-value">${props.price}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
