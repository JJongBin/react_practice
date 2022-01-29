import '../style.css';
import { createGreeting, Greeting } from './Greeting';

const listNode = document.createElement('ul');
const listItemTemplate = '<li class="listItem">{message}</li>';

listNode.classList.add('list');

// ---------------------------------------------------------------

const vanillaGreeting = new Greeting(
  '안녕! Vanilla JavaScript',
  listItemTemplate
);

vanillaGreeting.render(listNode);

// ---------------------------------------------------------------

createGreeting({
  message: '안녕! jQuery',
  template: listItemTemplate,
}).render(listNode);

// ---------------------------------------------------------------

createGreeting(
  {
    message: '안녕! React',
    template: listItemTemplate,
  },
  listNode
);

// ---------------------------------------------------------------

document.getElementById('app').append(listNode);
