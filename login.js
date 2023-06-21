// Login form
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Retrieve username and password from local storage
  const storedemail = localStorage.getItem('email');
  const storedpassword = localStorage.getItem('password');

  if (email === storedemail && password === storedpassword) {
    // Redirect to the success page
    window.location.href = 'index.html';
  } else {
    alert('Incorrect Data Entered!');
    loginForm.reset();
  }
});