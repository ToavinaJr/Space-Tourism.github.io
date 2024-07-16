import { Link } from "react-router-dom";

const Header = () => {
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
            text-white
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
                            <Link to={linkData.path}>{linkData.link}</Link>
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
                    src="/assets/icon-hamburger.svg"
                    alt="Burger Icon"
                    className="
                  hover:cursor-pointer
                "
                />
            </div>
        </header>
    );
};

export default Header;
