const changeName = userName => {
  return {
    type: "CHANGE_USER_NAME",
    payload: userName
  };
};

export default changeName;
