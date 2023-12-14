import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { BoardOfAdvisors } from "../components/BoardOfAdvisors";
import { ConChapters } from "../components/ConChapters";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MvpProducts } from "../components/MvpProducts";
import { Nav } from "../components/Nav";
import { OurTeams } from "../components/OurTeams";
import { Sponsors } from "../components/Sponsors";
import { TechEvents } from "../components/TechEvents";
import Testimonials from "../components/Testimonials";
import { UpcomingBanner } from "../components/UpcomingBanner";
import { WhyConfiniti } from "../components/WhyConfiniti";

export const Main = () => {
  return (
    <>
      <div className="md:p-14 md:px-24 px-6">
        <Nav />
        <Header />
      </div>
      <div className="shadow-lg p-2"></div>
      <div className="md:p-1 md:px-24 px-6">
        <About />
        <WhyConfiniti />
      </div>
      <Sponsors />
      <div className="mb-10">
        <OurTeams />
      </div>
      <div className="mb-10">
        <BoardOfAdvisors />
      </div>
      <ConChapters />
      {/* <div className=" md:p-14 md:px-24 px-6">
        <Benefits />
      </div>
      <Testimonials />
      <div className=" md:py-14 md:px-24 px-6">
        <TechEvents />
        <MvpProducts />
      </div>
      <UpcomingBanner /> */}
      <Footer />
    </>
  );
};
