const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-item').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-item').classList.remove('active');
});


window.addEventListener("scroll", function () {
    var navSticky = document.getElementsByClassName("container")[0];
    navSticky.classList.toggle("navFixed", window.scrollY > 0);

})
