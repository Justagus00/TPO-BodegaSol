function validar(){
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let edad=document.getElementById("edad");
    let email=document.getElementById("email");
    let error=false;
    document.getElementById("validar_nombre").innerHTML="";
    document.getElementById("validar_apellido").innerHTML="";
    document.getElementById("validar_edad").innerHTML="";
    document.getElementById("validar_email").innerHTML="";
    if(nombre.value == ""){
        document.getElementById("validar_nombre").innerHTML="Debe completar el formulario con su nombre";
        error=true;
        nombre.focus();
    }

    if(apellido.value == ""){
        document.getElementById("validar_apellido").innerHTML="Debe completar el formulario con su apellido";
        error=true;
        apellido.focus();
    }

    if(edad.value == ""){
        document.getElementById("validar_edad").innerHTML="Debe completar el formulario con su edad";
        error=true;
        edad.focus();
    }
    


    if(email.value == ""){
        document.getElementById("validar_email").innerHTML="Debe completar con su email";
        error=true;
        email.focus();
    }
    if(error == false){
        document.getElementById("nombre").value= "";
        document.getElementById("validar_nombre").innerHTML="";
        document.getElementById("apellido").value= "";
        document.getElementById("validar_apellido").innerHTML="";
        document.getElementById("edad").value= "";
        document.getElementById("validar_edad").innerHTML="";
        document.getElementById("email").value= "";
        document.getElementById("validar_email").innerHTML="";
        alert("Datos enviados");
      
    }
    return !error;
    }  
    
