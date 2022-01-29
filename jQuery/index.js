// import './style.css';

// APP ------------------------------------------------------------------

const app = document.getElementById('app');

// LIST -----------------------------------------------------------------

const list = document.createElement('ul');
list.classList.add('list');

app.append(list);

// LIST_ITEM ------------------------------------------------------------

const messages = ['Vanilla JavaScript', 'jQuery', 'React'];

const createListItem = message => {
  const item = document.createElement('li');
  item.textContent = `안녕! ${message}`;
  item.classList.add('listItem');
  return item;
};

// ADD_MESSAGE_CONTROL --------------------------------------------------

const addMessageControl = document.querySelector('.addMessageControl');

const handleAddMessage = () => {
  const input = addMessageControl.querySelector('input');
  messages.push(input.value);
  input.value = '';
  render();
};

addMessageControl.addEventListener('click', e => {
  if (e.target.matches('button')) handleAddMessage();
});

addMessageControl.addEventListener('keyup', e => {
  if (e.key === 'Enter' && e.target.matches('input')) handleAddMessage();
});

// RENDER ---------------------------------------------------------------

const render = () => {
  list.innerHTML = '';

  messages.map(message => createListItem(message)).forEach($item => list.append($item));
};

render();
