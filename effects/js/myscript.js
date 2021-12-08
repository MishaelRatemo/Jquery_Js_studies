
$(function () {
    $("#hidebtn").click(function (e) { 
        // e.preventDefault();
        $("#hidebtn").hide(3000,function(){
            $("#texthide").show();
        });
        
    });



    $("#vision").click(function () { 
        $("#isvision").slideToggle(2000);
        
    });
    /* 
    otherr effects are
         slidup
         slidedown
         fadein
         fadeout
         fadetoggle   
    
    */
   
       
            $("#isMission").mouseenter(function () { 
                $(this).fadeTo(2000,1);
            });
            $("#isMission").mouseleave(function () { 
                $(this).fadeTo(1000,.4);
            });

        

    
});