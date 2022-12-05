function getEntrada() {
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#password").value;

  let entrada = {
    email: email,
    senha: senha,
  };

  return entrada;
}

function mensagemDeErro(msg) {
  console.log(msg);
  document.querySelector("#mensagem-de-erro").textContent = msg;
}

function logar() {
  let dados = new FormData();
  let entrada = getEntrada();
  dados.append("email", entrada.email);
  dados.append("senha", entrada.senha);

  fetch("php/login.php", { method: "POST", body: dados })
    .then((raw) => raw.json())
    .then((res) => {
      console.log(res);
      if (res && res.status == "success") window.location.href = "missions.html";
      else mensagemDeErro("Dados de login inválidos");
    })
    .catch((erro) => {
      console.log(`error: ${erro.message}`);
    });
}

document.querySelector("#login-box").onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

$(document).ready(function () {
  Materialize.updateTextFields();
});
