const infoIcon = document.getElementById("infoIcon")?.children;
const infoText = document.getElementById("infoText")?.children;
const activeIcon = Element;
let listIconTechElement = [];
let listTextInfoTechelement = [];
var ClassRemoveEnum;
(function (ClassRemoveEnum) {
    ClassRemoveEnum["infoActive"] = "infoActive";
    ClassRemoveEnum["hidden"] = "hidden";
})(ClassRemoveEnum || (ClassRemoveEnum = {}));
const IconTechSelect = () => {
    for (let item of infoIcon) {
        listIconTechElement.push(item);
    }
    for (let item of infoText) {
        listTextInfoTechelement.push(item);
    }
    listIconTechElement.map((element) => element.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveIcon(element);
    }));
};
function setActiveIcon(elementIcon) {
    listIconTechElement.forEach((icon) => removeClass(icon, ClassRemoveEnum.infoActive));
    elementIcon.classList.add("infoActive");
    setActiveTextInfo(elementIcon.id);
}
function setActiveTextInfo(iconId) {
    listTextInfoTechelement.forEach((textInfo) => {
        if (textInfo.id.toLocaleUpperCase() === iconId) {
            removeClass(textInfo, ClassRemoveEnum.hidden);
        }
        else {
            textInfo.classList.add("hidden");
        }
    });
}
function removeClass(element, classRemove) {
    element.classList.remove(classRemove);
}
export default IconTechSelect;
//# sourceMappingURL=iconTechSelect.js.map