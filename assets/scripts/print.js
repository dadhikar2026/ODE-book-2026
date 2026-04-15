document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.innerText = "Print";
  btn.style.position = "fixed";
  btn.style.top = "10px";
  btn.style.right = "10px";
  btn.style.zIndex = "1000";

  btn.onclick = function () {
    window.print();
  };

  document.body.appendChild(btn);
});