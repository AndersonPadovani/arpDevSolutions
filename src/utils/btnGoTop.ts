export default function GoTop() {
  const btnGoTop = document.getElementById("btnGoTop");

  document.addEventListener("scroll", (element) => {
    if (window.scrollY < 400) {
      btnGoTop!.style.display = "none";
    } else {
      btnGoTop!.style.display = "flex";
    }
  });
}
