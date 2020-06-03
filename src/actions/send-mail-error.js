const sendMailError = error => {
  return {
    type: "FETCH_SEND_MAIL_FAILURE",
    payload: error
  };
};

export default sendMailError;
