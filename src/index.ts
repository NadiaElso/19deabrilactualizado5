let botonDelFormulario = document.getElementById("enviar");
let nombreUsuario = document.getElementById("nombreU");
function ingresandoNombre(): void {
  let nombre = nombreUsuario.value;
  if (nombre !== "" && nombre.length >= 3 && nombre.length <= 20) {
    console.log("es un nombre válido" + nombre);
  } else {
    console.log(
      "el campo nombre no debe ser vacio y tiene que tener entre 3 y 20 carácteres"
    );
  }
}

nombreUsuario?.addEventListener("input", ingresandoNombre);
botonDelFormulario?.addEventListener("click", ingresandoNombre);
let apellidoUsuario = document.getElementById("apellido");

function ingresandoApellido(): void {
  let apellido = apellidoUsuario.value;

  if (apellido !== "" && apellido.length >= 3 && apellido.length <= 20) {
    console.log("es un apellido válido" + apellido);
  } else {
    console.log(
      "el campo apellido no debe ser vacio y tiene que tener entre 3 y 20 carácteres"
    );
  }
}

apellidoUsuario?.addEventListener("input", ingresandoApellido);

let emailUsuario = document.getElementById("mail");
let companiaUsuario = document.getElementById("companiausuario");

function ingresandoEmail(): void {
  let email = emailUsuario.value;
  let compania = companiaUsuario.value;
  console.log(email + "@" + compania + ".com");

  if (
    email !== "" &&
    email.length >= 3 &&
    email.length <= 20 &&
    compania !== "" &&
    compania.length >= 5 &&
    compania.length <= 10
  ) {
    console.log("es un email válido");
  } else {
    console.log("el usuario no es vàlido");
  }
}

emailUsuario?.addEventListener("input", ingresandoEmail);
companiaUsuario?.addEventListener("input", ingresandoEmail);

let consultaUsuario = document.getElementById("consulta");

function consultaDeUsuario() {
  let usuarioConsulta = consultaUsuario.value;
  console.log(usuarioConsulta);
  if (usuarioConsulta !== "") {
    console.log("consulta serà enviada");
  } else {
    console.log("el campo consulta no debe quedar vacio");
  }
}

consultaUsuario?.addEventListener("input", consultaDeUsuario);
