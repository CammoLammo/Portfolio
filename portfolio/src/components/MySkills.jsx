import {
    DiReact,
    DiPython,
    DiGithubBadge,
    DiNodejs,
    DiRasberryPi,
} from "react-icons/di";
import { FaRProject } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import SkillIcon from "./SkillIcon";

export default function MySkills() {
    return (
        <div className="text-white">
            <p className="text-3xl font-bold text-left pt-4 pb-4">My Skills</p>
            <div className="mr-5 ml-5 mt-2 mb-10 flex flex-row justify-between gap-2 flex-wrap">
                <SkillIcon Icon={DiReact} link={"https://react.dev/"} />
                <SkillIcon Icon={DiPython} link={"https://www.python.org/"} />
                <SkillIcon
                    Icon={FaRProject}
                    link={"https://www.r-project.org/"}
                />
                <SkillIcon Icon={DiNodejs} link={"https://nodejs.org/en"} />
                <SkillIcon
                    Icon={IoLogoElectron}
                    link={"https://www.electronjs.org/"}
                />
                <SkillIcon
                    Icon={DiRasberryPi}
                    link={"https://www.raspberrypi.com/"}
                />
                <SkillIcon Icon={DiGithubBadge} link={"https://github.com/"} />
            </div>
        </div>
    );
}
