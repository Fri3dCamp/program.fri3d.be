function show(day) {
  document.getElementById("fri").style.display = "none";
  document.getElementById("sat").style.display = "none";
  document.getElementById("sun").style.display = "none";
  document.getElementById(day).style.display   = "block";

  document.getElementById("nav-fri").className = "";
  document.getElementById("nav-sat").className = "";
  document.getElementById("nav-sun").className = "";
  document.getElementById("nav-"+day).className = "active";
}

// activate default or selected day - through location hash
if( document.getElementById("nav-fri") ) {
  document.getElementById("nav-fri").className = "active"; // default
  var day = location.hash
  if( day.length > 1 ) {
    day = day.substring(1);
    if( ["fri", "sat", "sun"].indexOf(day) >= 0 ) {
      show(day);
    }
  }
}
