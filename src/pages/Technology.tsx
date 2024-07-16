import { useState } from "react";
import Header from "../components/Header"
import '../styles/Technology.css'

const Technology = () => {
  const [indice, setIndice] = useState(0);
  const names = [
    "Launch vehicle", "Spaceport", "Space capsule"
  ];
  const images = [
    "./assets/technology/image-launch-vehicle-portrait.jpg",
    "./assets/technology/image-spaceport-portrait.jpg",
    "./assets/technology/image-space-capsule-portrait.jpg"
  ];
  const descriptions = [
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  ]
  const counter = [0, 1, 2]
  const changeIndex = (index : number) => {
    setIndice(index)
  }

  return (
    <div
        id="technology"
    >
        <Header />

        <h1
          className="
            text-white text-3xl py-4 px-4 lg:px-5
          "
        >
          <span className="text-slate-500">03</span> SPACE LAUNCH 101
        </h1>
        <main
          className="
            text-white  flex flex-col lg:flex-row p-4 justify-between
          "
        >
          <section
            className="
              flex flex-col lg:flex-row gap-10 w-full lg:w-1/2
            "
          >
            <div
              className="
                flex flex-row lg:flex-col gap-2 lg:gap-5
              "
            >
              {
                counter.map( index => ( 
                  <div
                    className="
                      flex items-center justify-center text-slate-800 bg-slate-200 w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] p-1 rounded-full
                      cursor-pointer text-3xl
                    "
                    key={index}
                    onClick={() => {changeIndex(index)}}
                  >
                    {index+1}
                  </div>
                ))
              }
            </div>
            
            <div>
                <h3
                  className="
                    text-slate-500 text-2xl mb-2
                  "
                >
                  The terminology
                </h3>
                <div
                  className="
                    text-4xl lg:text-6xl mb-4 lg:mb-10  
                  "
                >
                  {names[indice]}
                </div>
                <p
                  className="
                    text-xl mb-4 text-slate-300
                  "
                >
                  {descriptions[indice]}
                </p>
            </div>
            
          </section>
              <img 
                src={images[indice]}
                alt="" 
                className="
                  w-[25rem] h-auto
                "
              />
          <section>

          </section>
        </main>
    </div>
  )
}

export default Technology