$(document).ready(function()
{
  $("form#votingForm").submit(function(event)
  {
    event.preventDefault();
    var age = parseInt($("#ageid").val());
  if (age >= 18 && age<=130)
  {
    $('#paragraph').show();
    //alert("ok");
  }
  else if(age>0 && age<18)
  {
    $('#paragraph1').show();
    //alert("not ok");
  }
  else
  {
    $('#paragraph2').show();
  }
});
});
