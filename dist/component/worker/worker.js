const WorkerInfo = ({ srcImgWorke, srcWorkerTech, titleWorke, infoWorker, }) => {
    const cardWork = document.createElement("div");
    cardWork.className = "cardWork";
    const imgWork = document.createElement("img");
    imgWork.src = `./src/img/thumbs/${srcImgWorke}.png`;
    const sideCard = document.createElement("div");
    sideCard.className = "sideCard";
    const workeTitle = document.createElement("h2");
    workeTitle.innerText = titleWorke;
    const cardInfo = document.createElement("span");
    cardInfo.className = "cardInfo";
    cardInfo.innerText = infoWorker;
    const cardBottom = document.createElement("div");
    cardBottom.className = "cardBottom";
    const cardTecs = document.createElement("div");
    cardTecs.className = "cardTecs";
    const inputWork = document.createElement("input");
    inputWork.value = "VER";
    inputWork.type = "button";
    cardWork.appendChild(imgWork);
    cardWork.appendChild(sideCard);
    sideCard.appendChild(workeTitle);
    sideCard.appendChild(cardInfo);
    if (srcWorkerTech) {
        srcWorkerTech.map((src) => {
            const imgIconTech = document.createElement("img");
            imgIconTech.alt = "Icone Tecnologia utilizada";
            imgIconTech.src = `./src/img/icons/${src}.svg`;
            cardTecs.appendChild(imgIconTech);
        });
    }
    cardBottom.appendChild(cardTecs);
    cardBottom.appendChild(inputWork);
    sideCard.appendChild(cardBottom);
    addToPage(cardWork);
};
function addToPage(element) {
    const secWorks = document.getElementById("secWorks");
    secWorks?.appendChild(element);
}
export default WorkerInfo;
//# sourceMappingURL=worker.js.map