import { useState, useEffect, useContext, useRef } from "react";
import classes from "./Comment.module.css";
import Card from "./containers/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { feedbackContext } from "../contexts/feedbackContext";
import { Transition } from "react-transition-group";
const Comment = ({ comment, rate, id }) => {
  const [exist, setExist] = useState(false);
  const ctx = useContext(feedbackContext);
  const nodeRef = useRef(null);
  const editClickHandler = () => {
    ctx.setUpdatedFeedback({ id, text: comment, rating: rate });
    ctx.setTransferData(true);
  };
  const deleteClickHandler = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setExist(false);
    }
  };
  useEffect(() => {
    setExist(true);
  }, []);
  return (
    <Transition
      in={exist}
      timeout={300}
      onExited={() => ctx.deleteFeedback(id)}
      nodeRef={nodeRef}
    >
      {(state) => {
        return (
            <Card style={{ opacity: state === "entered" ? "1" : "0" }}>
              <li>
                <div className={classes.rate}>{rate}</div>
                <div className={classes.comment}>{comment}</div>
                <div className={classes.icons}>
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faPenToSquare}
                    fill="solid"
                    onClick={editClickHandler}
                  />
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faXmark}
                    fill="solid"
                    onClick={deleteClickHandler}
                  />
                </div>
              </li>
            </Card>
        );
      }}
    </Transition>
  );
};
export default Comment;
