document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var senha = document.getElementById("password").value;
    if (senha === "1234") {
      window.location.href = "index-page.html";
    } else if (senha === "") {
      alert("Insira uma senha, por favor");
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  });
