import intern_logo from "../assets/intern_logo.svg";
import communities_events_logo from "../assets/community_events_logo.svg";
import communities_logo from "../assets/communities_logo.svg";
import resources_logo from "../assets/resources_logo.svg";
import { WhyConfinitiCard } from "../utils/Cards/WhyConfinitiCard";

export const WhyConfiniti = () => {
  const handleButtonClick = () => {
    const formLink = "https://forms.gle/15jsdVnMnDyhPd1W7";
    window.open(formLink, "_blank");
  };

  return (
    <>
      <div className="p-1 rounded-t text-white mt-16">
        <div
          className="p-4 rounded bg-gradient-to-t from-white to-primary_purple"
          style={{ backgroundSize: "100% 200%" }}
        >
          <p>WHY CONFINITI?</p>
          <p className="text-2xl md:text-4xl font-bold mt-2">
            Empowering Minds: Nurturing the Next Generation
          </p>
          <p className=" text-sm md:text-base mt-4">
            Participate in the most significant IT revolution in Pakistan with
            Confiniti. Gain access to a thriving community and chart your path
            toward a fulfilling career in your desired profession. Whether
            aspiring to become a leading freelancer or a successful
            entrepreneur, Confiniti caters to all your needs.
          </p>
        </div>
        <div
          className="container mx-auto sm:p-12 bg-gradient-to-t from-white to-primary_purple"
          style={{ backgroundSize: "100% 200%" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
            <WhyConfinitiCard
              image={intern_logo}
              heading={"Job/lnternships"}
              info={
                "Gain access to a reservoir of opportunities, including jobs, internships, and accelerator programs, offered by over 500 supporters of Confiniti within your local vicinity"
              }
            />
            <WhyConfinitiCard
              image={resources_logo}
              heading={"Resources"}
              info={
                "Access a diverse range of paid resources for free, enhancing your skills tenfold. Elevate your proficiency to the highest standards with an extensive repository of comprehensive resources"
              }
            />
            <WhyConfinitiCard
              image={communities_events_logo}
              heading={"Community Events"}
              info={
                "For the first time ever, obtain centralized access to every technology-based community event taking place in any corner of Pakistan. This ensures that you no longer overlook any learning opportunities"
              }
            />
            <WhyConfinitiCard
              image={communities_logo}
              heading={"Communities"}
              info={
                "Confiniti promotes like-minded communities and offers comprehensive education for individuals to integrate, assume leadership roles, and propel collective progress"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col mt-6 px-6">
        <p className="text-light_black_shade text-center p-4 text-sm md:text-base ">
          From the inception of your undergraduate program, whether your
          aspirations involve becoming an esteemed developer at a tier 1 firm,
          pursuing a full-time freelancing career, or harboring a groundbreaking
          idea to address a real-time problem and enhance the lives of millions,
          Confiniti offers comprehensive support. Our community provides
          guidance, mentorship, resources, and assistance across all verticals
          to aid you in achieving your goals{" "}
        </p>
        <button
          className="ml-5 bg-primary_purple py-2 px-6 rounded text-white cursor-pointer mt-6 hover:bg-secondary_purple"
          onClick={handleButtonClick}
        >
          Join Waitlist
        </button>
      </div>
    </>
  );
};
