import { useEffect, useState } from "react";
import logo from "../assets/confiniti_logo.svg";

export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleButtonClick = () => {
    const formLink = "https://forms.gle/15jsdVnMnDyhPd1W7";
    window.open(formLink, "_blank");
  };
  return (
    <div className="flex flex-row justify-between items-center mt-4">
      <div className="flex flex-row items-center cursor-pointer">
        <img src={logo} alt="logo" />
        <h1 className="ml-5 text-xl sm:text-2xl font-normal">
          Confiniti.&#174;
        </h1>
      </div>
      <div className="lg:hidden cursor-pointer" onClick={toggleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {!isMobile && (
        <div
          className={`md:flex ${isDrawerOpen ? "block" : "hidden"} md:block `}
        >
          <nav
            className={`md:flex ${isDrawerOpen ? "block" : "hidden"} md:block`}
          >
            <ul className="flex flex-col md:flex-row items-center font-medium md:space-x-5">
              {/* <li className="mb-3 md:mb-0 cursor-pointer">Home</li>
              <li className="mb-3 md:mb-0 cursor-pointer">About Us</li>
              <li className="mb-3 md:mb-0 cursor-pointer">How it works</li>
              <li className="mb-3 md:mb-0 cursor-pointer">Services</li>
              <li className="mb-3 md:mb-0 cursor-pointer">FAQ'S</li> */}
              <button
                className="ml-5 bg-primary_purple py-2 px-6 rounded-full text-white cursor-pointer hover:bg-secondary_purple"
                onClick={handleButtonClick}
              >
                Join Waitlist
              </button>
            </ul>
          </nav>
        </div>
      )}
      {isMobile && (
        <div
          className={` ${
            isDrawerOpen ? "block fixed inset-0 bg-gray-800" : "hidden"
          }`}
          onClick={toggleDrawer}
        >
          <nav
            className={`md:flex flex-col absolute top-0 right-0 h-full bg-white p-4 opacity-0 transform ${
              isDrawerOpen ? "opacity-100 translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out transition-opacity delay-300`}
          >
            <ul className="flex flex-col items-center font-medium space-y-3">
              {/* <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">How it works</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">FAQ'S</li> */}
              <button
                className="bg-primary_purple py-2 px-6 rounded-full text-white cursor-pointer  hover:bg-secondary_purple"
                onClick={handleButtonClick}
              >
                Join Waitlist
              </button>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
