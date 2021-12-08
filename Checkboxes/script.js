$("input[name='coding-language']").change(function () { 
    // e.preventDefault();
    // console.log("change detected")

    var checkedLanguage = $("input[name='coding-language']:checked");
    //  console.log( checkedLanguage);
     $.each( checkedLanguage, function(langIndex,value){
         console.log(langIndex,$(value).parent().text());
     });
    
});