export const TechEventsCard = ({
  image,
  date,
  month,
  heading,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: { image } }}
      ></div>
      <div className="flex flex-row py-4 px-6">
        <div className="text-center mr-4">
          <p>{month}</p>
          <p className="text-4xl font-semibold">{date}</p>
        </div>
        <div>
          <h2 className=" font-bold">{heading}</h2>
          <p className="mt-2 ">{description}</p>
        </div>
      </div>
    </div>
  );
};
