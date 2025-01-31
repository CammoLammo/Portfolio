import Skill from "./Skill";
import { useRef } from "react";
import useIsVisible from "../hooks/useIsVisible";

export default function ProjectEntry({ title, description, skills, image }) {
    const ref1 = useRef(null);
    const isVisible = useIsVisible(ref1);

    return (
        <div
            ref={ref1}
            className={`ml-5 mr-5 mt-2 leading-loose flex flex-row columns-2 mb-10 bg-portfolio-background-dark/95 rounded-lg text-white drop-shadow-lg transition-all duration-[700ms] ease-in`}
        >
            <div className="p-4 flex basis-2/5 items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="h-[300px] w-[300px] object-cover rounded-lg hover:scale-105 transition-all duration-300"
                ></img>
            </div>
            <div className="basis-3/5">
                <p className="text-3xl font-bold text-left pt-4 pb-4">
                    {title}
                </p>
                <div className="flex flex-row flex-wrap text-nowrap justify-left gap-2 pb-2 select-none">
                    {skills.map((skill, index) => (
                        <Skill text={skill} key={index} />
                    ))}
                </div>

                <p className="pr-10 pb-4 text-left">{description}</p>
            </div>
        </div>
    );
}
