export const WhyConfinitiCard = ({ image, heading, info }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:w-96 mb-4">
      <img src={image} alt="" />

      <div className="ml-4">
        <p className=" md:text-2xl font-bold text-xl">{heading}</p>
        <p className="text-sm md:text-base">{info}</p>
      </div>
    </div>
  );
};
