(function(){
    console.log("Entre");
   
})();

function muestra_oculta(id){
    console.log("entre a ocultar");
    if (document.getElementById){ //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? '' : 'none'; //damos un atributo display:none que oculta el div
    }
  }
  window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    //document.getElementById("contador").click();
    muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    muestra_oculta('contenido2');
    muestra_oculta('contenido3');
    muestra_oculta('contenido4');
    muestra_oculta('contenido5');
    var f = new Date();
  }