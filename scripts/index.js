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
  const terminos = document.querySelector('[name=termsAndConditions]:checked')
  console.log(`Acepta los terminos: ${terminos.value}`)

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  let mayorEdad = document.querySelector(`[name=legalAge]:checked`)
  if(mayorEdad = true){
    console.log("Es Mayor de Edad");
  }else{
    console.log("Debes aceptar los TyCs para registrarte en el sitio");
  }

  // console.log(`{email: ${nombre}, password: ${contraseña},Mayor de edad: ${mayorEdad.value}}`)

  
  console.log(`{email: ${nombre}, password: ${contraseña},Mayor de edad: ${mayorEdad.value}}`)

  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
});
