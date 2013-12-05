
$(function(){
  $("#form_sign_in").validate({
  rules: {
    "user[user_email]": {
      required: true,
      email: true
     },
    "user[user_password]": {
      required: true
     }
  },
  messages: {
    "user[user_email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
     },
    "user[user_password]": "Please enter password"
  }
});

});