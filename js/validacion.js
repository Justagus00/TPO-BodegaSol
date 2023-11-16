function validar() {
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    let email=document.getElementById("email")
    let error=false;

    document.getElementById("validar_nombre").innerHTML="";
    document.getElementById("validar_apellido").innerHTML="";
    document.getElementById("validar_email").innerHTML="";

    if(usuario.value ==="") {
        
    document.getElementById("validar_nombre").innerHTML="Debe completar con el nombre el formulario";
    error=true;
    usuario.focus();

    }

    
    if(clave.value === "") {
        
        document.getElementById("validar_apellido").innerHTML="Debe completar con el apellido ";
        error=true;
        usuario.focus();
    
    }
    if(clave.value === "") {
        
        document.getElementById("validar_email").innerHTML="Debe completar con el email ";
        error=true;
        usuario.focus();
    
        }

    if(error == false) {
        document.getElementById("nombre").value="";
        document.getElementById("validar_nombre").innerHTML="";
        document.getElementById("apellido").value="";
        document.getElementById("validar_apellido").innerHTML="";
        document.getElementById("email").value="";
        document.getElementById("validar_email").innerHTML="";
        
         alert("Datos enviados");
    }
    return !Error;
    

}