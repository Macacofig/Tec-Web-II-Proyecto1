document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("Contact-Form");
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const reasonInput = document.getElementById("reason-input");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const reason = reasonInput.value;

        AddComentary(name, email, reason);

        event.target.reset();
    });
});