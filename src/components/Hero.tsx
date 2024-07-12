import HeroText from "./HeroText";
import HeroExplorer from "./HeroExplorer";

const Hero = () => {
    return (
        <div
            className="
                flex items-center justify-between
                flex-col md:flex-row
                w-full
                mt-4 md:mx-0 md:mt-20
                
            "
        >
            <HeroText />
            <HeroExplorer />
        </div>
    );
};

export default Hero;
