'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', function (e) {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
