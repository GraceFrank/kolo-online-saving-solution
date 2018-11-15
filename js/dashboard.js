$(document).ready(function(){

    let userDetails = sessionStorage.getItem("customerDetails");
    userDetails = JSON.parse(userDetails);
    console.log(userDetails);
    let dateT = new Date();

    function  UserBalanceUpdate(accountNumber, firstName, lastName, phone, password, email, accountBalance){
        this.AccountNumber = accountNumber,
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Phone = phone;
        this.Password = password,
        this.Email = email;
        this.AccountBalance = accountBalance
       };

  //post transaction
  function createTransaction(type, AccountNumber, amount, newBal, dateT){
  $.ajax({
    type:'POST',
    url:'http://localhost:3000/transactions',
    data: new Transaction(type, AccountNumber, amount, newBal, dateT),   
    dataType: "json",
        });     
    };
    //update user customer balance
    function updateUserBal(newBal){

        $.ajax({
            type:'PUT',
            url:' http://localhost:3000/customer/'+ userDetails.id,
            data: new UserBalanceUpdate(userDetails.AccountNumber, userDetails.FirstName, userDetails.LastName, userDetails.Phone, userDetails.Password, userDetails.Email, newBal),   
            dataType: "json",
            success:function(data){
                console.log(userDetails);
                    sessionStorage.clear();
                    sessionStorage.setItem("customerDetails", JSON.stringify(data));
                   // alert("Changes Saved Sucessfully");
                    document.location.reload();
            },
            
    });

    }



    $.ajax({
        type:'GET',
        url:' http://localhost:3000/customer',
        dataType: "json",
        success:function(data){
            console.log("sucess", data);
            for(let i=0; i < data.length; i++ ){
                if (userDetails.Email == data[i].Email){
                    $('#nameofUser').html(data[i].FirstName + '!');
                    $('#userAccBal').html(data[i].AccountBalance);
                    $('#accountNumber').html(data[i].AccountNumber);
                    userDetails = data[i];

               
                }
                
            };
           
            },
        error:function(){
            console.log("error saving details");
        }
        });
        

    
    
        
    
      function Transaction(Description, AccountNumber, Amount, AccountBalance, date){
        this.Description = Description;
        this.AccountNumber = AccountNumber;
        this.Amount = Amount;
        this.AccountBalance = AccountBalance;
        this.Date = date;
      }
        
        $('#makeTransaction').click(function () {
                let amount = parseInt($('#amount').val());
                let type = $('#transactionType').val();
                let oldBal = parseInt($('#userAccBal').html());
                let AccountNumber = parseInt($('#accountNumber').html());
                let newBal = 0;
                
                if (type === 'deposit') {
                    newBal = oldBal + amount;
                    alert('Transaction successful');
                    createTransaction(type, AccountNumber, amount, newBal, dateT);
                    updateUserBal(newBal)

                                          
                } else {
                    if (oldBal > amount) {
                        newBal = oldBal - amount;
                        createTransaction(type, AccountNumber, amount, newBal, dateT);
                        updateUserBal(newBal)
                        alert('Transaction successful');
                    } else {
                        alert('Maximum withdrawal amount exceeded');
                    }
                }  
        });
});