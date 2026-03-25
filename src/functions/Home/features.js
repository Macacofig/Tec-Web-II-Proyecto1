// Selección del contenedor
const track = document.querySelector('.features__track');

// ==========================
// 1. SCROLL CON BOTONES
// ==========================

// 1. Crear y configurar botones
const btnLeft = document.createElement('button');
const btnRight = document.createElement('button');

btnLeft.innerHTML = '‹';
btnRight.innerHTML = '›';

btnLeft.classList.add('features__btn', 'left');
btnRight.classList.add('features__btn', 'right');

document.querySelector('.features').appendChild(btnLeft);
document.querySelector('.features').appendChild(btnRight);

// 2. Lógica de navegación
btnRight.addEventListener('click', () => {
    // Calculamos el ancho de una carta + el gap para un scroll exacto
    const cardWidth = document.querySelector('.card').offsetWidth + 30; 
    track.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});

btnLeft.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 40;
    track.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});


// ==========================
// 2. DRAG CON MOUSE
// ==========================

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
});

track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
});

track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidad

    track.scrollLeft = scrollLeft - walk;
});


// ==========================
// 3. TOUCH (CELULAR)
// ==========================

let touchStartX = 0;
let touchScrollLeft = 0;

track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = track.scrollLeft;
});

track.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.5;

    track.scrollLeft = touchScrollLeft - walk;
});