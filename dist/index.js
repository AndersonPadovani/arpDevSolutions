import WorkerInfo from "./component/worker/worker.js";
window.onload = () => {
    selectTecIcon("python");
    reposGit();
};
function setErrorGit() {
    const error = document.getElementById("errorGit");
    error.style.display = "block";
}
const reposGit = async () => {
    const apiGitUrl = "https://api.github.com/users/AndersonPadovani/repos";
    const data = await fetch(apiGitUrl);
    const repos = await data.json();
    if (!repos || data.status != 200) {
        setErrorGit();
        return 1;
    }
    repos.map(async (iten) => {
        if (iten.stargazers_count <= 0) {
            return;
        }
        const languages = await getLanguageNames(iten.languages_url);
        WorkerInfo({
            infoWorker: iten.description,
            srcImgWorke: !iten.private ? "emconstrução" : iten.name,
            srcWorkerTech: languages,
            titleWorke: iten.name,
        });
    });
};
async function getLanguageNames(languageUrl) {
    const data = await fetch(languageUrl);
    if (!data) {
        return [""];
    }
    const languages = await data.json();
    return [languages];
}
const goTop = document.querySelector(".goTop");
goTop.addEventListener("click", (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
document.querySelector("#cutbr")?.addEventListener("click", (e) => {
    window.open("https://cutbr.site/", "_blanck");
});
document.querySelector("#login")?.addEventListener("click", (e) => {
    window.open("https://andersonpadovani.com.br/v1/projetos/login.php", "_blanck");
});
window.addEventListener("scroll", (e) => {
    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    }
    else {
        goTop.style.display = "none";
    }
});
const tecIcons = document.querySelector(".itensTecIcon");
tecIcons?.addEventListener("click", (event) => {
    const element = event.target;
    if (element.id != "") {
        selectTecIcon(element.id);
    }
});
function selectTecIcon(id) {
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
        let info = document.getElementById(value);
        element?.classList.remove("infoActive");
        info.style.display = "none";
        if (element?.id === id) {
            info.style.display = "block";
            element.classList.add("infoActive");
        }
    });
}
const copy = document.querySelector(".labelCopy");
document.querySelector("#btCopy")?.addEventListener("click", (event) => {
    event.preventDefault();
    copy.style.display = "flex";
    navigator.clipboard.writeText(document.querySelector(".emailText").innerHTML);
    setTimeout(() => {
        copy.style.display = "none";
    }, 2000);
});
//# sourceMappingURL=index.js.map