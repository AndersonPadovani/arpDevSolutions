const ProgressSkill = ({ progress, title }) => {
    const skills = document.getElementById("skills");
    const divProgress = document.createElement("div");
    divProgress.className = "skillItem";
    const imageSkillIcon = document.createElement("img");
    imageSkillIcon.src = `./src/img/skils/${title}.svg`;
    imageSkillIcon.alt = `Icone de skills ${title}`;
    const divContent = document.createElement("div");
    const spanTitle = document.createElement("span");
    spanTitle.innerHTML = title;
    const progressBar = document.createElement("progress");
    progressBar.className = "progressBar";
    progressBar.max = 100;
    progressBar.value = progress;
    divContent.appendChild(spanTitle);
    divContent.appendChild(progressBar);
    divProgress.appendChild(imageSkillIcon);
    divProgress.appendChild(divContent);
    skills?.appendChild(divProgress);
};
export default ProgressSkill;
//# sourceMappingURL=progresSkills.js.map