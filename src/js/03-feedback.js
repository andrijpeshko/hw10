import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
  button: document.querySelector('.feedback-form button'),
};

const formData = {
  email: '',
  message: '',
};
let currentFormData = formData;

resultForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.button.addEventListener('click', onBtnSubmit);

function onFormInput(e) {
  currentFormData = {
    ...currentFormData,
    [e.target.name]: e.target.value,
  };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(STORAGE_KEY, value);
}

function onFormSubmit(e) {
  e.preventDefault();
 
   const value = JSON.stringify(FormData);
  localStorage.setItem(STORAGE_KEY, value);
  refs.form.reset();
 STORAGE_KEY.removeItem('feedback-form-state');
}

function populateMessageEmail() {
  currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || formData;
  return currentFormData;
}

function resultForm() {
  const { email, message } = populateMessageEmail();
  refs.input.value = email;
  refs.textarea.value = message;
}

function onBtnSubmit() {
  if (refs.textarea.value === '' || refs.input.value === '') {
    return alert('Your form has empty fields. Add information and try again.');
  }
  console.log(currentFormData);
}
