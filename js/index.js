$(document).ready(function(){
    
    //help establish connection to a url that will be specified in a moment
    var requestCustomer = new XMLHttpRequest();
    //get json data from the specified url
    requestCustomer.open('GET', 'http://localhost:3000/customer');
    //here is what will be done with the data gotten
    requestCustomer.onload = function(){
        console.log(requestCustomer.responseText);//this is just to see if our request dey work
        //now we want to save the data we load to a variable 
        saveCustomer= requestCustomer.responseText;
        console.log(saveCustomer[0]); //we only see [ becus our browser is seing the data as test b/c we use .responseText

        /*now we will tell our browser to see it as json file by using the JSON.parse() whichl will tell our browser
        to filter whatever is inside the parenthesis()as a JSON object*/
        saveCustomer= JSON.parse(requestCustomer.responseText); //we only see [ becus our browser is seing the data as test b/c we use .responseText
    
        
    };
    //send requst, cuz if you dont send, none of all the instructions given above will work o
    requestCustomer.send();
    

    /*alert("welcome");

    $('#createAccount').on('click', function(){

        var newCustomer = { "Account Number": Math.floor((Math.random() * 90000000000) + 1000000000),
        "First Name": $('#firstName').val(),
        "Last Name": $('#lastName').val(), 
        "Email":$('#email').val(), 
        "Password":$('#password').val(), 
        "Phone":$('#telPhone').val()};

        $.ajax({
            type:'GET',
            url:'db.json',
            data:newCustomer,   
            dataType: "json",


            sucess:function(){
                alert(data);

                },
            error:function(){
                alert("error saving details");
            }
            });
        
        

    })
    */

   
   })
