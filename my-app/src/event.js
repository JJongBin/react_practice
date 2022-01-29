import $ from 'jquery';
import ReactDOM from 'react-dom';
import App from './App';

// LIST_ITEM ------------------------------------------------------------

const messages = ['Vanilla JavaScript', 'jQuery', 'React'];

// ADD_MESSAGE_CONTROL --------------------------------------------------

const handleAddMessage = () => {
  if ($('input').val() === '') return;
  messages.push($('input').val());
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

export default {
  messages,
  ClickAddMessage,
  KeyupAddMessage,
};
