export const BenefitsCard = ({ image, heading, description, buttonText }) => {
  return (
    <div className="bg-white p-4 m-2 h-[300px] flex flex-col items-center">
      <img src={image} alt="Image1" className="w-20 h-20 object-contain" />

      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <p className="text-black_shade text-center ">{description}</p>
      <p className="text-primary_purple mt-auto">Read more </p>
      <button className="mt-4 bg-primary_purple py-2 px-6 rounded text-white cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
};
