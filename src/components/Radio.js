import classes from "./Radio.module.css";
const RateNumber = ({ name, number, onChange, checked }) => {
  return (
    <>
      <input
        className={classes.input}
        id={name + String(number)}
        type="radio"
        name={name}
        value={number}
        checked={checked}
        onChange={() => onChange(number)}
      />
      <label className={classes.label} htmlFor={name + String(number)}>
        {number}
      </label>
    </>
  );
};
export default RateNumber;
