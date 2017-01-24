var buttonHihat = document.getElementById('hihat');
var buttonKick = document.getElementById('kick');
var buttonSnare = document.getElementById('snare');

buttonHihat.addEventListener('click', function () {
  var hihat = document.getElementById("wavHihat");
  hihat.play();
})

buttonHihat.addEventListener('mouseenter', function () {
  var hihat = document.getElementById("wavHihat");
  hihat.play();
})

buttonKick.addEventListener('click', function () {
  var kick = document.getElementById("wavKick");
  kick.play();
})

buttonKick.addEventListener('mouseenter', function () {
  var kick = document.getElementById("wavKick");
  kick.play();
})

buttonSnare.addEventListener('click', function () {
  var snare = document.getElementById("wavSnare");
  snare.play();
})

buttonSnare.addEventListener('mouseenter', function () {
  var snare = document.getElementById("wavSnare");
  snare.play();
})
