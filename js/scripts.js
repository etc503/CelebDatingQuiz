$(document).ready(function() {
  $("form#preference").submit(function(event) {
    const animal = $("select#animal").val();
    const place = $("select#place").val();
    const transpo = $("select#transpo").val();

    let congrats = $("Keanu Reeves");
    if (animal === 'cat' && place === "ocean" && transpo === "drive") {
    }

    let congrats = $("Bill Murray");
    if (animal === 'cat' && place === "ocean" && transpo === "fly") {
    }

    let congrats = $("Parker Posey");
    if (animal === 'cat' && place === "lake" && transpo === "drive" || "fly") {
    }


    $("#congrats").text(quote);
    $("#match").show()

    event.preventDefault();
  });
});