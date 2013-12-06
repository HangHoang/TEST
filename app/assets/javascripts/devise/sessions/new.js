
$(function(){
  $("#form_sign_in").validate({
    rules: {
      "user[email]": {
        required: true,
        email: true
       },
      "user[password]": {
        required: true
       }
    },
    messages: {
      "user[email]": {
        required: "Please enter email",
        email: "Please enter type of email: example@type.domain"
       },
      "user[password]": "Please enter password"
    }
  });
});