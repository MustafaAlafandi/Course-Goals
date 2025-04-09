import "./AddUserInput.css";
const AddUserInput = (props) => {
  return (
    <div className="add-user-input">
      <label className="add-user-input__label" htmlFor={props.id}>{props.label}</label>
      <input className ="add-user-input__input"type={props.type} id={props.id} onChange={(event) => props.onChange(event)}></input>
    </div>
  );
};
export default AddUserInput;
