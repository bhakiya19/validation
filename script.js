function validateForm()
{
    let isValid=true;
    let userId = document.forms["registrationform"]["userid"].value;
    if(userId.length < 5 || userId.length>12)
    {
        document.getElementById("userIdError").innerHTML="User ID must be between 5 and 12 characters.";
        isValid=false;
    }
    else{
        document.getElementById("userIdError").innerHTML="";
    }


    let Password = document.forms["registrationform"]["password"].value;
    if(Password.length < 7 || Password.length > 12)
    {
        document.getElementById("passwordError").innerHTML="Password must be between 7 and 12 characters.";
        isValid=false;
    }
    else{
        document.getElementById("passwordError").innerHTML="";
    }

    let name = document.forms["registrationform"]["password"].value;
    if(!/^[A-Za-z]+$/.test(name))
    {
        document.getElementById("nameError").innerHTML="Name must contain only alphabets";
        isValid=false;
    }
    else{
        document.getElementById("nameError").innerHTML="";
    }
   

    let country = document.forms["registrationform"]["country"].value;
    if(country==="")
    {
        document.getElementById("countryError").innerHTML="Please select a country.";
        isValid=false;
    }
    else{
        document.getElementById("countryError").innerHTML="";
    }

    let zipcode = document.forms["registrationform"]["zipcode"].value;
    if(!/^\d+$/.test(zipcode))
    {
        document.getElementById("zipcodeerror").innerHTML = "ZIP code must be numeric.";
        isValid = false;
    }
    else {
        document.getElementById("zipcodeerror").innerHTML = "";
    }


    let email = document.forms["registrationform"]["email"].value;
    let emailpattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailpattern.test(email))
    {
        document.getElementById("emailError").innerHTML = "Please enter a valid email.";
        isValid = false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }


    let sex = document.forms["registrationform"]["Gender"].value;
    if(sex==="")
    {
        document.getElementById("sexError").innerHTML="Please select a Gender.";
        isValid=false;
    }
    else{
        document.getElementById("sexError").innerHTML="";
    }
  
    let language = document.forms["registrationform"]["language"].value;
    let isChecked=false;
    for (let i = 0; i < language.length; i++) {
    if(language[i].checked)
    {
        isChecked = true;
        break;
    }

    }
    if (!isChecked) {
        document.getElementById("languageError").innerHTML = "Please select at least one language.";
        isValid = false;
    } else {
        document.getElementById("languageError").innerHTML = "";
    }

    return isValid;
}