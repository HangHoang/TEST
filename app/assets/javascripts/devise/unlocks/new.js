
$(function(){
  $("#form_resend_unlock").validate({
  rules: {
    "user[email]": {
      required: true,
      email: true
     }
  },
  messages: {
    "user[email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
    }
  }
});

});