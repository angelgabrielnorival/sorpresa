const CONTRASENA_CORRECTA = "021024";

function verificar() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("errorE");

  if (input === CONTRASENA_CORRECTA) {
    document.getElementById("login").style.display = "none";
    document.getElementById("sorpresa").style.display = "flex";
  } else {
    error.textContent = "Contraseña incorrecta 💔";
  }
}
