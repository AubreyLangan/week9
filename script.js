$(document).ready(function() {
    $('#navabr-container').click(function(){
        alert('Navbar container was clicked!');
    });

    $('#navbar-container').load('navbar.html');

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('show');
    });
});