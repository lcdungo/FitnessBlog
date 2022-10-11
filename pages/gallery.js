function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("menu").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menu").style.display = "block";
}

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("menu").style.display = "none";
}