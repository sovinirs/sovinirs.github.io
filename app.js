AOS.init();

var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("React developer")
  .pauseFor(300)
  .deleteChars(15)
  .typeString("graphic designer")
  .pauseFor(300)
  .deleteChars(16)
  .typeString("web developer")
  .pauseFor(300)
  .deleteChars(13)
  .start();

$("#experience-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects-banner").offset().top,
    },
    1000
  );
});

$("#skills-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#skills-banner").offset().top,
    },
    1000
  );
});

$("#contacts-link").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contacts-banner").offset().top,
    },
    1000
  );
});
