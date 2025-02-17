import { useState } from "react";
import Header from "../components/Header";
import "../styles/Destination.css";


const Destination = () => {
    const [indice, setIndice] = useState(0);
    
    const images = [
        "./assets/destination/image-moon.png",
        "./assets/destination/image-mars.png",
        "./assets/destination/image-europa.png",
        "./assets/destination/image-titan.png",
    ]

    const destinations = ["Moon", "Mars", "Europa", "Titan"];
    const descriptions = [
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    ]
        
    const distances = [
        "384,400 km", 
        "225 mil. km", 
        "628 mil. km",
        "1.6 bil. km"
    ];
    const travels = [
        "3 days", "9 months", "3 years", "7 years"
    ]
    
    const changeIndex = (index : number ) => {
        setIndice(index)
        // console.log(indice);
    }

    return (
        <div 
            id="destination"
        >
            <Header />
            <main
                className="
                flex flex-col justify-center lg:flex-row
                p-2 lg:px-32 gap-3
                text-white
                w-full
            "
            >
                <section
                    className="
                        flex flex-col gap-3
                        p-5 w-full lg:w-1/2
                    "
                >
                    <h1
                        className="
                            text-2xl lg:text-4xl
                            text-white font-bold mb-5                            
                        "
                    >
                        <span className="text-zinc-500">01 </span>PICK YOUR DESTINATION
                    </h1>

                    <img
                        src={images[indice]}
                        alt=""
                        className="
                            w-84 md:w-72 lg:w-[20rem]
                            h-auto   
                        "
                    />
                </section>

                <section
                    className="
                        w-full lg:w-1/2
                        p-5 
                    "
                >
                    <ul
                        className="
                            text-2xl
                            flex gap-6
                        "
                    >
                        {destinations.map((destination, index) => (
                            <li 
                                key={index}
                                className={`
                                    hover:text-zinc-400 text-2xl lg:text-4xl font-bold mb-5 cursor-pointer ${index == indice ? "underline text-white" : "text-zinc-500"}
                                `}                      
                                onClick={
                                    () => { 
                                    changeIndex(index)
                                    
                                }}
                            >
                                {destination}</li>
                        ))}
                    </ul>
                    
                    <div
                        className="
                            text-6xl lg:text-9xl mb-5
                        "
                    >
                        {destinations[indice]}
                    </div>
                    <div
                        className="
                            mb-5  text-zinc-400
                        "
                    >
                        {descriptions[indice]}
                    </div>
                    
                    <hr 
                        className="
                            w-full border-zinc-300
                            m-5 ml-0
                        "
                    />
                    <div
                        className="
                            flex flex-col lg:flex-row mb-10 bord
                            gap-5 lg:gap-10
                        "
                    >
                        <div
                            className="
                                mb-5
                            "
                        >
                            <div
                                className="
                                    text-xl text-zinc-400
                                "
                            >
                                AVG DISTANCE
                            </div>
                            <div
                                className="
                                text-3xl
                                "
                            >
                                {distances[indice]}
                            </div>
                        </div>

                        <div>
                            <div
                                className="
                                    text-xl text-zinc-400
                                "
                            >
                                EST. TRAVEL TIME
                            </div>
                            <div
                                className="
                                    text-3xl 
                                "
                            >
                                {travels[indice]}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Destination;
