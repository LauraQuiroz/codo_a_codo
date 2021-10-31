document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert('Debe escribir un nombre');
      return;
    }
    var consulta = document.getElementById('email').value;
    if (consulta.length ==0) {
      alert('debe escribir un email');
      return;
    } 
    var consulta = document.getElementById('Textarea1').value;
    if (consulta.length < 6) {
      alert('La consulta debe tener mas de 6 caracteres');
      return;
    }
    this.submit();
  }