import sendMailRequested from "./send-mail-requested";
import mailSended from "./mail-sended";
import sendMailError from "./send-mail-error";

const sendMails = (service, dispatch, testResult) => {
  dispatch(sendMailRequested());
  service
    .sendFinishData(testResult)
    .then(() => dispatch(mailSended()))
    .catch(error => dispatch(sendMailError(error)));
};

export default sendMails;
