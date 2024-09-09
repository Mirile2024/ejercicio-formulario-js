const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {

  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  let nombre = document.querySelector("#email-input").value;
  console.log(`{email: ${nombre}}`)
  
  // 2. Obtenemos los datos ingresados en el input de password
  let contraseña = document.querySelector("#password-input").value;
  console.log(`{email: ${nombre}, password: ${contraseña}}`)

  // 3. Obtenemos el valor del input radio
  // const mayorEdad = document.querySelector(`[name=legalAge]:checked`)

  // console.log(`{email: ${nombre}, password: ${contraseña},Mayor de edad: ${mayorEdad.value}}`)

  // 4. Obtenemos el valor del input checkbox

  const terminos = document.getElementsByName("termsAndConditions");
  terminos.forEach(function(termino) {
    console.log(`Acepta los terminos: ${termino.checked}`)
    })
  

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"

  const mayorEdad = document.querySelector(`[name=legalAge]:checked`)
      if(mayorEdad==true){
      console.log("Es Mayor de Edad")
    }else{
        console.log("Debes ser mayor de edad para registrarte en el sitio");
      }
    
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // const terminos = document.querySelector('[name=termsAndConditions]:checked')
  // if(terminos==false){
  //   console.log("Debes aceptar los TyCs para registrarte en el sitio");
  // }
//   window.addEventListener("load", function(){
//     let formulario = document.querySelector("form.Formulario-JS");
// formulario.addEventListener("submit", function(e) {
//   e.preventDefault();
//   let campoNombre = document.querySelector("input.termsAndConditions");
//   if(campoNombre.value=="")
//     {
//     alert("no ingreso campo")}
//     });
//   });


    
  

  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
});
