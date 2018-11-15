$(document).ready(function(){

    sessionStorage.clear();

    $('#loginAcc').on('click', function(){
               
        var newCustomer = { 
        "Email":$('#userEmail').val(), 
        "Password":$('#userPassword').val()};
      

        $.ajax({
            type:'GET',
            url:' http://localhost:3000/customer',
            success:function(data){
                console.log("success")
               for (let i=0; i< data.length; i++){
                    //console.log(newCustomer.Email);
                    if ((newCustomer.Email == data[i].Email) && (newCustomer.Password == data[i].Password)){
                        document.location.href = "dashboard.html";
                        sessionStorage.setItem("customerDetails", JSON.stringify(data[i]));
                    
                        alert("Login Sucessful")
                        return;
                         }
                    };
                    alert("Account Not Found");


                },
            error:function(){
                console.log("error saving details");
            }
            });


        });

});