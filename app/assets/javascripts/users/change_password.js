
$(function(){
  $("#form_change_password").validate({
  rules: {
    "user[user_password]": {
      required: true
     },
     "user[user_password_confirmation]": {
      required: true,
      equalTo: "user[user_password]"
     },
     "user[user_current_password]": {
      required: true
     }
  },
  messages: {
    "user[user_password]": "Please enter password",
    "user[user_password_confirmation]": {
      required: "Please enter password confirm",
      equalTo: "Password confirm equal password"
     },
     "user[user_current_password]": {
      required: "Please enter current password"
     }
  }
});

});