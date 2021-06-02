var mode = "light";
document.addEventListener("DOMContentLoaded", function(event) {
  var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkTheme.matches) mode = "dark"; else mode = "light";
  if (mode == "light") {
    document.querySelector('body').classList.add('light');
    document.querySelector('body').classList.remove('dark');
    document.querySelector('meta[name="theme-color"]').content = "#FFFFFF";
    document.getElementById('toggle').checked = true;
  } else {
    document.querySelector('body').classList.add('dark');
    document.querySelector('body').classList.remove('light');
    document.querySelector('meta[name="theme-color"]').content = "#0E1117";
    document.getElementById('toggle').checked = false;
  }
});

document.getElementById('toggle').onclick = function() {
  if (mode == "light") {
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').classList.add('dark');
    document.querySelector('meta[name="theme-color"]').content = "#0E1117";
    mode = "dark";
  } else {
    document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('light');
    document.querySelector('meta[name="theme-color"]').content = "#FFFFFF";
    mode = "light";
  }
}

// Hide a mobile browser's address bar
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile) {
	window.addEventListener("load",function() {
	  setTimeout(function(){
		window.scrollTo(0, 1);
	  }, 0);
	});
}
