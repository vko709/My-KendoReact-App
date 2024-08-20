import * as React from "react";
import {
  Chat,
  ChatMessageSendEvent,
  Message,
} from "@progress/kendo-react-conversational-ui";
import SearchComponent from "./search";
 
const user = {
  id: 1,
  avatarUrl:
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg",
  avatarAltText: "User",
};
 
const bot = {
  id: 0,
  avatarUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_A5Wpa9ff7Ote5arkGDkrPs6PYo2HQigTQ&s",
  avatarAltText: "Bot",
 };
 
const initialMessages = [
  {
    author: bot,  
    timestamp: new Date(),
    text: "Hello, this is your Virtual Assistant! I can help you with any questions you may have.",
  },
  {
    author: user,    
    timestamp: new Date(),
    text: "Do we insure aircraft?",
  },
  {
    author: bot,
    suggestedActions: [
      {
        type: "reply",
        value: "Tell me anyways!",
      },
    ],
    timestamp: new Date(),
    text: "Sorry! I dont have information about this.",
  },
];
 
const App = () => {
  const [messages, setMessages] = React.useState(initialMessages);
 
  const addNewMessage = (event) => {
    let botResponse = Object.assign({}, event.message);
    botResponse.text = countReplayLength(event.message.text);
    botResponse.author = bot;
    setMessages([...messages, event.message]);
    setTimeout(() => {
      setMessages((oldMessages) => [...oldMessages, botResponse]);
    }, 1000);
  };
 
  const countReplayLength = (question) => {
    let length = question?.length;
    let answer = question + " contains exactly " + length + " symbols.";
    return answer;
  };
 
  return (
    <div>
      {/* <Chat
        user={user}
        messages={messages}
        onMessageSend={addNewMessage}
        placeholder={"Enter your query..."}
        width={450}
      /> */}
      <SearchComponent />
    </div>
  );
};
 
export default App;