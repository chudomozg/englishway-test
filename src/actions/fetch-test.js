import testRequested from "./test-requested";
import testLoaded from "./test-loaded";
import testError from "./test-error";

const fetchTest = (service, dispatch) => () => {
  console.log("hello");
  dispatch(testRequested());
  service
    .getAllQuestions()
    .then(data => dispatch(testLoaded(data)))
    .catch(error => dispatch(testError(error)));
};

export default fetchTest;
