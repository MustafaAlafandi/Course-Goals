import { useContext, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: +inputRef.current.value,
      price: props.meal.price,
    });
  };
  let inputRef = useRef();
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default MealItemForm;
