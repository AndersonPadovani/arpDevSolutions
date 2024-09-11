import WorkerInfo from "./component/worker/worker.js";

window.onload = () => {
  selectTecIcon("python");
  reposGit();
};

function setErrorGit() {
  const error = document.getElementById("errorGit")!;
  error.style.display = "block";
}

type RepoGitType = {
  name: string;
  html_url: string;
  stargazers_count: number;
  // language: string;
  private: boolean;
  description: string;
  languages_url: string;
};
const reposGit = async () => {
  const apiGitUrl = "https://api.github.com/users/AndersonPadovani/repos";

  const data = await fetch(apiGitUrl);

  const repos = await data.json();

  if (!repos || data.status != 200) {
    setErrorGit();
    return 1;
  }

  repos.map(async (iten: RepoGitType) => {
    if (iten.stargazers_count <= 0) {
      return;
    }

    const languages = await getLanguageNames(iten.languages_url);

    WorkerInfo({
      infoWorker: iten.description,
      // srcImgWorke: !iten.private ? "emconstrução" : iten.name,
      srcImgWorke: (await thumbsExists(iten.name)) ? iten.name : "emconstrução",
      srcWorkerTech: languages,
      titleWorke: iten.name,
      repoUrl: iten.html_url,
    });
  });
};

async function thumbsExists(imagePath: string) {
  try {
    const response = await fetch(`./src/img/thumbs/${imagePath}.png`);
    return response.ok; // Retorna true se a imagem foi carregada com sucesso
  } catch (error) {
    return false; // Retorna false se houve erro no carregamento
  }
}

async function getLanguageNames(languageUrl: string): Promise<string[]> {
  try {
    const response = await fetch(languageUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const getLanguages = await response.json();

    let languages = Object.keys(getLanguages);

    languages.unshift("git");

    return languages;
  } catch (error) {
    return [""];
  }
}

const goTop = document.querySelector(".goTop") as HTMLInputElement;
goTop.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
