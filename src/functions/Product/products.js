document.addEventListener('DOMContentLoaded', () => {
    // Seleccion de elementos del DOM
    const chips = document.querySelectorAll('.chip');
    const track = document.getElementById('carouselTrack');
    const modal = document.getElementById('product-modal');
    const cards = document.querySelectorAll('.product-card');
    
    // Elementos internos del modal para actualizacion dinamica
    const modalTitle = document.getElementById('modal-titulo');
    const modalDetail = document.getElementById('modal-detalle');
    const modalPrice = document.getElementById('modal-precio');
    const modalImg = document.getElementById('modal-img');
    const modalCat = document.querySelector('.modal-cat'); // Asegúrate de tener esta clase en tu HTML

    /**
     * LOGICA DEL CARRUSEL
     * Cambia la posicion del track basandose en el indice del chip (0, 1, 2, 3)
     */
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Actualizar estado visual de los chips
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // Mover el carrusel (cada seccion ocupa el 25% del ancho total del track de 400%)
            const index = chip.getAttribute('data-index');
            track.style.transform = `translateX(-${index * 25}%)`;
        });
    });

    /**
     * LOGICA DEL MODAL
     */
    
    // Funcion para abrir el modal con datos dinamicos
    const openModal = (card) => {
        // Extraer datos de la card
        const title = card.querySelector('h3').innerText;
        const detail = card.getAttribute('data-detail');
        const price = card.getAttribute('data-price');
        const category = card.getAttribute('data-cat') || "General";
        const imgSrc = card.querySelector('img').src;

        // Inyectar datos en el modal
        modalTitle.innerText = title;
        modalDetail.innerText = detail;
        modalPrice.innerText = price;
        modalImg.src = imgSrc;
        
        // Si tienes el elemento de categoria en el modal, lo actualiza
        if (modalCat) {
            modalCat.innerText = `Categoría: ${category}`;
        }

        // Mostrar modal y bloquear scroll del body
        modal.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    };

    // Funcion para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
    };

    // Asignar evento click a cada card
    cards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    // Eventos de cierre (Boton X y click fuera del contenido)
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Opcional: Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });
});