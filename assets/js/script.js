document.getElementById('toggle').onclick = function() {
  document.getElementsByTagName('body')[0].classList.toggle('dark');
  document.getElementsByTagName('body')[0].classList.toggle('light');
}