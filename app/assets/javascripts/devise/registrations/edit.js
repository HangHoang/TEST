
$(function(){
  $("#form_edit_account").validate({
  rules: {
    "user[email]": {
      required: true,
      email: true
     },
    "user[password]": {
      required: true
     },
     "user[password_confirmation]": {
      required: true,
      equalTo: "user[password]"
     },
     "user[current_password]": {
      required: true
     }
  },
  messages: {
    "user[email]": {
      required: "Please enter email",
      email: "Please enter type of email: example@type.domain"
     },
    "user[password]": "Please enter password",
    "user[password_confirmation]": {
      required: "Please enter password confirm",
      equalTo: "Password confirm equal password"
     },
     "user[current_password]": {
      required: "Please enter current password"
     }
  }
});

});