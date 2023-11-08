/* eslint-disable no-undef */
'use strict';
const uploadForm = document.querySelector('#uploadForm');
const modal = document.querySelector('dialog');
const message = modal.querySelector('#message');
uploadForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(uploadForm);
  try {
    const response = await fetch('/api/v1/students', {
      method: 'POST',
      body: formData,
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    message.textContent = json.message;
    modal.showModal();
  } catch (err) {
    console.error(err);
  }
});
