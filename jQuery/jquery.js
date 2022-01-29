// LIST -----------------------------------------------------------------

const $list = $('<ul class="list"></ul>');

$('#app').append($list);

// LIST_ITEM ------------------------------------------------------------

const messages = ['Vanilla JavaScript', 'jQuery', 'React'];

// ADD_MESSAGE_CONTROL --------------------------------------------------

const handleAddMessage = () => {
  messages.push($('input').val());
  $('input').val('');
  render();
};

$('.addMessageControl').click(e => {
  if (e.target.matches('button')) handleAddMessage();
});

$('.addMessageControl').keyup(e => {
  if (e.key === 'Enter' && e.target.matches('input')) handleAddMessage();
});

// RENDER ---------------------------------------------------------------

const render = () => {
  $list.html('');
  messages.map(message => $list.append($(`<li class="listItem">안녕! ${message}</li>`)));
};

render();
