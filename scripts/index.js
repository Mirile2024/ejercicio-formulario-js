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
  const mayorEdad = document.querySelector(`[name=legalAge]:checked`)
  console.log(`{email: ${nombre}, password: ${contraseña},Mayor de edad: ${mayorEdad.value}}`)

  // 4. Obtenemos el valor del input checkbox

  const terminos = document.getElementsByName("termsAndConditions");
  terminos.forEach(function(termino) {
    console.log(`{email: "${nombre}", password: "${contraseña}",Mayor de edad: "${mayorEdad.value}",Acepta los terminos: "${termino.checked}"`)
    })
  

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  const mayoriaEdad = document.querySelector(`[name=legalAge]:checked`)
  if(mayoriaEdad==null){
    alert( "Debes seleccionar la edad");
  }else if(mayoriaEdad.value=="false"){
    alert("Debes ser mayor de edad para registrarte en el sitio");
  }
 
    
  // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"

  const terms = document.getElementsByName("termsAndConditions");
  terms.forEach(function(termino) {
    console.log(`Acepta los terminos: ${termino.checked}`);
    if(termino.checked == "")
      {
      alert("Debes aceptar los TyCs para registrarte en el sitio")}
        
    });
 
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.


  console.log(`{email: "${nombre}", password: "${contraseña}",Mayor de edad: "${mayorEdad.value}",Acepta los terminos: "${terms.checked}"`)
    

});
