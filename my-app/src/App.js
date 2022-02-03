import $ from 'jquery';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import event from './event';

function App() {
  const [messages, setMessages] = useState(['Vanilla JavaScript', 'jQuery', 'React']);

  const handleAddMessage = () => {
    if ($('input').val() === '') return;
    // messages.push($('input').val());
    messages.push($('input').val());
    setMessages(messages);
    $('input').val('');
    ReactDOM.render(<App />, document.getElementById('root'));
  };

  const ClickAddMessage = e => {
    if (e.target.matches('button')) {
      console.log('ClickAddMessage');
      handleAddMessage();
    }
  };

  const KeyupAddMessage = e => {
    if (e.key === 'Enter' && e.target.matches('input')) {
      handleAddMessage();
      console.log(messages);
    }
  };
  return (
    <React.Fragment>
      <ul className="list">
        {messages.map((message, index) => (
          <li key={index} className="listItem">
            안녕! {message}
          </li>
        ))}
      </ul>
      <div className="addMessageControl" onClick={ClickAddMessage} onKeyUp={KeyupAddMessage}>
        <label htmlFor="addMessage-zek1">새로운 메시지</label>
        <input id="addMessage-zek1" type="text" />
        <button type="button">추가</button>
      </div>
    </React.Fragment>
  );
}

export default App;
