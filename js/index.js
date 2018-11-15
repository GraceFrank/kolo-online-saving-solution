
$(document).ready(function(){
    

    sessionStorage.clear();
    
    $('#createAccount').on('click', function(){
               
        var newCustomer = { "AccountNumber": Math.floor((Math.random() * 90000000000) + 1000000000),
        "FirstName": $('#firstName').val(),
        "LastName": $('#lastName').val(), 
        "Email":$('#userEmail').val(), 
        "Password":$('#userPassword').val(), 
        "Phone":$('#telPhone').val(), "AccountBalance":0};
        //sessionStorage.setItem("customerDetails", JSON.stringify(newCustomer));

       
           // alert(sessionStorage.getItem("customerDetails"));



        $.ajax({
            type:'POST',
            url:' http://localhost:3000/customer',
            data:newCustomer,   
            dataType: "json",
            success:function(data){
                alert("Congratulations!", "Your Peerless Savings have been created");                
                sessionStorage.setItem("customerDetails", JSON.stringify(newCustomer));
                document.location.href = "dashboard.html";


                },
            error:function(){
                console.log("error saving details");
            }
            });

        

            
    
        
    })
    

   
   })
