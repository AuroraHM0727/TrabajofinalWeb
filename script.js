document.addEventListener("DOMContentLoaded", function() {

  // =======================
  // VISOR DE IMAGEN PRO
  // =======================

   const botones = document.querySelectorAll(".ver-proyecto");
  const visor = document.getElementById("imgViewer");
  const visorImg = document.getElementById("viewerImg");
  const cerrar = document.querySelector(".close-viewer");

  botones.forEach(btn=>{
    btn.addEventListener("click",()=>{
      const imagen = btn.getAttribute("data-img");
      visorImg.src = imagen;
      visor.style.display="flex";
    });
  });

  cerrar.addEventListener("click",()=>{
    visor.style.display="none";
  });

  visor.addEventListener("click",(e)=>{
    if(e.target===visor){
      visor.style.display="none";
    }
  });

});
