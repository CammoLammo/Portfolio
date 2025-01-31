export default function SkillIcon({ Icon, link }) {
    return (
        <a href={link}>
            <div className="p-2 border-2 border-portfolio-green rounded-lg bg-portfolio-background-dark/95 transition-all duration-500">
                <Icon
                    className="hover:animate-spin transition-all"
                    size={100}
                    color={"#4E9F3D"}
                />
            </div>
        </a>
    );
}
