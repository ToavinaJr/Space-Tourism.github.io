import { useState } from "react";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
    const [ openMenu, setOpenMenu ]  = useState(false);
    const [ icon , setIcon ] = useState("/assets/icon-hamburger.svg")
    const handleMenu = () => {
        setOpenMenu(!openMenu);
        !openMenu ? disablePageScroll() : enablePageScroll();
        icon === "/assets/icon-hamburger.svg"? setIcon("/assets/icon-close.svg") : setIcon("/assets/icon-hamburger.svg")
    }

    const linksData = [
        {
            id: "00",
            link: "HOME",
            path: "/",
        },
        {
            id: "01",
            link: "DESTINATION",
            path: "/destination",
        },
        {
            id: "02",
            link: "CREW",
            path: "/crew",
        },
        {
            id: "03",
            link: "TECHNOLOGY",
            path: "/Technology",
        },
    ];

    return (
        <header
            className="
            w-full
            p-5
            pr-0
            flex justify-between items-center
            text-white text-xl
          "
        >
            <div>
                <img src="/assets/shared/logo.svg" alt="" />
            </div>
            <ul
                className="
              p-5
              px-[6rem]
              hidden
              md:flex
              flex-row
              gap-10
              backdrop-blur-3xl
            "
            >
                {linksData.map((linkData, index) => (
                    <li
                        key={index}
                        className="
                    flex gap-3
                    "
                    >

                        <span
                            className="
                          text-white
                        "
                        >
                            {linkData.id}
                        </span>
                        <Link 
                            to={linkData.path}
                        >
                            {linkData.link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                className="
                flex
                md:hidden
                absolute
                right-[2rem]
                top-[2rem]
          "
            >
                <img
                    src={icon}
                    alt="Burger Icon"
                    className="
                        hover:cursor-pointer
                        z-30
                    "
                    onClick={handleMenu}
                />
            </div>

            {openMenu && <ul
                className="
                    absolute
                    flex md:hidden flex-col justify-center items-center gap-5
                    w-screen
                    h-screen
                    bg-[#0d0d1a]
                    top-0 left-0
                    z-20
                "
            >
                {linksData.map((linkData, index) => (
                    <li
                        key={index}
                        className="
                            flex gap-3
                            text-left
                        "
                    >
                        <Link 
                            to={linkData.path}
                            onClick={handleMenu}           
                        >
                                {linkData.link}
                        </Link>
                    </li>
                ))}
            </ul>}
        </header>
    );
};

export default Header;
