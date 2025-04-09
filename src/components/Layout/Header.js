import classes from "./Header.module.css";
import { Fragment,useContext } from "react";
import HeaderImageSource from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../store/cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((pre, cur) => pre + cur.amount, 0);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClickHCB} numberOfItems={numberOfItems}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImageSource} alt="A table full of delicions food!" />
      </div>
    </Fragment>
  );
};
export default Header;
