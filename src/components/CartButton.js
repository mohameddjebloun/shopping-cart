import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
const CartButton = () => {
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={toggleCartHandler} className="btn gap-2">
      Cart
      <div className="badge">{cartItemsQuantity}</div>
    </button>
  );
};
export default CartButton;
