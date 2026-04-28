const profiles = [
  {name: "Ana, 23", bio: "Espiritualidade e paz ✨", photo: "https://via.placeholder.com/300"},
  {name: "Lucas, 27", bio: "Buscando conexão real 💬", photo: "https://via.placeholder.com/300"},
  {name: "Marina, 25", bio: "Energia boa e vibe leve 🌿", photo: "https://via.placeholder.com/300"}
];

let index = 0;

function updateCard() {
  document.getElementById("name").innerText = profiles[index].name;
  document.getElementById("bio").innerText = profiles[index].bio;
  document.getElementById("photo").src = profiles[index].photo;
}

function like() {
  alert("Você curtiu ❤️");
  next();
}

function dislike() {
  next();
}

function next() {
  index = (index + 1) % profiles.length;
  updateCard();
}

function login() {
  alert("Sistema de login em breve 🚀");
}

updateCard();