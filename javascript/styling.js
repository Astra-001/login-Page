$(document).ready(function(){
    $("#pswd").click(function(){
        $(".far").css("display","block");
        
    });
    $(".fa-eye-slash").click(function(){
        $(".fa-eye-slash").css("display","none");
        $("#pswd").attr("type","text");
    });

    $(".fa-eye").click(function(){
        $(".fa-eye-slash").css("display","block");$("#pswd").attr("type","password");
    });

    $("form").submit(function(e){
         let email = $("#email").val();
         let pswd  = $("#pswd").val();
         let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(!pattern.test(email)){
             $("#email").css("outline","1px groove red");
             $(".error1").css({
                "color":"red",
                "display":"block"
             });
            e.preventDefault();
         }
         if(!(pswd.length >=6)){
            $("#pswd").css("outline","1px groove red");
            $(".error2").css({
               "color":"red",
               "display":"block"
            });
            e.preventDefault();
        }
         
         
        

         
         
      });
});