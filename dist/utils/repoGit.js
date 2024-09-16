import WorkerInfo from "../component/worker/worker.js";
const GetReposGit = async () => {
    function setErrorGit(isError) {
        const error = document.getElementById("errorGit");
        isError ? error.classList.remove("hidden") : error.classList.add("hidden");
    }
    // const apiGitUrl = "https://api.github.com/users/AndersonPadovani/repos";
    const apiGitUrl = "https://api.github.com/users/AndersonPadovani/repo"; //Dev Mode, to limit api git error
    const data = await fetch(apiGitUrl);
    const repos = await data.json();
    if (!repos || data.status != 200) {
        setErrorGit(true);
        return 1;
    }
    repos.map(async (iten) => {
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
async function thumbsExists(imagePath) {
    try {
        const response = await fetch(`./src/img/thumbs/${imagePath}.png`);
        return response.ok; // Retorna true se a imagem foi carregada com sucesso
    }
    catch (error) {
        return false; // Retorna false se houve erro no carregamento
    }
}
async function getLanguageNames(languageUrl) {
    try {
        const response = await fetch(languageUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const getLanguages = await response.json();
        let languages = Object.keys(getLanguages);
        languages.unshift("git");
        return languages;
    }
    catch (error) {
        return [""];
    }
}
export default GetReposGit;
//# sourceMappingURL=repoGit.js.map