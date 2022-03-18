function validarDatos(){
    window.event.preventDefault();

    if(document.form.nombre.value ==""){
        alert("Campo nombre obligatorio")
        document.form.nombre.focus();
    }else if(document.forms.email.value ==""){
        alert("Campo email obligatorio")
        document.form.email.focus();
}else if(document.form.asunto.value ==""){
    alert("Campo asunto obligatorio")
    document.form.asunto.focus();
}else if(document.form.email.value.indexOf("@"==-1 && document.form.email.indexOf(".")==-1){
    alert("email invalido")
    document.form.email.focus();
}else if(document.form.asunto.value == "" || document.form.asunto.length <= 50){
    alert("Es obligatorio y debe contener máximo 50 caracteres")
    document.form.mensaje.focus();


}






document.querySelector(form.addEventListener("submit", validarDatos))
