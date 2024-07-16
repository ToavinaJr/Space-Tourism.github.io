import { useState } from "react";
import Header from "../components/Header"
import '../styles/Crew.css'

const Crew = () => {
  const [indice , setIndice ] = useState(0);

  const roles = ["Commander", "Mission Specialist", "Pilot", "Flight Engineer"];
  const names = [
    "Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Anousheh Ansari" 
    ];
  const bios = [
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  ];
  const images = [
      "./assets/crew/image-douglas-hurley.png",
      "./assets/crew/image-mark-shuttleworth.png",
      "./assets/crew/image-victor-glover.png",
      "./assets/crew/image-anousheh-ansari.png"
  ];

  const indices = [0, 1, 2, 3]

  const changeIndex = (index : number) => {
    setIndice(index)
  }
  return (
    <div
        id="crew"
        className="
            text-white
            relative
        "
    >

        <Header />
        <main
          className="
            flex flex-col lg:flex-row p-4 lg:px-40 justify-between
          "
        >
          <section
            className="
              lg:w-1/2 w-full
            "
          >
            <h1
              className="
                text-3xl mb-10
              "
            > 
              <span className="text-slate-500">02</span> MEET YOUR CREEW 
            </h1>
            <div
              className="
                text-4xl text-slate-500 mb-4
              "
            >
              {roles[indice]}
            </div>

            <div
              className="
                text-4xl lg:text-6xl mb-10
              "
            >
              {names[indice]}
            </div>

            <p
              className="
                text-slate-300 text-xl
              "
            >
              {bios[indice]}
            </p>

        <div
          className="
            absolute flex gap-4 left-40 bottom-12
          "
        >
        {
          indices.map( index => (
            <div
              key={index}
              onClick={() => {changeIndex(index)}}
              className={`
                lg:w-[3rem] lg:h-[3rem] bg-white rounded-full ${index == indice ? "bg-white" : "bg-slate-500"}`
              }
                
            >
              
            </div>
          ))
        }
        </div>
          </section>


          <section
            className="
             mt-4
            "
          >
            <img 
              src={images[indice]}
              alt="" 
              className="
                w-[20rem] h-auto mb-5
              "
            />
          </section>      
        </main>

        <div
          className="
            z-10 fixed flex gap-4 left-8 bottom-4 lg:left-40 lg:bottom-12
          "
        >
        {
          indices.map( index => (
            <div
              key={index}
              onClick={() => {changeIndex(index)}}
              className={`
              w-[3rem] h-[3rem] bg-white rounded-full ${index == indice ? "bg-white" : "bg-slate-500"}`
              }
                
            >
              
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Crew;
