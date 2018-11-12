$(document).ready(function(){

    let userDetails = sessionStorage.getItem("customerDetails");
    userDetails = JSON.parse(userDetails);
   function getDatabase (propValue){ 
       $.ajax({
        type:'GET',
        url:' http://localhost:3000/customer',
        sucess:function(data){
            console.log("sucess");
            $.each(data, function(i, data){
                if (propValue == data.email){
                    return data[i];
                };
            });

            },
        error:function(){
            console.log("error saving details");
             }
        });
    };

    console.log(userDetails);

});