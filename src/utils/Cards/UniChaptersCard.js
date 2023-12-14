import confiniti_logo from "../../assets/confiniti_logo.svg";

export const UniChaptersCard = ({ text, image, onClick }) => {
  return (
    <div
      className="relative shadow rounded-xl mr-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-96 h-48 object-cover md:w-96 md:h-48"
          src={image}
          alt="University Cover"
        />
        <div className="absolute inset-0 rounded-xl">
          <div className="bg-light_black_shade opacity-50 h-full w-full rounded-xl"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-row items-center">
              <img src={confiniti_logo} alt="Confiniti" className="mr-4" />
              <p className="text-white text-xl font-bold text-shadow">
                Confiniti
              </p>
            </div>
            <p className="text-white text-xl font-bold text-shadow">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
