
$(function(){
  $("#form_change_password").validate({
  rules: {
    "user[password]": {
      required: true
     },
     "user[password_confirmation]": {
      required: true,
      equalTo: "user[password]"
     }
  },
  messages: {
    "user[password]": "Please enter password",
    "user[password_confirmation]": {
      required: "Please enter password confirm",
      equalTo: "Password confirm equal password"
     }
  }
});

});