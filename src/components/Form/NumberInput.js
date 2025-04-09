import NumberInputStyles from  "./NumberInput.module.css";
const NumberInput = (props) => {
  return (
    <p>
      <label className={NumberInputStyles.label} htmlFor={props.id} value ={props.value}>
        {props.label}
      </label>
      <input className={NumberInputStyles.input} type="number" id={props.id}  onChange ={(event)=>{props.changeHandler(props.id,event.target.value)}}/>
    </p>
  );
};
export default NumberInput;
