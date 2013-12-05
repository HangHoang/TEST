$(function(){
  $("#form_new_edit_product").validate({
  rules: {
    // "product[typeproduct_id]": {
    //   required: true,
    //   // so nguyen
    //   digits: true
    // },
    "product[product_name]": {
      required: true
    },
    // "product[product_description]": {
    // },
    "product[product_cost]": {
      required: true,
      // so thap phan
      number: true
    }
    },
    messages: {
      "product[product_name]": "Please enter product name.",
      "product[product_cost]": {
        required: "Please enter product cost.",
        number: "Cost of product is a decimal number."
      }
    }
  });
});