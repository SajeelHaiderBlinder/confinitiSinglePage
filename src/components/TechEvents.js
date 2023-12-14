import { TechEventsCard } from "../utils/Cards/TechEventsCard";

export const TechEvents = () => {
  return (
    <>
      <p className="text-4xl font-bold">Tech Events</p>
      <div className="container mx-auto py-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-6 sm:px-4 md:px-4">
          <TechEventsCard
            image=""
            date="12"
            month="SEPT"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <TechEventsCard
            image=""
            date="12"
            month="SEPT"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <TechEventsCard
            image=""
            date="12"
            month="SEPT"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </>
  );
};
