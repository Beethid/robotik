const menuList = document.getElementById("list");
const overlay = document.querySelector(".overlay");
const toggleBtn = document.getElementById("toggle-btn");

function buka(event) {
  event.stopPropagation();
  menuList.classList.toggle("active");
  overlay.classList.toggle("active");
}

toggleBtn.addEventListener("click", buka);

document.addEventListener("click", function (event) {
  if (
    menuList.classList.contains("active") &&
    !menuList.contains(event.target) &&
    event.target !== toggleBtn
  ) {
    menuList.classList.remove("active");
    overlay.classList.remove("active");
  }
});

feather.replace();


const kartu =document.getElementById("card-wrapper");
index = 0;

function next() {
  kartu.index(index++);
}