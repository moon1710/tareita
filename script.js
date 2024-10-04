document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 

      if (this.checkValidity()) {
        showModal();
      }
    });

  // Modalsito
  function showModal() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    document.getElementById("modalNombre").innerText = nombre;
    document.getElementById("modalEmail").innerText = email;
    document.getElementById("modalMensaje").innerText = mensaje;

    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
});
