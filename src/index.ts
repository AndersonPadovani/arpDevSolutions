import CopyEmail from "./utils/copyEmail.js";
import IconTechSelect from "./utils/iconTechSelect.js";
import GetReposGit from "./utils/repoGit.js";

window.onload = () => {
  IconTechSelect(); //function Icons and text tec alternable
  GetReposGit(); //function populate card whit repos git
  CopyEmail(); //function buttom copy emial
};
