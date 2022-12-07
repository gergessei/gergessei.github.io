window.addEventListener("load", function(){
   /* UNA VEZ Q OCURRIO LOAD (SE CARGO LA PAGINA)
   SETTIMEOUT ESPERA 3 SEGUNDOS PARA EJECUTAR EL CODIGO
   QUE CAMBIA EL LOADER POR LOADER2 */
    setTimeout(() => {
        document.getElementById("loader").classList.toggle("loader2")
      }, 3230);
    
})


