function scrollLeft() {
    document.querySelectorAll('.reviews-container').forEach(container => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });
}

document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);
