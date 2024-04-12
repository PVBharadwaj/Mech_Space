import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import './components/CSS/ChatBot.css';
import img2 from './assets/chatbot.png'
import axios from 'axios';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');


  const chatbotStyle = {
    height: '450px',
    overflowy: 'scroll'
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Mech Space',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Ask Email',
      validator: (value) => {
        setName(value);
        return true;
      },
    },
    {
      id: 'Ask Email',
      message: 'Hi!! {previousValue}. Please enter your email',
      trigger: 'waiting2',
    },
    {
      id: 'waiting2',
      user: true,
      trigger: 'Ask Query',
      validator: (value) => {
        setEmail(value);
        return true;
      },
    },
    {
      id: 'Ask Query',
      message: 'Please enter your query',
      trigger: 'waiting3',
    },
    {
      id: 'waiting3',
      user: true,
      trigger: 'Send Query',
      validator: (value) => {
        setQuery(value);
        return true;
      },
    },
    {
      id: 'Send Query',
      message: 'Thanks, we will get back to you soon',
      action: () => {
            axios.post('https://mech-space.onrender.com/Chatbot', { name, email, query })
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error('Error sending query:', error);
              });
          },
      end: true
    },
  ];

  const handleToggleChatbot = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <Segment floated="right">
          <ChatBot className="chatbot" steps={steps} style={chatbotStyle} />
        </Segment>
      )}
      <div
        className="chatbot-icon"
        style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
        onClick={handleToggleChatbot}
      >
        <div className='chatbot-icon-inner'>
            <img className='chatbot-img' src={img2} alt='chatbot' />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
