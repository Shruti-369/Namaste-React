import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  //you should be subscribed to the right thing of the store , it is much efficient.
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return (
    <div className="min-h-[250px]">
      <div><h1 className="text-center text-xl m-6"><b className="text-xl font-bold inline-block
           bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400
           bg-clip-text text-transparent">Cart is empty</b> 🛒</h1></div>
      <div className="m-4"><h1>Add Items to the cart!</h1></div>
    </div>     
    );       
  }

  return (
    <div className="m-4 p-4 ml-[10%] mr-[10%]">
      <h1 className="text-2xl font-bold mb-4 ml-[50%]">Cart</h1>
        <button 
        className="p-2 m-2 rounded-lg bg-black text-white ml-[1200px]"
        onClick={handleClearCart}>Clear Cart</button>  
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {/* {cartItems.length === 0 && (
        <h1></h1>
      )} */}
    </div>
  );
};

export default Cart;
