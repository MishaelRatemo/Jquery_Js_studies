$()


$( "#mainpara" ).click(function() {
  $( ".subpara1" ).fadeToggle( "slow", function() {
    // Animation complete.
  });
});

let mytext= $('#bab').html();

mytext= $('#bab').html(" My name is Mishael not <b> Mootian </b> ");


$(".abtme").click(function(){
  $('#about').slideToggle();

});
//  Adding classes and removing classes

$("#bg").click(function () { 
  $("#about").addClass("skyblue-background")
  
});

$("#bg-color").click(function () { 
  
  $("body").addClass("bdy-color");
  
});

//use jquey to change ccss
$("#alt").click(function(){
  $("body").css("background-color","white",
                "color","black"
  )
});
