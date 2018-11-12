
     
$(document).ready(function(){
    


    alert("welcome");
    $('#createAccount').on('click', function(){
        var newCustomer = { "Account Number": Math.floor((Math.random() * 90000000000) + 1000000000),
        "First Name": $('#firstName').val(),
        "Last Name": $('#lastName').val(), 
        "Email":$('#userEmail').val(), 
        "Password":$('#password').val(), 
        "Phone":$('#telPhone').val()};
       

        var jsonObject = require("db.json");
        
       
        
        fs.writeFile("filename.json", JSON.stringify(newCustomer), "utf8", function(err) {
            if (err) throw err;
            console.log("File saved.");
        });
        
    });
    

   
   });
