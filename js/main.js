$(document).ready(() => {
  let iconClicks = 0;
  $(".icons").click(() => {
    iconClicks++;
    const times = iconClicks > 1 ? "times" : "time";
    alert(
      `Oh hey, someone clicked an icon. (You clicked this ${iconClicks} ${times})`
    );
  });

  // Form
  $("#form-submit").click(() => {
    const name = $("#form-name").val();
    const message = $("#form-textarea").val();
    if (message) {
      if (!name) $("#form-name").val("Anonymous");
      if (name.length < 20 && message.length < 2000)
        $("#form-submit").attr("type", "submit");
      else {
        if (name.length > 20) alert("Name must be less than 20 characters");
        if (message.length > 2000)
          alert("Message must be less than 2000 characters");
      }
    } else alert("Your message is empty!");
  });

  $("#form-reset").click(() => {
    $("#form-name").val("");
    $("#form-textarea").val("");
  });
});
