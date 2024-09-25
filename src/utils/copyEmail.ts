const CopyEmail = () => {
  const labelCopy = document.querySelector(".labelCopy") as HTMLElement;
  const copyButton = document.getElementById("btCopy");
  const textEmail = document.getElementById("emailText");

  copyButton?.addEventListener("click", (event) => {
    event.preventDefault();
    textEmail!.style.color = "green";
    labelCopy.style.display = "flex";

    navigator.clipboard.writeText(textEmail!.innerText);

    setTimeout(() => {
      labelCopy.style.display = "none";
      textEmail!.style.color = "black";
    }, 2000);
  });
};

export default CopyEmail;
