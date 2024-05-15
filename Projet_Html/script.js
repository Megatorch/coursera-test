var users = [{ username:'youssef', password:'zero1' } ]

function signup(){

    var namevalue = document.getElementById('Sin1').value;
    var passvalue = document.getElementById('Sin2').value;
    var emailvalue = document.getElementById('Sin3').value;
    
    if(namevalue ==''){ 
        document.getElementById('s3').innerHTML='Name must be filled out';
        
    }
    else if(passvalue ==''){
        document.getElementById('s3').innerHTML='Password must be filled out';
        
    }
    else if(emailvalue ==''){
        document.getElementById('s3').innerHTML='Email must be filled out';
        
    }
    else{ 
         var user = {};
       user.username = namevalue;
       user.password=passvalue;
       users.push(user);
       showLogin();
    }
     
    }
function login(){

var namevalue = document.getElementById('in1').value;
var passvalue = document.getElementById('in2').value;

if(namevalue ==''){ 
    document.getElementById('s1').innerHTML='Name must be filled out';
    
}
else if(passvalue ==''){
    document.getElementById('s1').innerHTML='Password must be filled out';
    
}
for(var i=0;i<users.length;i++){
if(users[i].username==namevalue && users[i].password==passvalue ){
    window.location.href = "index.html"; 
    
}
else document.getElementById('s1').innerHTML='password and username incorrect'
}


 
}
function showCreateAccount() {
    document.getElementById("div2").style.display = "none";
    
    document.getElementById("createAccount").style.display = "block";
}

function showLogin()
{ 
    document.getElementById("createAccount").style.display = "none"; 

    document.getElementById("div2").style.display = "block";  
}

function send(){
    var namevalue = document.getElementById('name').value;
    var telvalue = document.getElementById('tel').value;
    var msgvalue = document.getElementById('msg').value;
    var emailvalue = document.getElementById('email').value;
    
    if(namevalue ==''){ 
        document.getElementById('s2').innerHTML='Name must be filled out';
        
    }
    else if(telvalue ==''){
        document.getElementById('s2').innerHTML='Num must be filled out';
        
    }
    else if(msgvalue ==''){
        document.getElementById('s2').innerHTML='The mesage must be filled out';
        
    }
    else if(emailvalue ==''){
        document.getElementById('s2').innerHTML='Email must be filled out';
        
    }
    else alert('Message sent');

}
function showp() {
    var input = document.getElementById('in2');
    var inp = document.getElementById('Sin2');

    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }

    if (inp.type === 'password') {
        inp.type = 'text';
    } else {
        inp.type = 'password';
    }
}
