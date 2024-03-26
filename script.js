let onMouseArea = document.querySelector(".textArea");
let invisArea = document.querySelector(".invisArea");

onMouseArea.addEventListener("focus", function () {
  invisArea.style.display = "block";
  onMouseArea.innerHTML = "NOW MOVE MOUSE AWAY";
});

onMouseArea.addEventListener("blur", function () {
  invisArea.style.display = "none";
  onMouseArea.innerHTML = "PUT MOUSE ON ME";
});
