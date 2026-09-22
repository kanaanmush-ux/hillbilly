const views = { 'sign-in': document.querySelector('#sign-in-view'), forgot: document.querySelector('#forgot-password-view'), confirmation: document.querySelector('#confirmation-view') };
const loginForm = document.querySelector('#login-form');
const resetForm = document.querySelector('#forgot-password-form');
const passwordInput = document.querySelector('#password');
const passwordToggle = document.querySelector('.toggle-password');
const submittedEmail = document.querySelector('#submitted-email');
function showView(name) { Object.entries(views).forEach(([key, view]) => { view.hidden = key !== name; }); history.replaceState(null, '', name === 'sign-in' ? '#sign-in' : `#${name}`); }
document.querySelectorAll('[data-view]').forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); showView(link.dataset.view); }));
passwordToggle.addEventListener('click', () => { const hidden = passwordInput.type === 'password'; passwordInput.type = hidden ? 'text' : 'password'; passwordToggle.setAttribute('aria-pressed', String(hidden)); passwordToggle.setAttribute('aria-label', hidden ? 'Hide password' : 'Show password'); });
loginForm.addEventListener('submit', (event) => { event.preventDefault(); if (!loginForm.reportValidity()) return; const button = loginForm.querySelector('.submit'); button.disabled = true; button.textContent = 'Signing In...'; window.setTimeout(() => { button.disabled = false; button.textContent = 'Sign In'; }, 900); });
resetForm.addEventListener('submit', (event) => { event.preventDefault(); if (!resetForm.reportValidity()) return; submittedEmail.textContent = document.querySelector('#reset-email').value; showView('confirmation'); });
document.querySelector('#resend-button').addEventListener('click', () => showView('forgot'));
showView(location.hash === '#forgot' ? 'forgot' : 'sign-in');
