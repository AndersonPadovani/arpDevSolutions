type ProgressSkillType = {
  title: string;
  progress: number;
};

const ProgressSkill = ({ progress, title }: ProgressSkillType) => {
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

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltipSkill");
  tooltip.style.opacity = "0";
  tooltip.innerHTML = `Dominio de ${progress}%`;

  //Função tooltip on mouse enter skill
  divProgress.addEventListener("mouseenter", (element) => {
    //Create delay to show tooltip
    setTimeout(() => {
      tooltip.style.opacity = "100";
    }, 1000);
  });

  //Função tooltip on mouse leave skill
  divProgress.addEventListener(
    "mouseleave",
    (element) => (tooltip.style.opacity = "0")
  );

  divContent.appendChild(spanTitle);
  divContent.appendChild(progressBar);

  divProgress.appendChild(imageSkillIcon);
  divProgress.appendChild(divContent);
  divProgress.appendChild(tooltip);
  skills?.appendChild(divProgress);
};

export default ProgressSkill;
