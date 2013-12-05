// <!-- neu script dat o tren lenh RoR, co nhung lenh thuc hien hanh dong cho 1 doi tuong trong RoR,
// neu k dc dat trong ready=> trang se k load dc=> loi-->
$(document).ajaxSend(function (e, xhr, options) {
  // lay thuoc tinh content trong the meta co ten la csft-token ga'n cho X-CSRF-Token
  xhr.setRequestHeader("X-CSRF-Token", $("meta[name='csrf-token']").attr('content'));
});
$(function() {
  $(".delete").click(function(e){
    e.preventDefault();
    var field_DELETE = $(this).parent('td').parent('tr');

    var field_ID = $(this).attr("id");
    $( ".dialog" ).dialog({
      modal: true,
      buttons: {
        "Delete" : function(){
          $.ajax({
            url: '/product_types/' + field_ID,
            type: "Delete",
            success: function(){
              console.log(field_DELETE);
              field_DELETE.slideUp('slow', function() {
                field_DELETE.remove();
                $(".dialog").dialog("close");
              });
            },
            error:function (xhr, ajaxOptions, thrownError){
              //On error, we alert user
              alert(thrownError);
            }
          });
        },
        "No" : function(){
          $(this).dialog("close");
        },
      }
    });
  });
});