const Header = () => {
    const linksData = [
      {
        id: "00",
        link: "HOME",
      },
      {
        id: "01",
        link: "DESTINATION",
      },
      {
        id: "02",
        link: "CREW",
      },
      {
        id: "01",
        link: "TECHNOLOGY",
      },
    ];

    return (
        <header
          className="
            w-full
            p-5
            flex justify-between
            text-white
          "
        >
          <div>
              <img src="/public/assets/shared/logo.svg" alt="" />
          </div>
          <ul
            className="
              p-5
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
                      <a
                        className="
                          hover:underline
                          transition
                        "
                        href=""
                      >
                          {linkData.link}
                      </a>
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
                src="/public/assets/icon-hamburger.svg"
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
