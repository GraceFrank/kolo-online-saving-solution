
$(document).ready(function(){
    

    sessionStorage.clear();
    
    $('#createAccount').on('click', function(){
               
        var newCustomer = { "Account Number": Math.floor((Math.random() * 90000000000) + 1000000000),
        "First Name": $('#firstName').val(),
        "Last Name": $('#lastName').val(), 
        "Email":$('#userEmail').val(), 
        "Password":$('#userPassword').val(), 
        "Phone":$('#telPhone').val(), "Account Balance":0};
        //sessionStorage.setItem("customerDetails", JSON.stringify(newCustomer));

       
           // alert(sessionStorage.getItem("customerDetails"));



        $.ajax({
            type:'POST',
            url:' http://localhost:3000/customer',
            data:newCustomer,   
            dataType: "json",
            success:function(data){
                console.log("sucess")
                sessionStorage.setItem("customerDetails", JSON.stringify(newCustomer));
                document.location.href = "dashboard.html";


                },
            error:function(){
                console.log("error saving details");
            }
            });

        

            
    
        
    })
    

   
   })
