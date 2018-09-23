$(document).ready(function(){
  $("button").click(function(){
    $("#togglEfect").fadeToggle(2000);//pegando os ELEMNTOS POR ID E CLASSE 
    $("#password").fadeToggle(2000);
    $(".line-box").fadeToggle(2000);
    $("#togglEfectt").fadeToggle(2000);//o botao faz ação do efeito toggle
    $("button").html("Entrar");//muda o texto do botao
  });
});