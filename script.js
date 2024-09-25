document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID
    var boton = document.getElementById("miBoton");

    // Agrega un evento de clic al botón
    boton.addEventListener("click", function() {
        alert("¡Has hecho clic en el botón!");
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active'); // Alterna la clase 'active' al hacer clic
    });
  });
  