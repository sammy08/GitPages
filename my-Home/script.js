
function main(){
  $('.container').hide();
  $('.container').fadeIn(1000);
  $('.fab').on('click',function(){
    $('.sidebar').toggleClass('active');
  });
}
$(document).ready(main);
  
 /*button = document.querySelector('.fab').addEventListener("click", function(event){
  document.querySelector('.sidebar').classList.toggle('active');
},false)
*/