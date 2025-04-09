import FormStyles from "./Form.module.css";
import NumberInput from "./NumberInput";
let currentSaving = "";
let yearlyContribution = "";
let expectedReturn = "";
let duration = "";
const Form = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      "current-savings": currentSaving,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      "duration": duration,
    };
    props.onSubmit(userInput);
  };
  function ChangeInputHandler(id, value) {
    if (id === "current-savings") currentSaving = value;
    else if (id === "yearly-contribution") yearlyContribution = value;
    else if (id === "expected-return") expectedReturn = value;
    else duration = value;
  }
  return (
    <form className={FormStyles.form} onSubmit={onSubmitHandler}>
      <div className={FormStyles["input-group"]}>
        <NumberInput
          id="current-savings"
          label="Current Savings ($)"
          changeHandler={ChangeInputHandler}
        />
        <NumberInput
          id="yearly-contribution"
          label="Yearly Savings ($)"
          changeHandler={ChangeInputHandler}
        />
      </div>
      <div className={FormStyles["input-group"]}>
        <NumberInput
          id="expected-return"
          label="Expected Interest (%, per year)"
          changeHandler={ChangeInputHandler}
        />
        <NumberInput
          id="duration"
          label="Investment Duration (years)"
          changeHandler={ChangeInputHandler}
        />
      </div>
      <p className={FormStyles.actions}>
        <button type="reset" className={FormStyles.button}>
          Reset
        </button>
        <button type="submit" className={FormStyles.buttonAlt}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
