import React, { useEffect, useState } from "react";
export const feedbackContext = React.createContext({
  feedbacks: [],
  updatedFeedback: null,
  transferData: false,
  isLoading: true,
  loadingError: false,
  addFeedback: null,
  deleteFeedback: null,
  setUpdatedFeedback: null,
  setTransferData: null,
});

const Provider = (props) => {
  const [feedbacksList, setFeedbacksList] = useState([]);
  const [editedFeedback, setEditedFeedback] = useState(null);
  const [TData, setTData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      getFeedbacks();
    }, 500);
  }, []);
  const getFeedbacks = async () => {
    const response = await fetch("/feedbacks");
    if (response.status === 200) {
      const data = await response.json();
      setFeedbacksList(data);
    } else {
      setLoadingError(true);
    }
    setIsLoading(false);
  };
  const addFeedbackToServer = async (feedback) => {
    const response = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });
    return response.status === 200;
  };
  const deleteFeedbackFromServer = async (id) => {
    const response = await fetch("/feedbacks/" + String(id), {
      method: "DELETE",
    });
    return response.status === 200;
  };
  const editFeedbackInServer = async (newFeedback) => {
    const response = await fetch("/feedbacks/" + String(newFeedback.id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    return response.status === 200;
  };
  const add = (feedback) => {
    setFeedbacksList([
      feedback,
      ...feedbacksList.filter((ele) => ele.id !== feedback.id),
    ]);
    if (!feedbacksList.find((ele) => ele.id === feedback.id))
      addFeedbackToServer(feedback);
    else editFeedbackInServer(feedback);
  };
  const del = (id) => {
    setFeedbacksList(feedbacksList.filter((ele) => ele.id !== id));
    deleteFeedbackFromServer(id);
  };
  return (
    <feedbackContext.Provider
      value={{
        feedbacks: feedbacksList,
        updatedFeedback: editedFeedback,
        transferData: TData,
        isLoading: isLoading,
        loadingError: loadingError,
        addFeedback: add,
        deleteFeedback: del,
        setUpdatedFeedback: setEditedFeedback,
        setTransferData: setTData,
      }}
    >
      {props.children}
    </feedbackContext.Provider>
  );
};
export default Provider;
