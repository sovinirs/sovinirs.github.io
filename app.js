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
