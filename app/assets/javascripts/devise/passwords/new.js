
$(function(){
  $("#form_forgot_password").validate({
  rules: {
    "user[user_email]": {
      required: true,
      email: true
     }
  },
  messages: {
    "user[user_email]": {
      required: "Please type your email",
      email: "Type of email: example@type.domain"
     }
  }
});

});