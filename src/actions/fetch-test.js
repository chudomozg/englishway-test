import testRequested from "./test-requested";
import testLoaded from "./test-loaded";
import testError from "./test-error";

const fetchTest = (service, dispatch) => () => {
  dispatch(testRequested());
  service
    .getTest()
    .then(data => dispatch(testLoaded(data)))
    .catch(error => dispatch(testError(error)));
};

export default fetchTest;
