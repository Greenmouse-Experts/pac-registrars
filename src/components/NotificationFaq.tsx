import { useState } from "react";
import FaqAccordion from "./Faqs/FaqAccordion";


function NotificationFaq() {
    const faqs = [
        {
          title: "What Is The Distinction Between A Notification And An E-notification?",
          answer:
            "Notifications appear on your screen, whereas e-Notification come from a server. E-Notification are similar to regular notifications, except the user has specifically chosen to receive them.            ",
        },
        {
          title: "Should I Turn On E-Notification? ",
          answer:
            "E-Notification are useful for retargeting strategies and promotion.            ",
        },
        {
          title: "Why Is This Known As A E-notification?",
          answer:
            "A user’s device receives a notification notice in real time since it is “sent” to the user’s device. “e-notification” message is transmitted immediately from a distant server to the system, even though the user is inactive.            ",
        },
        {
          title:
            "How Safe and Reliable Are E-Notification?            ",
          answer:
            "Mobile e-Notification are far more secure and reliable than other instant messaging platforms, including promotional SMS ",
        },
        {
          title:
            "How Can I Enable E-Notification?            ",
          answer:
            "By visiting www.pacregistrars.com , or send a request message to info@pacregistrars.com to enable the Administrator update the database with your information Setting app on your device.",
        },
        {
          title: "How Do I Send My Phone E-Notification?          ",
          answer: "Register with PAC Registrars & investor Service as a client and we update our records with shareholders record and they will start to receive any update you intend to share with them via phone or other devices          ",
        },
        {
          title: "Which Is More Effective: E-Notification Or SMS?",

          answer: "While short message service (SMS) and e-Notification can be used to reach clients, they serve different functions.",
        },
        {
          title: "How Can I Use E-Notification To Drive App Or Website Traffic?",
          answer:
            "To boost app or website traffic with e-Notification, consider sending timely and relevant updates, such as new content, promotions, or product releases. Use persuasive language and compelling visuals in your notifications. Segment your audience for targeted messaging, and schedule notifications at optimal times. Avoid excessive messaging to prevent user opt-outs.",
        },
       
      ];
      const [openIndex, setOpenIndex] = useState<number | null>(null);

      const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div>
         {faqs.map((faq, index) => (
              <FaqAccordion
                key={index}
                index={index}
                open={openIndex === index}
                title={faq.title}
                answer={faq.answer}
                toggleAccordion={toggleAccordion}
              />
            ))}
    </div>
  )
}

export default NotificationFaq