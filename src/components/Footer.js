import logo from "../assets/confiniti_logo.svg";
import linkedin_logo from "../assets/linkedin_logo.svg";
import facebook_logo from "../assets/facebook.png";
import instagram_logo from "../assets/instagram.png";

export const Footer = () => {
  return (
    <div className="bg-primary_purple text-white p-4 sm:p-20 gap-6 flex flex-col md:flex-row">
      <div className="">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" />{" "}
          <p className="ml-5 text-xl sm:text-2xl font-normal">
            Confiniti.&#174;{" "}
          </p>
        </div>
        <p className="mt-4">
          Empowering Students and Comunities in the IT domain to enable them in
          evloving and ultimately lead to transformation of Pakistan into next
          Sillicon Valley
        </p>
      </div>
      <div className="w-1/2 mt-4 flex items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/confinitipk/"
        >
          <img
            src={linkedin_logo}
            alt="linkedin"
            className="w-6 h-6 sm:w-8 sm:h-8 mr-4"
          />
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/_confiniti/"
        >
          <img
            src={instagram_logo}
            alt="instagram"
            className="w-6 h-6 sm:w-8 sm:h-8 mr-4"
          />
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=61552144790311&mibextid=eHce3h"
        >
          <img
            src={facebook_logo}
            alt="facebook"
            className="w-6 h-6 sm:w-8 sm:h-8 mr-4"
          />
        </a>
      </div>
    </div>
    // <div className="bg-primary_purple text-white p-4 sm:p-20 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //   <div className="sm:col-span-2 lg:col-span-1">
    //     <div className="flex items-center cursor-pointer">
    //       <img src={logo} alt="logo" />
    //       <p className="ml-5 text-xl sm:text-2xl font-normal">
    //         Confiniti.&#174;
    //       </p>
    //     </div>
    //     <p className="mt-4">
    //       Empowering Students and Comunities in the IT domain to enable them in
    //       evloving and ultimately lead to transformation of Pakistan into next
    //       Sillicon Valley
    //     </p>
    //     <div className="mt-4 flex items-center">
    //       <a href="https://www.linkedin.com/company/confinitipk/">
    //         <img
    //           src={linkedin_logo}
    //           alt="linkedin"
    //           className="w-6 h-6 sm:w-8 sm:h-8 mr-4"
    //         />
    //       </a>
    //       {/* Add more social media icons as needed */}
    //     </div>
    //   </div>
    //   <div>
    //     <p className="text-xl sm:text-2xl font-semibold">Plan Events</p>
    //     <ul className="mt-4">
    //       <li>Create and Set Up</li>
    //       <li>Sell Tickets</li>
    //       <li>Online RSVP</li>
    //       <li>Online Events</li>
    //     </ul>
    //   </div>
    //   <div>
    //     <p className="text-xl sm:text-2xl font-semibold">Eventick</p>
    //     <ul className="mt-4">
    //       <li>About Us</li>
    //       <li>Press</li>
    //       <li>Contact Us</li>
    //       <li>Help Center</li>
    //       <li>How it Works</li>
    //       <li>Privacy</li>
    //       <li>Terms</li>
    //     </ul>
    //   </div>
    //   <div>
    //     <p className="text-xl sm:text-2xl font-semibold">Stay in the Loop</p>
    //     <p className="mt-4">
    //       Join our mailing list to stay updated with our latest events and
    //       concerts.
    //     </p>
    //     <div className="flex flex-col sm:flex-row mt-4">
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Enter your email address"
    //         className="rounded-full p-2 text-black_shade mb-2 sm:mr-2"
    //       />
    //       <button className="bg-primary_purple rounded-full py-2 px-4 text-white cursor-pointer">
    //         Subscribe now
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};
