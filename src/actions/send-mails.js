import sendMailRequested from "./send-mail-requested";
import mailSended from "./mail-sended";
import sendMailError from "./send-mail-error";

const sendMails = (service, dispatch, totalData) => () => {
  dispatch(sendMailRequested());
  console.log(totalData);
  service
    .sendFinishData(totalData)
    .then(() => dispatch(mailSended()))
    .catch(error => dispatch(sendMailError(error)));
};

export default sendMails;
