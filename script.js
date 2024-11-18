window.onscroll = function() {
    shrinkHeader();
};

function shrinkHeader() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}
