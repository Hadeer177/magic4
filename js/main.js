


function validate() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
result.setAttribute("class","alert alert-danger text-center")
if(user=="" && email=="" && pass=="" && confirm==""){
result.innerHTML ="enter data in form";
return false;

}else if(user.length<5 || user.length>15){
result.innerHTML ="enter 5-15 character in username";
return false;

}else if(email.indexOf("@")==-1 ||email.indexOf(".com") ==-1){
    result.innerHTML ="enter vaild email";
    return false;

}else if(pass.length==""){
result.innerHTML="enter password";
return false;

}else if(pass.length<8){
result.innerHTML="weak password";
return false;

}else if(pass !=confirm){
result.innerHTML="not matched password";
return false;


}


    }






    






    