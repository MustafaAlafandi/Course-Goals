import classes from "./MealsSummery.module.css";
const MealsSummery = (props) => {
  return (
    <section className = {classes.summary}>
      <h2>Delicions Food, Delivered To You</h2>
      <p>
        Choose Your Favorite Meal From our broad selection of availble meals and
        enjoy a delicions lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredient, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummery;
