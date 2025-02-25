document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formularioTrabaja');
    
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      // Limpiar mensajes de error previos
      const errores = document.querySelectorAll('.error');
      errores.forEach(error => error.textContent = '');

      let validado = true;
  
      const nombre = document.getElementById('nombre').value;
      if (!nombre || !/^[a-zA-Z\s]+$/.test(nombre)) {
        document.getElementById('errorNombre').textContent = "Por favor, ingrese un nombre válido (solo letras).";
        document.getElementById('errorNombre').style.display = 'block';
        validado = false;
      }
  
      const apellido = document.getElementById('apellido').value;
      if (!apellido || !/^[a-zA-Z\s]+$/.test(apellido)) {
        document.getElementById('errorApellido').textContent = "Por favor, ingrese un apellido válido (solo letras).";
        document.getElementById('errorApellido').style.display = 'block';
        validado = false;
      }
  
      const correo = document.getElementById('correo').value;
      const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!correo || !regexCorreo.test(correo)) {
        document.getElementById('errorCorreo').textContent = "Por favor, ingrese un correo electrónico válido.";
        document.getElementById('errorCorreo').style.display = 'block';
        validado = false;
      }
 
      const telefono = document.getElementById('telefono').value;
      if (telefono && !/^\d+$/.test(telefono)) {
        document.getElementById('errorTelefono').textContent = "Por favor, ingrese un teléfono válido (solo números).";
        document.getElementById('errorTelefono').style.display = 'block';
        validado = false;
      }

      const mensaje = document.getElementById('mensaje').value;
      if (!mensaje) {
        document.getElementById('errorMensaje').textContent = "Por favor, ingrese un mensaje.";
        document.getElementById('errorMensaje').style.display = 'block';
        validado = false;
      }

      const curriculum = document.getElementById('curriculum').files[0];
      if (!curriculum) {
        document.getElementById('errorCurriculum').textContent = "Por favor, adjunte su currículum.";
        document.getElementById('errorCurriculum').style.display = 'block';
        validado = false;
      } else {
        const ext = curriculum.name.split('.').pop().toLowerCase();
        if (!['pdf'].includes(ext)) {
          document.getElementById('errorCurriculum').textContent = "El currículum debe ser en formato PDF.";
          document.getElementById('errorCurriculum').style.display = 'block';
          validado = false;
        }
      }
  
      if (!validado) {
        alert("No se puede enviar el formulario. \n" + "Por favor, solucione los errores en la información intrducida.");
        event.preventDefault();
      }else {
        alert("El formulario se envió correctamente");
        formulario.submit();  
      }
    });
  });
  