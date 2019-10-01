function validateForm() {
//USE A TRY/CATCH BLOCK!!!!!!

//---DEFINE VARIABLES
//var ContactUsForm=document.forms["ContactUsForm"]
//var ContactUsForm=document.getElementById("ContactUsForm");
var ContactUsForm = document.ContactUsForm;

//var realname=document.forms["ContactUsForm"]["#realname"].value;
//var realname=ContactUsForm.realname.value;
//var realname=ContactUsForm["realname"].value;
//var realname=ContactUsForm("realname").value;
var realname = ContactUsForm("#realname").value;

//var email=document.forms["ContactUsForm"]["#email"].value;
var email = ContactUsForm.email.value;

//var phone=document.forms["ContactUsForm"]["#phone"].value;
var phone = ContactUsForm.phone.value;

//var extension=document.forms["ContactUsForm"]["#extension"].value;
var extension = ContactUsForm.extension.value;

//var message=document.forms["ContactUsForm"]["#message"].value;
var message = ContactUsForm.message.value;

//--VALIDATE NAME
    if (realname !== null || realname !== "") {
        if (email !== null || email !== "") {
            if (message !== null || message !== "") {
                return true;
            } else {
                alert("The following fields cannot be blank:\n\n----------------------------------------\n-----Form Field---------You Entered-----\n----------------------------------------\nFull name..........." + realname + "\nEmail address......." + email + "\nQuestions/Comments.." + message + "\n----------------------------------------\n\nPlease make sure all required fields have been entered and submit the form again.");
                return false;
            }
        }
    }
}