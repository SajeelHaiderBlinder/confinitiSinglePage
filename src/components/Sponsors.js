import rolus_logo from "../assets/rolus_logo.svg";
import devsinc_logo from "../assets/devsinc_logo.svg";
import netsol_logo from "../assets/netsol_logo.svg";
import confiz_logo from "../assets/confiz_logo.png";
import ebryx_logo from "../assets/ebryx_logo.svg";
export const Sponsors = () => {
  return (
    <div className="bg-black_shade p-6 flex flex-col items-center mt-8">
      <p className="text-yellow_shade"> Trusted By Renowned IT Firms</p>
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 mt-6 items-center justify-items-center">
        <img src={rolus_logo} alt="rolus" />
        {/* <img src={devsinc_logo} alt="devsinc" /> */}
        <img src={netsol_logo} alt="netsol" />
        <img src={confiz_logo} alt="confiz" className="w-1/3" />
        <img src={ebryx_logo} alt="ebryx" />
      </div>
    </div>
  );
};
