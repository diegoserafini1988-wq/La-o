let carregou = false;

firebase.auth().onAuthStateChanged(user => {

  if (!carregou) {
    carregou = true;

    if (user) {
      if (window.location.pathname.includes("login.html")) {
        window.location.href = "app.html";
      }
    } else {
      if (!window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
      }
    }
  }

});
