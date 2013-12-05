$(function(){
  $("#form_product_type").validate({
  rules: {
    "product_type[product_type_name]": {
      required: true,
      // lettersonly: true
     }
  },
  messages: {
    "product_type[product_type_name]": "Please enter type's name",
  }
});

});