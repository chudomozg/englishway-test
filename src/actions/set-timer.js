const setTimer = timerId => {
  return {
    type: "SET_TIMER",
    payload: timerId
  };
};

export default setTimer;
