document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //get email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})


