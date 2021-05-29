var mode = "light";
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