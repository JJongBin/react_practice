import React from 'react';
import logo from './logo.svg';
import './App.css';
import event from './event';

function App() {
  return (
    <React.Fragment>
      <ul className="list">
        {event.messages.map((message, index) => (
          <li key={index} className="listItem">
            안녕! {message}
          </li>
        ))}
      </ul>
      <div className="addMessageControl" onClick={event.ClickAddMessage} onKeyUp={event.KeyupAddMessage}>
        <label htmlFor="addMessage-zek1">새로운 메시지</label>
        <input id="addMessage-zek1" type="text" />
        <button type="button">추가</button>
      </div>
    </React.Fragment>
  );
}

export default App;
