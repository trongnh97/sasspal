window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    //get position of header_navbar
    var sticky = header_navbar.offsetTop;
    var logo = document.querySelector('.navbar-brand img');

      //check scroll down with position of sticky
    if (window.pageYOffset > sticky) {
      //add class sticky
        header_navbar.classList.add("sticky");
        logo.src = 'img/logo-2.svg';
    } else {
      //remove class sticky
        header_navbar.classList.remove("sticky");
        logo.src = 'img/logo.svg';
    }



    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";

    }
};