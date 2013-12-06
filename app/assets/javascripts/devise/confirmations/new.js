
$(function(){
  $("#form_resend_confirm").validate({
  rules: {
    "user[email]": {
      required: true,
      email: true
     }
  },
  messages: {
    "user[email]": {
      required: "Please type your email",
      email: "Type of email: example@type.domain"
     }
  }
});

});