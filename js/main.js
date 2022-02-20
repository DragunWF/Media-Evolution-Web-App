$(document).ready(() => {
  let iconClicks = 0;
  $(".icons").click(() => {
    iconClicks++;
    const times = iconClicks > 1 ? "times" : "time";
    alert(
      `Oh hey, someone clicked an icon. (You clicked this ${iconClicks} ${times})`
    );
  });
});
