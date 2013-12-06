
$(function(){
  $("#form_signUp").validate({
  rules: {
    "user[email]": {
      required: true,
      email: true
     },
    "user[password]": {
      required: true,
      minlength: 8
     },
     "user[password_confirmation]": {
      required: true,
      equalTo: "user[password]"
     }
  },
  messages: {
    "user[email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
     },
    "user[password]": {
      required: "Please enter password",
      minlength: "Minlength of password is 8 charaters"
     },
    "user[password_confirmation]": {
      required: "Please enter password confirm",
      equalTo: "Password confirm equal password"
     }
  }
});

});