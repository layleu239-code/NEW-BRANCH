document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const signInForm = document.getElementById('signin-form');
  const signUpForm = document.getElementById('signup-form');

  if (signInForm) {
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = signInForm.querySelector('.form-message');
      message.textContent = 'Signed in successfully!';
      message.style.color = '#10b981';
    });
  }

  if (signUpForm) {
    signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = document.getElementById('signup-password')?.value || '';
      const confirmPassword = document.getElementById('confirm-password')?.value || '';
      const message = signUpForm.querySelector('.form-message');

      if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.style.color = '#ef4444';
        return;
      }

      message.textContent = 'Account created successfully!';
      message.style.color = '#10b981';
    });
  }
});
