document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const chips = document.querySelectorAll('.chip');
    const track = document.getElementById('carouselTrack');
    const modal = document.getElementById('product-modal');
    const cards = document.querySelectorAll('.product-card');
    
    // Elementos internos del modal
    const modalTitle = document.getElementById('modal-titulo');
    const modalDetail = document.getElementById('modal-detalle');
    const modalPrice = document.getElementById('modal-precio');
    const modalImg = document.getElementById('modal-img');
    const modalCat = document.getElementById('modal-categoria'); // Corregido el ID

    /**
     * LÓGICA DEL CARRUSEL
     */
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const index = chip.getAttribute('data-index');
            track.style.transform = `translateX(-${index * 25}%)`;
        });
    });

    /**
     * LÓGICA DEL MODAL
     */
    const openModal = (card) => {
        // Extraer datos de la card
        const title = card.querySelector('h3').innerText;
        const detail = card.getAttribute('data-detail');
        const price = card.getAttribute('data-price');
        const category = card.getAttribute('data-cat') || "General";
        const imgSrc = card.querySelector('img').src;

        // Inyectar datos
        if(modalTitle) modalTitle.innerText = title;
        if(modalDetail) modalDetail.innerText = detail;
        if(modalPrice) modalPrice.innerText = price;
        if(modalImg) modalImg.src = imgSrc;
        if(modalCat) modalCat.innerText = category;

        // ACTIVAR MODAL (Usando la clase .active que tienes en tu SCSS)
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Eventos de las tarjetas
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(card);
        });
    });

    // Eventos de cierre
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});