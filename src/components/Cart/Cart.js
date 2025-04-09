import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const addHandler = (item)=>{
  const theItem = {...item};
   theItem.amount = 1;
   ctx.addItem(theItem);
  }
  const removeHandler = (id)=>{
   ctx.removeItem(id);
  }
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {ctx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addHandler.bind(null,item)} onRemove={removeHandler.bind(null,item.id)} />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClickClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClickClose}>Close</button>
        <button className={classes.button} onClick={()=>console.log("Ordering...")}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
