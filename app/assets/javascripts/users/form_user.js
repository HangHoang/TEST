

$(function(){
  $("#form_user").validate({
	  rules: {
	  	"user[user_email]": {
	      required: true,
	      email: true
	     },
	    "user[user_password]": {
	      required: true,
	      minlength: 8
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
	    "user[user_password]": {
	      required: "Please enter password",
	      minlength: "Min length of password is 8 character"
	     },
	    "user[user_password_confirmation]": {
	      required: "Please enter password confirm",
	      equalTo: "Password confirm equal password"
	     },
	  }
	});
});