if ( document.getElementById('login') ) {
    document.getElementById('login').addEventListener('click', function() {
        var login = document.getElementById('login');
        var singup = document.getElementById('singup');
        login.style.display = 'block';
        singup.style.display = 'none';
    });
} else {
    document.getElementById('login-form').style.display = 'block';
}
