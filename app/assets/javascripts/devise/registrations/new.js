
$(function(){
  $("#form_signUp").validate({
  rules: {
    "user[user_email]": {
      required: true,
      email: true
     },
    "user[user_password]": {
      required: true
     },
     "user[user_password_confirmation]": {
      required: true,
      equalTo: "user[user_password]"
     }
  },
  messages: {
    "user[user_email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
     },
    "user[user_password]": "Please enter password",
    "user[user_password_confirmation]": {
      required: "Please enter password confirm",
      equalTo: "Password confirm equal password"
     }
  }
});

});