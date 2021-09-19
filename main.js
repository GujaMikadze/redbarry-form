$(function () {
  $("#logo").animate(
    {
      zoom: "100%",
    },
    300
  );

  $(".btn__start")
    .delay(1000)
    .queue(function () {
      $(this)
        .removeClass("uk-hidden")
        .addClass("uk-animation-slide-top")
        .dequeue();
    });

  $(".btn__start").click(function (e) {
    e.preventDefault();
    $(".starter-page").replaceWith($(".first-page"));
  });

  function validationName(e) {
    e.preventDefault();
    let x = $("#fname").val();
    let regex = /^[a-zA-Zა-ჰ]+$/;
    if (x.length < 4) {
      $(".min-3").removeClass("uk-hidden");
      $(".only-az").addClass("uk-hidden");
      return false;
    }
     if (x.length < 255) {
      $(".min-3").addClass("uk-hidden");
      $(".max-255").addClass("uk-hidden");
      $(".only-az").addClass("uk-hidden");
      return false;
    } 
    if (x.length > 255) {
      $(".max-255").removeClass("uk-hidden");
      $(".min-3").addClass("uk-hidden");
      $(".only-az").addClass("uk-hidden");
      return false;
    }

    if (!x.match(regex)) {
      $(".only-az").removeClass("uk-hidden");
      $(".min-3").addClass("uk-hidden");
      $(".max-255").addClass("uk-hidden");
      return false;
    }

    return true;
  }

  function validationLastName(e) {
    e.preventDefault();

    let x = $("#lname").val();
    let regex = /^[a-zA-Zა-ჰ]+$/;
    if (x.length < 4) {
      $(".min-3lname").removeClass("uk-hidden");
      $(".only-azlname").addClass("uk-hidden");
      return false;
    }
    if (x.length < 255) {
      $(".min-3lname").addClass("uk-hidden");
      $(".max-255lname").addClass("uk-hidden");
      $(".only-azlname").addClass("uk-hidden");
      return false;
    }
    if (x.length > 255) {
      $(".max-255lname").removeClass("uk-hidden");
      $(".min-3lname").addClass("uk-hidden");
      $(".only-azlname").addClass("uk-hidden");
      return false;
    }

    if (!x.match(regex) && x !== "") {
      $(".only-azlname").removeClass("uk-hidden");
      $(".min-3lname").addClass("uk-hidden");
      $(".max-255lname").addClass("uk-hidden");
      return false;
    }
  }
  function validationEmail(e) {
    e.preventDefault();
    let x = $("#email").val();
    let regex = /\S+@\S+.\S+/;
    let redberry = /[a-z0-9._%+-]+@redberry.ge/;
    if (!x.match(regex)) {
      $(".email-invalid").removeClass("uk-hidden");
      $(".email-invalidtwo").addClass("uk-hidden");
      return false;
    } else {
      $(".email-invalid").addClass("uk-hidden");
    }

    if (!x.match(redberry)) {
      $(".email-invalidtwo").removeClass("uk-hidden");
      return false;
    } else {
      $(".email-invalidtwo").addClass("uk-hidden");
    }

    return true;
  }
  $("#fname").blur(validationName);
  $("#lname").blur(validationLastName);
  $("#email").blur(validationEmail);
  
  $("#fname, #lname, #email").change(function (e) {
    e.preventDefault();
    let disabled =!validationEmail(e);
    $("#right-arrow").prop("disabled", disabled);
  });

  $("#right-arrow").click(function (e) { 
    e.preventDefault();
    $(".hide-first").addClass("uk-hidden");
    $(".visible-first").removeClass("uk-hidden");
    $("#left-arrow").removeClass("uk-hidden");
    $(".img-first").addClass("uk-hidden");
    $(".img-second").removeClass("uk-hidden");
    $("#right-arrow").addClass("uk-hidden");
    $("#right-arrow-two").removeClass("uk-hidden");
    $(".active-page").html("2");
  });
  $("#left-arrow").click(function (e) { 
    e.preventDefault();
    $(".hide-first").removeClass("uk-hidden");
    $(".visible-first").addClass("uk-hidden");
    $("#left-arrow").addClass("uk-hidden");
    $(".img-first").removeClass("uk-hidden");
    $(".img-second").addClass("uk-hidden");
    $(".active-page").html("1");
    $("#right-arrow").prop("disabled", false);
  });


  // გაქვს გადატანილი covid-19?

  $("#yes").click(function () {
    if ($(this).prop("checked")) {
      $(".covidanswer-is-yes").removeClass("uk-hidden");
      $("#right-arrow-two").prop("disabled", true);
    }
  });

  $("#no, #positive").click(function () {
    $(".antianswer-is-yes").addClass("uk-hidden");
    $(".antianswer-is-no").addClass("uk-hidden");
    $(".covidanswer-is-yes").addClass("uk-hidden");
    $("#right-arrow-two").prop("disabled", false);
  });

  
  $("#yes-anti").click(function () {
    if ($(this).prop("checked")) {
      $(".antianswer-is-yes").removeClass("uk-hidden");
      $(".antianswer-is-no").addClass("uk-hidden");
    }
  });

  $("#no-anti").click(function () {
    if ($(this).prop("checked")) {
      $(".antianswer-is-no").removeClass("uk-hidden");
      $(".antianswer-is-yes").addClass("uk-hidden");
    }
  });




  $("#right-arrow-two").click(function (e) { 
    e.preventDefault();
    $("#right-arrow-two").addClass("uk-hidden");
    $("#right-arrow-three").removeClass("uk-hidden");
    $("#left-arrow").addClass("uk-hidden");
    $("#left-arrow-two").removeClass("uk-hidden");
    $(".antianswer-is-yes").addClass("uk-hidden");
    $(".antianswer-is-no").addClass("uk-hidden");
    $(".covidanswer-is-yes").addClass("uk-hidden");
    $(".img-second").addClass("uk-hidden");
    $(".img-third").removeClass("uk-hidden");
    $(".visible-first").addClass("uk-hidden");
    $(".visible-two").removeClass("uk-hidden")
    $(".active-page").html("3");
  });

  $("#left-arrow-two").click(function (e) { 
    e.preventDefault();
    $("#right-arrow-two").removeClass("uk-hidden");
    $("#right-arrow-three").addClass("uk-hidden");
    $("#left-arrow").removeClass("uk-hidden");
    $("#left-arrow-two").addClass("uk-hidden");
    $(".img-second").removeClass("uk-hidden");
    $(".img-third").addClass("uk-hidden");
    $(".visible-first").removeClass("uk-hidden");
    $(".visible-two").addClass("uk-hidden");
    $(".negative-answer").addClass("uk-hidden");
    $(".if-planning").addClass("uk-hidden");  
    
    $(".not-vacinated").addClass("uk-hidden");
    
    $(".vacinated").addClass("uk-hidden");
    $(".active-page").html("2");
  });


  $("#yes-vaccine").click(function () {
    if ($(this).prop("checked")) {
      $(".vacinated").removeClass("uk-hidden");
      $(".not-vacinated").addClass("uk-hidden");
      $("#right-arrow-three").prop("disabled", true);
    }
  });

  $("#half-vaccinated-registered, #vacinated").click(function () { 
    $("#right-arrow-three").prop("disabled", false);     
  });

  $("#half-vacinated-not-registered").click(function () {
    if ($(this).prop("checked")) {
      $(".register-now").removeClass("uk-hidden");
      $("#right-arrow-three").prop("disabled", false);
    }
    
  });

  $("#no-vaccine").click(function () {
    if ($(this).prop("checked")) {
      $(".vacinated").addClass("uk-hidden");
      $(".not-vacinated").removeClass("uk-hidden");
      $("#right-arrow-three").prop("disabled", true);
    }
  });

  $("#not-wanted").click(function () {
    if ($(this).prop("checked")) {
      $(".negative-answer").removeClass("uk-hidden");
      $(".if-planning").addClass("uk-hidden"); 
      $("#right-arrow-three").prop("disabled", false);     
    }
    
  });

  $("#planning").click(function () {
    if ($(this).prop("checked")) {
      $(".negative-answer").addClass("uk-hidden");
      $(".if-planning").removeClass("uk-hidden");
      $("#right-arrow-three").prop("disabled", false);      
    }
  });

  $("#waiting-for-date").click(function () {
    if ($(this).prop("checked")) {
      $(".negative-answer").addClass("uk-hidden");
      $(".if-planning").addClass("uk-hidden");
      $("#right-arrow-three").prop("disabled", false);      
    }
  });

  //last page 

  $("#right-arrow-three").click(function (e) { 
    e.preventDefault();
    $(".myform-part__four").removeClass("uk-hidden");
    $(".img-third").addClass("uk-hidden");
    $(".img-fourth").removeClass("uk-hidden");
    $("#right-arrow-three").addClass("uk-hidden");
    $(".visible-two").addClass("uk-hidden");
    $(".vacinated").addClass("uk-hidden");
    $(".not-vacinated").addClass("uk-hidden");
    $("#left-arrow-two").addClass("uk-hidden");
    $("#left-arrow-three").removeClass("uk-hidden");
    $(".active-page").html("4");
  });

  $("#left-arrow-three").click(function (e) { 
    e.preventDefault();
    $(".myform-part__four").addClass("uk-hidden");
    $(".img-third").removeClass("uk-hidden");
    $(".img-fourth").addClass("uk-hidden");
    $("#right-arrow-three").removeClass("uk-hidden");
    $(".visible-two").removeClass("uk-hidden");
    $(".vacinated").removeClass("uk-hidden");
    $(".not-vacinated").removeClass("uk-hidden");
    $("#left-arrow-two").removeClass("uk-hidden");
    $("#left-arrow-three").addClass("uk-hidden");
    $(".active-page").html("3");
  });

  $("input[name=meeting], input[name=from-office]").click(function () {
    if ($(this).prop("checked")) {;
      $("#submit-form").prop("disabled", false);      
    }
  });

  $("#submit-form").click(function (e) { 
    e.preventDefault();
    $(".container").replaceWith($(".thank-you"));
  });
});
