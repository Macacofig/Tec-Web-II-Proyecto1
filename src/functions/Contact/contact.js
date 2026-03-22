//comentaries of localStorage 
let listcomentaries = JSON.parse(localStorage.getItem("comentaries")) || [];


function saveComentaries() {
    localStorage.setItem("comentaries", JSON.stringify(listcomentaries));
}


function AddComentary(name, email, reason) {
    listcomentaries.push({ 
        name, email, reason 
    });
    saveComentaries(); // guardar en navegador
    loadComentaries();
    return listcomentaries;
}

function loadComentaries() {
    const container = document.querySelector(".comentaries-container");
    container.innerHTML = "";

    listcomentaries.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comentary-card");
        div.innerHTML = `
            <h3>${c.name}</h3>
            <p>${c.email}</p>
            <p>${c.reason}</p>
        `;
        container.appendChild(div);
    });
}

function clearComentaries() {
    listcomentaries = [];
    localStorage.removeItem("comentaries");
    console.log("Comentarios eliminados");
}

loadComentaries();