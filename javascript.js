var modal = document.getElementById("theModal");
var btn = document.getElementById("open");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};
span.onclick = function () {
  modal.style.display = "none";
};
