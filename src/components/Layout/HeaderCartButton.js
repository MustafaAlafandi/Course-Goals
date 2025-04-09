import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  let [addBumpOnAdd, setAddBumpOnAdd] = useState(false);
  let buttonClasses = `${classes.button} ${addBumpOnAdd? classes.bump:''}`;
  useEffect(() => {
    console.log("I enter use Effect");
    if (ctx.items.length === 0){
        return;
    } 
    setAddBumpOnAdd(true);  
    let timer = setTimeout(()=>{setAddBumpOnAdd(false);},300);
    return ()=> clearTimeout(timer);
  }, [ctx.items]);
  return (
    <button className={buttonClasses} onClick={() => {props.onClick() }}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{props.numberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
