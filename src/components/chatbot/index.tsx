// ChatBot.jsx

import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsapp from "../../assets/whatsapp.png"
const ChatBot = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+23490634683"
      accountName="PAC Registrars"
      notification
      notificationSound
      allowEsc
        allowClickAway
        avatar={whatsapp}
    />
  );
};

export default ChatBot;