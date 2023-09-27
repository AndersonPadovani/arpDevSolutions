"use strict";
function startPage() {
    selectTecIcon("python");
}
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
