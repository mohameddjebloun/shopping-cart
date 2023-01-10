import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
//Import images
import tshirt from "../../assets/clothes/tshirt.jpg";
import dress from "../../assets/clothes/dress.jpg";
import jeans from "../../assets/clothes/jeans.jpg";
import jacket from "../../assets/clothes/jacket.jpg";
import sweater from "../../assets/clothes/sweater.jpg";
import sneakers from "../../assets/clothes/sneakers.jpg";
import boots from "../../assets/clothes/boots.jpg";
import sandals from "../../assets/clothes/sandals.jpg";
import heels from "../../assets/clothes/heels.jpg";
import hat from "../../assets/clothes/hat.jpg";
import bag from "../../assets/clothes/bag.jpg";
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
const CartItem = (props) => {
  const dispatch = useDispatch();
  //Handle remove item
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.product.id));
  };
  //Handle add item
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
      })
    );
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={renderImg(props.product.name)}
          alt={props.product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{props.product.name}</h3>
          <p className="ml-4">${props.product.price}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {props.product.quantity}</p>
          <div className="flex">
            <button
              onClick={removeItemHandler}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              -
            </button>
          </div>
          <div className="flex">
            <button
              onClick={addItemHandler}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
