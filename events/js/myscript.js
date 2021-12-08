//  when the document is ready alternative is ready  METHOD
$(function () {
    //combine events using "on" method
    $(selector).on({
        click: function(){
            //code
        },
        change: function(){
            //code
        },
        
    });

    
    
});

$(function () {
    // show button only when data is filled in a form
    $("#name").keyup(function () { 
        //use a ternary if()
        $("#name").val().trim() ==""  ?  $("#submit").hide() :  $("#submit").show();
        
    });
});