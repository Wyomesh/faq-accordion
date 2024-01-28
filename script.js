const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

plus.forEach((element) => {
  element.addEventListener("click", () => {
    const que = element.parentNode;
    que.addEventListener("click", () => showAns(que));
  });
});

minus.forEach((element) => {
  element.addEventListener("click", () => {
    const que = element.parentNode;
    que.addEventListener("click", () => hideAns(que));
  });
});
function showAns(que) {
  que.querySelector(".minus").style.display = "grid";
  que.querySelector(".plus").style.display = "none";
  que.parentNode.querySelector(".ans").style.display = "grid";
}
function hideAns(que) {
  que.querySelector(".minus").style.display = "none";
  que.querySelector(".plus").style.display = "grid";
  que.parentNode.querySelector(".ans").style.display = "none";
}
