const changePhone = userPhone => {
  return {
    type: "CHANGE_USER_PHONE",
    payload: userPhone
  };
};

export default changePhone;
