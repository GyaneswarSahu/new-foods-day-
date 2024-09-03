
// JavaScript for form validation and redirection
function handleLogin(event) {
    event.preventDefault();
    var form = document.getElementById('loginForm');
    if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        // Redirect to the admin dashboard page
        window.location.href = './admin/index.html';
    }
}
