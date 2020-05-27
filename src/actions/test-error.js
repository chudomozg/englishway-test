const testError = error => {
  return {
    type: "FETCH_TEST_FAILURE",
    payload: error
  };
};

export default testError;
