import ProgressSkill from "../component/progresSkills/progresSkills.js";

type SkillsType = {
  name: string;
  value: number;
};

const skills: [string, number][] = [
  ["Java Script", 75],
  ["SQL", 80],
  ["Html 5", 90],
  ["Git", 80],
  ["React Native", 70],
  ["Python", 65],
  ["TypeScript", 75],
  ["Css 3", 90],
  ["Prisma", 80],
];

const SkilsItems = () => {
  skills.map((skil) => {
    ProgressSkill({ progress: skil[1], title: skil[0] });
  });
};

export default SkilsItems;
