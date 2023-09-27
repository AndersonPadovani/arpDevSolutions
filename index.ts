function startPage() {
  selectTecIcon("python");
}
const goTop = document.querySelector(".goTop") as HTMLInputElement;
goTop.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("clicou");
});

document.querySelector("#cutbr")?.addEventListener("click", (e) => {
  window.open("https://cutbr.site/", "_blanck");
});

document.querySelector("#login")?.addEventListener("click", (e) => {
  window.open(
    "https://andersonpadovani.com.br/v1/projetos/login.php",
    "_blanck"
  );
});

window.addEventListener("scroll", (e) => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
});

const tecIcons = document.querySelector(".itensTecIcon");
tecIcons?.addEventListener("click", (event) => {
  const element = event.target as HTMLInputElement;
  if (element.id != "") {
    selectTecIcon(element.id);
  }
});

function selectTecIcon(id: string) {
  const listTecInfo = {
    github: "ghInfo",
    java: "javaInfo",
    js: "jsInfo",
    python: "pyInfo",
    react: "reactInfo",
    sql: "sqlInfo",
    nodejs: "nodejsInfo",
  };

  Object.entries(listTecInfo).forEach(([key, value]) => {
    let element = document.getElementById(key);
    let info = document.getElementById(value) as HTMLObjectElement;
    element?.classList.remove("infoActive");

    info.style.display = "none";

    if (element?.id === id) {
      info.style.display = "block";
      element.classList.add("infoActive");
    }
  });
}

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
