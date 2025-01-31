import { FaLinkedin } from "react-icons/fa";
import headshotImg from "../images/headshot.jpg";

export default function About() {
    return (
        <div className="text-white ml-5 mr-5 mt-2 flex flex-row columns-2 justify-between mb-10 rounded-lg drop-shadow-lg transition-all duration-[700ms] ease-in">
            <div>
                <h1 className="text-7xl font-bold text-left pt-4 pb-4">
                    I'm <span className="text-portfolio-green">Cameron</span>
                </h1>
                <div className="bg-portfolio-background-dark/95 p-4 mr-40 mt-3 rounded-lg">
                    <div className="flex flex-row justify-between items-start pr-5">
                        <h1 className="text-4xl font-bold pb-2">About Me</h1>
                        <a
                            href="https://www.linkedin.com/in/cameron-james-paterson/"
                            target="_blank"
                            className="flex flex-row gap-2 items-center"
                        >
                            <p className="font-bold text-xl">Contact Me</p>
                            <FaLinkedin size={40} color={"#0a66c2"} />
                        </a>
                    </div>

                    <p className="text-lg leading-loose">
                        I'm a{" "}
                        <span className="text-portfolio-green font-extrabold">
                            Software Engineer
                        </span>{" "}
                        currently pursuing a Master of Professional Engineering
                        at the University of Western Australia. I've had a
                        fascination with computers since a young age from my
                        early years gaming to dabbling with programming in
                        primary school and it's a dream come true to turn my
                        passion into a career. I bring tenacity and a strong
                        work ethic to every project I'm a part of and I am
                        always looking for the next challenge I can learn from.
                        When I'm not working on my latest project, you can find
                        me playing basketball or hitting the gym.
                    </p>
                </div>
            </div>

            <img
                src={headshotImg}
                alt={"Headshot"}
                className="h-[500px] w-[500px] object-cover rounded-lg border-portfolio-green border-2"
            ></img>
        </div>
    );
}
