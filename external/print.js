document.addEventListener("DOMContentLoaded", function () {
  const link = document.createElement("a");
  link.href = "#";
  link.className = "ptx-print-button";
  link.setAttribute("aria-label", "Print this page");
  link.textContent = "🖨";

  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.print();
  });

  document.body.appendChild(link);
});