$(document).ready(function () {
  $("form#preference").submit(function (event) {
    event.preventDefault();
    const animal = $("#animal").val();
    const place = $("#place").val();
    const transpo = $("#transpo").val();
    // const beverage = $("#beverage").val();
    console.log(animal + place + transpo);

    let match;
    if (animal === 'cat' && place === "ocean" && transpo === "drive") {
      console.log("hello, this if statement is working");
      match = "Keanu Reeves";
    }

    $("#match").text(match);
    $("#congrats").show();
  });
});