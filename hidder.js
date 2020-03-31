var clic = 1;
function mostrarOcultar1(){ 
   if(clic==1){
   document.getElementById("primer_info_div").style.display = "block";
   clic = clic + 1;
   } else{
       document.getElementById("primer_info_div").style.display = "none";    
    clic = 1;
   }   
}
function mostrarOcultar2(){ 
   if(clic==1){
   document.getElementById("segundo_info_div").style.display = "block";
   clic = clic + 1;
   } else{
       document.getElementById("segundo_info_div").style.display = "none";    
    clic = 1;
   }
}
function mostrarOcultar3(){ 
   if(clic==1){
   document.getElementById("tercero_info_div").style.display = "block";
   clic = clic + 1;
   } else{
       document.getElementById("tercero_info_div").style.display = "none";    
    clic = 1;
   }
} 