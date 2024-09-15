const CopyEmail = () => {
  const copy = document.querySelector(".labelCopy") as HTMLElement;

  document.querySelector("#btCopy")?.addEventListener("click", (event) => {
    event.preventDefault();
    copy.style.display = "flex";

    navigator.clipboard.writeText(
      (document.querySelector(".emailText") as HTMLInputElement).innerHTML
    );

    setTimeout(() => {
      copy.style.display = "none";
    }, 2000);
  });
};

export default CopyEmail;
