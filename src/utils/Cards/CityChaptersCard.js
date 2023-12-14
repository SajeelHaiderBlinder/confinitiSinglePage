import { useState } from "react";

export const CityChaptersCard = ({ image, text, onClick }) => {
  const [isBouncing, setIsBouncing] = useState(true);

  const handleCardClick = () => {
    if (text === "Lahore") {
      setIsBouncing(!isBouncing);
    }
    onClick();
  };

  return (
    <div
      className={`relative shadow rounded-xl mb-4 mr-4 cursor-pointer ${
        text === "Lahore" && isBouncing ? "animate-pulse" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-full h-48 object-cover md:w-80 md:h-48"
          src={image}
          alt="City Cover"
        />
        {text !== "Lahore" && (
          <div className="absolute inset-0 rounded-xl">
            <div className="bg-primary_purple opacity-50 h-full w-full rounded-xl"></div>
          </div>
        )}
        {text === "Lahore" && (
          <div className="absolute inset-0 rounded-xl">
            <div className="bg-light_black_shade opacity-50 h-full w-full rounded-xl"></div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-white text-xl font-bold text-shadow">
              {text} Chapter
            </p>
            {text !== "Lahore" && (
              <p className="text-white text-xl font-bold text-shadow">
                Coming Soon
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
