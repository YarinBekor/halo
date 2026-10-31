const modal = document.querySelector('dialog');

// Open the signup or demo dialog.
document.querySelectorAll('[data-dialog]').forEach((button) => {
  button.onclick = () => {
    document.querySelector('#dialog-title').textContent = button.dataset.dialog;
    modal.showModal();
  };
});

document.querySelector('#close').onclick = () => modal.close();

// Demo form only: connect this to your signup or booking service when ready.
document.querySelector('form').onsubmit = (event) => {
  event.preventDefault();
  document.querySelector('#feedback').textContent =
    'Thanks! This preview is ready for your booking or signup integration.';
};

document.querySelector('#menu').onclick = () => {
  const navigation = document.querySelector('nav');
  navigation.hidden = !navigation.hidden;
};
