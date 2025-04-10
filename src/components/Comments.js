import classes from "./Comments.module.css";
import Comment from "./Comment";
import { useContext } from "react";
import { feedbackContext } from "../contexts/feedbackContext";
import Spinner from "./shared/Spinner";
const Comments = () => {
  const ctx = useContext(feedbackContext);
  const feedbacks = ctx.feedbacks;
  if (ctx.isLoading) {
    return <Spinner/>
  }
  if(ctx.loadingError){
    return <div className="error">
      <p>Error in loading feedbacks</p>
    </div>
  }
  return (
    <div className={classes.comments}>
      <div className={classes.inf}>
        <p>{feedbacks.length} Reviews</p>
        <p>
          Average Rating:{" "}
          {feedbacks.length
            ? Math.round(
                (feedbacks.reduce((pre, ele) => pre + ele.rating, 0) /
                  feedbacks.length) *
                  100
              ) / 100
            : 0}
        </p>
      </div>
      {feedbacks && feedbacks.length > 0 ? (
        <ul>
          {feedbacks.map((ele) => (
            <Comment
              key={ele.id}
              rate={ele.rating}
              comment={ele.text}
              id={ele.id}
            />
          ))}
        </ul>
      ) : (
        <p className={classes["no-elemnt"]}>There is no rating yet</p>
      )}
    </div>
  );
};
export default Comments;
