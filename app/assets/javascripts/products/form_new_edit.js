$(function(){
  $("#form_new_edit_product").validate({
  rules: {
    "product[product_name]": {
      required: true
    },
    "product[product_description]": {
      maxlegth: 1000
    },
    "product[product_cost]": {
      required: true,
      // so thap phan
      number: true
    }
    },
    messages: {
      "product[product_name]": "Please enter product name.",
      "product[product_description]": {
        maxlegth: "Maximum of product's decription is 1000 characters."
      },
      "product[product_cost]": {
        required: "Please enter product cost.",
        number: "Cost of product is a decimal number."
      }
    }
  });
});