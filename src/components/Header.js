import header_image from "../assets/header_image.svg";
import rolus_logo from "../assets/rolus_logo.svg";
import devsinc_logo from "../assets/devsinc_logo.svg";
import netsol_logo from "../assets/netsol_logo.svg";
import confiz_logo from "../assets/confiz_logo.png";
import ebryx_logo from "../assets/ebryx_logo.svg";

export const Header = () => {
  const handleButtonClick = () => {
    const formLink = "https://forms.gle/15jsdVnMnDyhPd1W7";
    window.open(formLink, "_blank");
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-row justify-between mt-20 w-full ">
        <div className="w-full sm:w-1/2 md:w-1/2">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Say&#128075;&#127995;hello to
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary_purple">
            Pakistan's Largest Community.
          </p>
          <p className="text-base sm:text-slate-500 md:text-slate-500 mt-6">
            Empowering Students and Comunities in the IT domain to enable them
            in evloving and ultimately lead to transformation of Pakistan into
            next <span className="underline"> Sillicon Valley</span>
          </p>
          <div className="mt-6">
            {/* <input
              type="text"
              placeholder="Enter Your Email Address"
              className="p-2  border border-grey_shade rounded"
            /> */}
            <button
              className="mt-3 ml-5 bg-primary_purple py-2 px-6 rounded text-white cursor-pointer shadow-lg shadow-primary_purple-500/50 hover:bg-secondary_purple"
              onClick={handleButtonClick}
            >
              Join Waitlist
            </button>
          </div>
          <p className="text-base sm:text-slate-500 md:text-slate-500 mt-6">
            Trusted By Renowned IT Firms
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 mt-6 float-left justify-items-center items-center">
            <img className="mr-2" src={rolus_logo} alt="rolus" />
            <img className="mr-2" src={devsinc_logo} alt="devsinc" />
            <img className="mr-2" src={netsol_logo} alt="netsol" />
            <img className="mr-2 w-1/3" src={confiz_logo} alt="confiz" />
            <img className="mr-2 " src={ebryx_logo} alt="ebrynx" />
          </div>
        </div>
        <div className="w-full sm:w-auto md:w-auto">
          <img src={header_image} alt="" className="" />
        </div>
      </div>
    </>
  );
};
