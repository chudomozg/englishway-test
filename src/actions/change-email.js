const changeEmail = userEmail => {
  return {
    type: "CHANGE_USER_EMAIL",
    payload: userEmail
  };
};

export default changeEmail;
