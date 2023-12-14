import app_side from "../assets/app_side.svg";

export const UpcomingBanner = () => {
  return (
    <div className="mt-4 mb-24 bg-secondary_purple p-16 flex flex-col sm:flex-row justify-evenly items-center">
      <div className="relative w-full sm:w-1/2">
        <img
          src={app_side}
          alt=""
          className="absolute top-0 left-0 sm:left-16 transform rotate-45 origin-left"
        />
        <img src={app_side} alt="" className="relative" />
      </div>

      <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <p className="text-4xl font-bold">New: Confiniti.&#174; Mobile App</p>
        <p className="text-2xl font-semibold mt-4">
          Discover the potential of Confiniti through our upcoming mobile app
          release!
        </p>
        <p className="text-2xl font-semibold mt-4 cursor-pointer">
          Learn More >
        </p>
      </div>
    </div>
  );
};
