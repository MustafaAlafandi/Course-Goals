import classes from "./Card.module.css";
function Card({ children, reverse = false, style }) {
  let s = reverse
    ? { backgroundColor: "rgba(0,0,0,0.4)", color: "white" }
    : {};
  s = { ...s, ...style };
  return (
    <div className={classes.card} style={s}>
      {children}
    </div>
  );
}

export default Card;
