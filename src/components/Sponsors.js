import rolus_logo from "../assets/rolus_logo.svg";
import devsinc_logo from "../assets/devsinc_logo.svg";
import netsol_logo from "../assets/netsol_logo.svg";

export const Sponsors = () => {
  return (
    <div className="bg-black_shade p-6 flex flex-col items-center mt-8">
      <p className="text-yellow_shade">
        Supported by Top Companies and Communities
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6  items-center justify-items-center">
        <img src={rolus_logo} alt="" />
        <img src={devsinc_logo} alt="" />
        <img src={netsol_logo} alt="" />
      </div>
    </div>
  );
};
