import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import classes from "./RateInputBox.module.css";
import Radios from "./Radios";
import { feedbackContext } from "../contexts/feedbackContext";
import Card from "./containers/Card";
import Button from "./Button";
const RateInputBox = () => {
  const ctx = useContext(feedbackContext);
  const [commentText, setCommentText] = useState("");
  const [rate, setRate] = useState(0);
  const [validateComment, setValidateComment] = useState(false);
  const [validateRate, setValidateRate] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (commentText !== "") {
        setIsTouched(true);
        setValidateComment(commentText.trim().length > 9);
        setValidateRate(rate > 0);
      }
    }, 1000);
    if (isTouched) {
      setValidateComment(commentText.trim().length > 9);
      setValidateRate(rate > 0);
    }
    return () => {
      clearTimeout(identifier);
    };
  }, [isTouched, commentText, rate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.addFeedback({
      id: ctx.updatedFeedback ? ctx.updatedFeedback.id : uuidv4(),
      text: commentText,
      rating:rate,
    });
    setCommentText("");
    ctx.setUpdatedFeedback(null);
    setIsTouched(false);
    setValidateComment(false);
  };
  const changeInputHandler = (e) => {
    setCommentText(e.target.value);
  };
  const changeRadioHandler = (rate) => {
    setRate(rate);
  };
  useEffect(() => {
    ctx.setTransferData(false);
    if (ctx.updatedFeedback && ctx.transferData) {
      setCommentText(ctx.updatedFeedback.text);
      setRate(ctx.updatedFeedback.rating);
    }
  }, [commentText, ctx]);
  let buttonClasses = `${classes["submit-input"]} `;
  buttonClasses +=
    commentText.trim().length > 9 && rate > 0
      ? `${classes["valid-button"]}`
      : ``;
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h3>How would you rate your service with us?</h3>
        <Radios
          className={classes.rate}
          name="RTB-rate"
          values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onChange={changeRadioHandler}
          checkedNumber={rate}
        />
        <div className={classes["comment-box"]}>
          <input
            type="text"
            className={classes["text-input"]}
            placeholder="Write a review"
            name="comment"
            onChange={changeInputHandler}
            value={commentText}
          />
          <Button
            type="submit"
            className={buttonClasses}
            isDisabled={!validateComment}
          >
            Send
          </Button>
          {/* <input type="submit" value="Send" className={buttonClasses} /> */}
        </div>
        {!validateComment && isTouched && (
          <p className={classes.alert}>Text must be at least 10 characters</p>
        )}
        {validateComment && !validateRate && isTouched && (
          <p className={classes.alert}>Choose rate</p>
        )}
      </form>
    </Card>
  );
};
export default RateInputBox;
