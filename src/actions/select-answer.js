const selectAnswer = (questionId, answerIdx) => {
  return {
    type: "USER_SELECT_ANSWER",
    payload: { questionId, answerIdx }
  };
};

export default selectAnswer;
