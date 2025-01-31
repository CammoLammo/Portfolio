export default function Skill({ text }) {
    return (
        <div className="w-min pl-5 pr-5 pb-0.5 pt-0.5 bg-portfolio-background-dark rounded-full border-2 border-portfolio-green-dark hover:border-portfolio-green hover:bg-portfolio-green-dark animate-all duration-300">
            <p className="text-white text-center">{text}</p>
        </div>
    );
}
