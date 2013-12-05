
$(function(){
  $("#form_resend_unlock").validate({
  rules: {
    "user[user_email]": {
      required: true,
      email: true
     }
  },
  messages: {
    "user[user_email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
    }
  }
});

});