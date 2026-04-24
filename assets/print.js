document.addEventListener("DOMContentLoaded", function () {
  const link = document.createElement("a");
  link.href = "#";
  link.className = "ptx-print-button";
  link.setAttribute("aria-label", "Print this page");
  link.textContent = "🖨";

  link.onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    setTimeout(() => window.print(), 0);
  };

  document.body.appendChild(link);
});
