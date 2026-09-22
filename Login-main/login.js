// Select the elements once. Variables make the event handlers easy to read.
const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('.toggle-password');
const submitButton = document.querySelector('.submit');

// This button does not submit the form. It changes the password field between
// "password" (dots) and "text" (visible characters). ARIA keeps the control clear
// for screen-reader users too.
passwordToggle.addEventListener('click', () => {
  const passwordIsHidden = passwordInput.type === 'password';
  passwordInput.type = passwordIsHidden ? 'text' : 'password';
  passwordToggle.setAttribute('aria-pressed', String(passwordIsHidden));
  passwordToggle.setAttribute('aria-label', passwordIsHidden ? 'Hide password' : 'Show password');
});

// A teaching demo must not send real credentials. After built-in validation succeeds,
// the button briefly changes state to show where a real sign-in request would begin.
// In production, replace the timeout with a secure HTTPS request; never log passwords.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity(); // Browser identifies the first invalid field.
    return;
  }
  submitButton.disabled = true;
  submitButton.classList.add('is-submitting');
  submitButton.textContent = 'Signing In...';

  // This is visual feedback only, not authentication.
  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.classList.remove('is-submitting');
    submitButton.textContent = 'Sign In';
  }, 900);
});
