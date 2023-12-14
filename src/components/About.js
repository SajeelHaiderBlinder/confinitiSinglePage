import about_image from "../assets/about_image.svg";
export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10">
      <div>
        <div className="">
          <p className="text-light_black_shade">ABOUT CONFINITI</p>
          <p className="text-2xl md:text-4xl font-bold mt-4">
            Explore <span className="text-primary_purple">Confiniti&#174;</span>
            - Where we empower{" "}
            <span className="text-primary_purple"> Students in Pakistan </span>{" "}
            ,providing opportunity and helping acheive there{" "}
            <span className="text-primary_purple"> Dreams.</span>{" "}
          </p>
          <p className="text-sm md:text-base mt-4 text-light_black_shade">
            Confiniti endeavors to unite students within the IT domain,
            encompassing Computer Science, Software Engineering, Information
            Technology, and Data Science, within a centralized community. Our
            primary objective is to offer a comprehensive solution that caters
            to all their professional requirements. This includes facilitating
            exposure, delivering training programs, refining skill sets, and
            providing additional valuable resources.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-light_black_shade">INITIATIVE</p>
          <p className="text-2xl md:text-4xl font-bold mt-4">
            Pakistan, the next{" "}
            <span className="text-primary_purple"> Silicon Valley.</span>
          </p>
          <p className="text-sm md:text-base mt-4 text-light_black_shade">
            The primary goal of Confiniti is straightforward. Presently, there
            are two million IT students in Pakistan, with an annual graduation
            rate of 25,000. Among these graduates, only 3-4% successfully enter
            the industry, leaving a substantial untapped potential. Confiniti
            aims to empower this segment of young students by offering exposure
            through a series of events, facilitating connections with
            opportunities, providing access to communities, and supporting
            promising ideas with funding to transform their aspirations into
            realities.
          </p>
        </div>
      </div>
      <img src={about_image} alt="" />
    </div>
  );
};
