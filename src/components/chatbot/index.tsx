// // ChatBot.jsx

// import React from 'react';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';
// import { AiOutlineMessage } from 'react-icons/ai'; // Import the icon from react-icons

// const ChatBot = () => {
//   const handleNewUserMessage = (newMessage) => {
//     // Mock predefined questions and answers
//     const message = newMessage.toLowerCase().trim();
//     switch (message) {
//       case 'hello':
//         addResponseMessage('Hello! How can I assist you today?');
//         break;
//       case 'what services do you offer?':
//         addResponseMessage('We offer a variety of services. Please visit our website for details.');
//         break;
//       case 'contact information':
//         addResponseMessage('You can reach us at support@example.com or call us at +1234567890.');
//         break;
//       default:
//         addResponseMessage('I apologize, but I do not understand that question.');
//         break;
//     }
//   };

//   return (
//     <div className="chatbot-container bg-blue-500 text-white p-4 rounded-lg shadow-md">
//       <div className="chatbot-header flex items-center mb-4">
//         <div className="bg-blue-600 rounded-full p-2">
//           <AiOutlineMessage size={24} className="text-white" style={{ marginRight: '8px' }} /> {/* Icon */}
//         </div>
//         <h2 className="text-xl font-semibold ml-2">Chat Bot</h2>
//       </div>
//       <Widget
//         handleNewUserMessage={handleNewUserMessage}
//         subtitle="Ask me anything!"
//       />
//     </div>
//   );
// };

// export default ChatBot;
