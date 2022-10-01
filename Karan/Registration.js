$(document).ready(function () {




    $("#button").click(function () {

    

      var FirstName = $('#FirstName').val();

      var LastName = $('#LastName').val();

      var Email = $('#Email').val();

      var Number = $('#Number').val();

      var UserName = $('#UserName').val();

       var   Photo=$('#Photo').val();

      var Password = $('#Password').val();

      var ConfirmPassword = $('#ConfirmPassword').val();




      var open = true;




      $("#ConfirmPassword").on('keyup', function () {

        var Password = $("#Password").val();

        var ConfirmPassword = $("#ConfirmPassword").val();

        if (Password != ConfirmPassword) {

          $("#CheckPasswordMatch").html("Password does not match !").css("color",
"red");

          open = false




        }




        else {

          $("#CheckPasswordMatch").html("Password match !").css("color", "green");

          open = true

        }

      });













      if (FirstName == "") {

        $("#fname").html("First Name is required").css("color", "red");

        open = false;

      }




      $("#FirstName").on('keyup', function () {

        open = true;

        $("#fname").html("");

      });

      if (LastName == "") {

        open = false;

        $("#lname").html("Last Name is required").css("color", "red");

      }




      $("#LastName").on('keyup', function () {

        open = true;

        $("#lname").html("");

      });

      if (Number == "") {

        open = false;

        $("#number").html("Number is required").css("color", "red");

      }




      $("#Number").on('keyup', function () {

        open = true;

        $("#number").html("");

      });




      if (Email == "") {

        open = false;

        $("#email").html("Email is required").css("color", "red");

      }




      $("#Email").on('keyup', function () {

        

        open = true;

        $("#email").html("");

      });




     

      const details = { FirstName, LastName, Email, UserName, Password,
Number,Photo }

      console.log(details);

      if (open == true) {

        $.ajax({




          type: "post",

          dataType: "json",

          url: "http://localhost:3000/users",

          data: details,

          success: function (data) {

             

            $("#form1").submit();

            alert("Registration has been done")

            

            console.log(data)

          }

        });

      }










    })

  });