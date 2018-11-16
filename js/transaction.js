$(document).ready(function(){

    let userDetails = sessionStorage.getItem("customerDetails");
    userDetails = JSON.parse(userDetails);
    console.log(userDetails);

    $.ajax({
        type:'GET',
        url:' http://localhost:3000/transactions',
        dataType: "json",
        success:function(data){
            for(let i=0; i<data.length; i++ ){
                if (userDetails.AccountNumber == data[i].AccountNumber){
                    $("#listTransaction")
                        .append('<ul class="list-group-item"><li class="list-group-item"><b>Date  </b>'+ (data[i].Date)+ '</li>'+
                        '<li class="list-group-item"><b>Account Number: </b>'+ (data[i].AccountNumber)+ '</li>' +
                        '<li class="list-group-item"><b>Description: </b>'+ (data[i].Description)+ '</li>' +
                          '<li class="list-group-item"><b>Amount: </b>&#x20a6 '+ (data[i].Amount)+ '</li>' +
                          '<li class="list-group-item"><b>New Account Balance: </b>'+ (data[i].AccountBalance)+ '</li></ul><hr style="background-color:red">')

                }//if statement

            }//end of for loop
        }//end of sucess functino
    }); // end of ajax


});//document.ready