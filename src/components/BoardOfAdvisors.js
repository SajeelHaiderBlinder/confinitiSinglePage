import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import boa_1 from "../assets/boa/atta_ur_rehman.jpg";
import boa_2 from "../assets/boa/haroon.jpg";
import boa_3 from "../assets/boa/bilal.jpg";
import boa_4 from "../assets/boa/irfan.jpg";
import boa_5 from "../assets/boa/azam.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const advisorsData = [
  {
    image: boa_1,
    name: "Atta Ur Rehman",
    role: "Senior VP @Devsinc",
  },
  { image: boa_3, name: "Bilal Khan", role: "VP @Commence" },
  { image: boa_4, name: "Irfan Ehsan", role: "VP @Alchemative" },
  {
    image: boa_5,
    name: "Azam Malik",
    role: "MD @Ejad Labs ",
  },
  {
    image: boa_2,
    name: "Haroon Akhtar",
    role: "Co-founder HKC",
  },
];

export const BoardOfAdvisors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderAdvisors = () => {
    if (isMobile) {
      return (
        <div className="flex flex-wrap justify-center">
          {advisorsData.map((advisor, index) => (
            <div className="relative" key={index} style={{ flex: "0 0 50%" }}>
              <img className="w-full h-auto" src={advisor.image} alt="" />
              <div className="absolute bottom-4 inset-x-0 flex items-center flex-col text-center text-white bg-primary_purple ">
                <p className="text-white">{advisor.name}</p>
                <p className="text-white">{advisor.role}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="grid md:grid-cols-5 grid-rows-1 grid-cols-2">
          {advisorsData.map((advisor, index) => (
            <div key={index} className="relative">
              <img src={advisor.image} alt="" />
              <div className="absolute bottom-4 inset-x-0 flex items-center flex-col text-center text-white  bg-primary_purple">
                <p className="text-white">{advisor.name}</p>
                <p className="text-white">{advisor.role}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-4xl font-bold text-center">
        Revealing our{" "}
        <span className="text-primary_purple">Board of Advisors</span>
      </div>

      <div className="mt-10">{renderAdvisors()}</div>
    </div>
  );
};
