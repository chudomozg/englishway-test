const selectAnswer = (questionId, AnswerIdx) => {
  return {
    type: "USER_SELECT_ANSWER",
    payload: { questionId, AnswerIdx }
  };
};

export default selectAnswer;
