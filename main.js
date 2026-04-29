let likedProfiles = [];

function like() {
    const card = document.getElementById("card");

    card.style.transform = "translateX(500px) rotate(30deg)";

    setTimeout(() => {
        checkMatch();
        nextProfile();
    }, 300);
}

function dislike() {
    const card = document.getElementById("card");

    card.style.transform = "translateX(-500px) rotate(-30deg)";

    setTimeout(() => {
        nextProfile();
    }, 300);
}

function nextProfile() {
    const profiles = [
        {nome: "Ana, 25", img: "https://randomuser.me/api/portraits/women/44.jpg"},
        {nome: "Julia, 22", img: "https://randomuser.me/api/portraits/women/65.jpg"},
        {nome: "Marina, 27", img: "https://randomuser.me/api/portraits/women/12.jpg"}
    ];

    let random = profiles[Math.floor(Math.random() * profiles.length)];

    const card = document.getElementById("card");

    card.style.transform = "none";

    card.innerHTML = `
        <img src="${random.img}">
        <h3>${random.nome}</h3>
        <p>Conexão especial 💘</p>
    `;
}

function checkMatch() {
    let matchChance = Math.random();

    if (matchChance > 0.7) {
        alert("💘 Deu Match!");
    }
}
