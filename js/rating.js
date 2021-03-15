let stars = document.querySelectorAll('.nStars span');

document.addEventListener('DOMContentLoaded', () => {
    stars.forEach(item => {
        item.addEventListener('click', function () {
            var rating = this.getAttribute('nRating');
            return setRating(rating, stars);
        });
    });
});

window.addEventListener('click', function (e) {
    if (document.querySelector('.container').contains(e.target)) {
        cleanStar();
    }
});

function setRating(rating, stars) {
    for (var i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].innerHTML = '<i class="fas fa-star"></i>';
        } else {
            stars[i].innerHTML = '<i class="far fa-star"></i>';
        }
    }
};

function cleanStar() {
    for (var i = 0; i < stars.length; i++) {
        stars[i].innerHTML = '<i class="far fa-star"></i>';
    }
};