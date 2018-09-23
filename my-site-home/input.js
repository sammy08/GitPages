$(document).ready(function(){
  $(this).parent().find(".lb-txt").addClass('label-active');
});

$("input").focusout(function(){
  if($(this).val() == '' ){
    $(this).parent().find("lb-txt").removeClass('label-active');
  };
});

};