import { UniChaptersCard } from "../utils/Cards/UniChaptersCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CityChaptersCard } from "../utils/Cards/CityChaptersCard";

import lahore_image from "../assets/lahore.jpg";
import islamabad_image from "../assets/islamabad.jpg";
import faisalabad_image from "../assets/faislabad.jpg";
import karachi_image from "../assets/karachi.jpg";
import peshawar_image from "../assets/peshawar.jpg";
import { useState } from "react";
import { UniChaptersSlider } from "../utils/Slider/UniChaptersSlider";

export const ConChapters = () => {
  const [chapterClick, setChapterClick] = useState([1, 0, 0, 0, 0]);

  const updateChapterClickState = (index) => {
    setChapterClick((prevArray) => {
      if (prevArray[index] === 1) {
        const newArray = Array(prevArray.length).fill(0);
        newArray[index] = 0;
        return newArray;
      } else {
        const newArray = Array(prevArray.length).fill(0);
        newArray[index] = 1;
        return newArray;
      }
    });
  };

  const handleChapterClick = (choice, index) => {
    switch (choice.toUpperCase()) {
      case "LAHORE":
        updateChapterClickState(index);
        break;
      case "ISLAMABAD":
        updateChapterClickState(index);
        break;
      case "KARACHI":
        updateChapterClickState(index);
        break;
      case "FAISLABAD":
        updateChapterClickState(index);
        break;
      case "PESHAWAR":
        updateChapterClickState(index);
        break;
      default:
        break;
    }
  };
  const renderSlider = () => {
    const selectedIndex = chapterClick.findIndex((value) => value === 1);

    switch (selectedIndex) {
      case 0:
        return <UniChaptersSlider />;
      // case 1:
      //   return <UniChaptersSlider />;
      // case 2:
      //   return <UniChaptersSlider />;
      // case 3:
      //   return <UniChaptersSlider />;
      // case 4:
      //   return <UniChaptersSlider />;
      default:
        return null;
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-2xl md:text-4xl font-bold text-center mb-6">
        <span className="text-primary_purple">Confiniti </span> Chapter Near You
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:mb-10 justify-center">
          <CityChaptersCard
            image={lahore_image}
            text={"Lahore"}
            onClick={() => handleChapterClick("LAHORE", 0)}
          />
          <CityChaptersCard
            image={islamabad_image}
            text={"Islamabad"}
            onClick={() => handleChapterClick("ISLAMABAD", 1)}
          />
          <CityChaptersCard
            image={karachi_image}
            text={"Karachi"}
            onClick={() => handleChapterClick("KARACHI", 2)}
          />
          <CityChaptersCard
            image={faisalabad_image}
            text={"Faisalabad"}
            onClick={() => handleChapterClick("FAISLABAD", 3)}
          />
          <CityChaptersCard
            image={peshawar_image}
            text={"Peshawar"}
            onClick={() => handleChapterClick("PESHAWAR", 4)}
          />
        </div>
        {renderSlider()}
      </div>
    </div>
  );
};
