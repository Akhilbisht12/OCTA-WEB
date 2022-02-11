import axios from "axios";
import { SERVER_URL } from "../config/variables";
const messageSend = async (phone, message, session) => {
  try {
    const sendmessage = await axios.post(
      `${SERVER_URL}/api/v1/conversation/sendSMS"`,
      {
        toPhone: phone,
        message,
        session,
      }
    );
    return sendmessage;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const mailSend = async (mail, subject, message, session) => {
  try {
    const sendmail = await axios.post(
      `${SERVER_URL}/api/v1/conversation/sendMail`,
      {
        mail,
        subject,
        message,
        session,
      }
    );
    return sendmail;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export { messageSend, mailSend };
