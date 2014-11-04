console.log('lem lem lem lem...')


function lemurPeak(){
  var lemlem = $("<img class='lemlem' src='/images/LemLem.png'>");
  $('body').append(lemlem);
  lemlem.css( {top:'-50%'});
  lemlem.css( {transform: 'rotate(0.5turn)'});
  lemlem.css( {left: (25+Math.random()*50)+'%'});
  lemlem.delay(Math.random()*10000).animate({top: '-1em'}, 5000);
}


function validatePasswordMatch(){
  $('form#new-user').on('submit', function(e){
    var password = $(this).find("[name='password']").val();
    var passwordVerification = $(this).find("[name='password_verification']").val();
    if (password != passwordVerification){
      e.preventDefault();
      alert("Password Must Be the SAME!!!");
    }
  })
}






$(function(){
  lemurPeak();
  validatePasswordMatch();
})
