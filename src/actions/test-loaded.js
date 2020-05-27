const testLoaded = test => {
  return {
    type: "FETCH_TEST_SUCCES",
    payload: test
  };
};

export default testLoaded;
