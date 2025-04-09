import "./AddUserForm.css";
import AddUserInput from "./AddUserInput";
import React, { useState,useRef } from "react";
const AddUserForm = (props) => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  function onChangeHandler(event) {
    if (event.target.type === "text") setName(event.target.value);
    else setAge(event.target.value);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    if (name.trim().length === 0) props.onErrorInput("Please enter the name");
    else if(age.trim().length === 0)props.onErrorInput("Please enter the age");
    else if (+age < 10)
      props.onErrorInput("The age must be larger then or equal 10");
    else props.onAdd({ name: name, age: +age });
  }

  return (
    <form className="add-user-form" onSubmit={onSubmitHandler}>
      <AddUserInput
        type="text"
        label="Username"
        id="username"
        onChange={onChangeHandler}
      />
      <AddUserInput
        type="number"
        label="Age(Years)"
        id="age"
        onChange={onChangeHandler}
      />
      <button className="add-user-form__button" type="submit">
        Add User
      </button>
    </form>
  );
};
export default AddUserForm;
