import ProgressSkill from "../component/progresSkills/progresSkills.js";
const skills = [
    ["Java Script", 95],
    ["SQL", 90],
    ["Html 5", 95],
    ["Git", 85],
    ["React Native", 80],
    ["Python", 70],
    ["TypeScript", 80],
    ["Css 3", 95],
    ["Prisma", 95],
    ["NextJs", 90],
    ["Docker", 85],
];
const SkilsItems = () => {
    skills.map((skil) => {
        ProgressSkill({ progress: skil[1], title: skil[0] });
    });
};
export default SkilsItems;
//# sourceMappingURL=skils.js.map