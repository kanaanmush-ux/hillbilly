const form = document.querySelector('.formArea');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const checkbox = document.querySelector     ('#checkbox');
const loginButton = document.querySelector('#loginButton');

// event listeners
emailInput.addEventListener('focus', () => {
  emailInput.style.borderColor = 'blue';
});

emailInput.addEventListener('blur', () => {
  emailInput.style.borderColor = '';
}); 


//loginButton functionality
loginButton.addEventListener('click', (event) => {
//  redirect to another page if the email and password are entered correctly
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email && password) {
    window.location.href = 'anotherloginfile.html';
  }
});
