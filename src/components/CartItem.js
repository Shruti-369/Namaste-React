const CartItem = ({ item }) => {
  return (
    <div className="border-b p-2">
      <h3 className="font-semibold">{item.name}</h3>
      <p>₹{item.price / 100}</p>
    </div>
  );
};

export default CartItem;
