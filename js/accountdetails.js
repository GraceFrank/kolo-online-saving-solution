$(document).ready(function(){
    

        var userDetails = sessionStorage.getItem("customerDetails");
        userDetails = JSON.parse(userDetails);
        console.log(userDetails);

        //getting the user details from
    

        function  CustomerUpdate(){
                this.id = userDetails.id,
                this.AccountNumber = userDetails.AccountNumber,
                this.Email = userDetails.Email,
                this.AccountBalance = userDetails.AccountBalance,
                this.FirstName = $("#FirstName").val();
                this.LastName = $("#LastName").val();
                this.Phone = $("#phoneNum").val();
                this.Password = $("#passwordUpdate").val()
               };

          $("#updateAccDetails").hide();  
        
             $("#listTransaction").append(' <li class="list-group-item">Account Number: '+ userDetails.AccountNumber  +'</li>');
             $("#listTransaction").append(' <li class="list-group-item">First Name: '+ userDetails.FirstName  +'</li>');
             $("#listTransaction").append(' <li class="list-group-item">Last Number: '+ userDetails.LastName  +'</li>');
             $("#listTransaction").append(' <li class="list-group-item">Email: '+ userDetails.Email  +'</li>');
             $("#listTransaction").append(' <li class="list-group-item">Password:  '+ userDetails.Password  +'</li>');
             $("#listTransaction").append(' <li class="list-group-item">Phone: '+ userDetails.Phone  +'</li>');

             /*var newCustomer ={id:userDetails.id,
                AccountNumber: userDetails.AccountNumber,
                FirstName: userDetails.FirstName,
                LastName:userDetails.LastName,
                Phone: userDetails.Phone,
                Password: userDetails.Password
               };
               console.log(newCustomer); */



        $('#updateAcc').on('click', function(){
                $("#viewAccDetails").hide(); 
                $("#updateAccDetails").show();
                $('#accNum').html('Account Number: '+ userDetails.AccountNumber);
                $('#emailUpdate').html('Email: '+ userDetails.Email);
                $("#FirstName").val(userDetails.FirstName);
                $("#LastName").val(userDetails.LastName);
                $("#phoneNum").val(userDetails.Phone);
                $("#passwordUpdate").val(userDetails.Password);

                
                
        
        });

        $('#SaveChanges').on('click', function(){ //onClicling save changes
               
                $.ajax({
                        type:'PUT',
                        url:' http://localhost:3000/customer/'+ userDetails.id,
                        data: new CustomerUpdate,   
                        dataType: "json",
                        success:function(data){
                                sessionStorage.clear();
                                sessionStorage.setItem("customerDetails", JSON.stringify(data));
                                alert("Changes Saved Sucessfully");
                                document.location.reload();
                        },
                        error:function(){
                            Alert("Error saving details");
                        }
                });
               

        });


});//$(document)