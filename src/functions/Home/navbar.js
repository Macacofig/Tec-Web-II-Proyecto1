const links = document.querySelectorAll('.nav__list a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});