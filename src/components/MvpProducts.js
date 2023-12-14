import { MvpProductsCard } from "../utils/Cards/MvpProductsCard";

export const MvpProducts = () => {
  return (
    <>
      <p className="text-4xl font-bold">List of MVP Products</p>
      <div className="container mx-auto py-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 px-6 sm:px-4 md:px-4">
          <MvpProductsCard
            image=""
            date="12"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MvpProductsCard
            image=""
            date="12"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MvpProductsCard
            image=""
            date="12"
            heading=" Wonder Girls 2010 Wonder Girls World Tour San Francisco"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </>
  );
};
