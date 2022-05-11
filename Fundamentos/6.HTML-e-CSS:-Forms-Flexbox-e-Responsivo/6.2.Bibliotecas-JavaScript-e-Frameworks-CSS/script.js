const sendButton = document.getElementById('send-button');
const deleteButton = document.getElementById('delete-button');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
});

document.getElementById('data').DatePickerX.init();