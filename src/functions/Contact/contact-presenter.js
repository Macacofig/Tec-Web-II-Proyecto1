document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const reasonInput = document.getElementById("reason");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const reason = reasonInput.value;

        AddComentary(name, email, reason);

        event.target.reset();
    });
});