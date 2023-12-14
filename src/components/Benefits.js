import collaborator_logo from "../assets/collaborator_logo.svg";
import member_logo from "../assets/member_logo.svg";
import ambassador_logo from "../assets/ambassador_logo.svg";
import { BenefitsCard } from "../utils/Cards/BenefitsCard";

export const Benefits = () => {
  return (
    <div>
      <div className="flex items-center flex-col text-center">
        <p className="text-black_shade">CONFINITI BENEFITS</p>
        <p className="text-4xl font-bold mt-4">
          <span className="text-primary_purple">
            Discover Your Path to Confiniti:{" "}
          </span>{" "}
          As a Collaborator, Member, or Ambassador.
        </p>
        <p className="mt-4">
          Join the Confiniti Community and watch your brand soar to national
          recognition as you become an integral part of a dynamic network of
          like-minded individuals and businesses. Together, we'll elevate your
          brand to new heights, making waves across the nation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BenefitsCard
          image={collaborator_logo}
          heading={"Collaborator"}
          description="become part of all 4 signature
          events 12 mid tier and 320+ on
          campus events in 82+ universities"
          buttonText="Join as Collaborator"
        />
        <BenefitsCard
          image={member_logo}
          heading={"Member"}
          description="become part of all 2 signature
          events 6 mid tier and 320+ on
          ampus events in 82+ universities"
          buttonText="Join as Member"
        />
        <BenefitsCard
          image={ambassador_logo}
          heading={"Ambassador"}
          description="become part Of 320+ on campus
          events in 82+ universities across
          Pakistan"
          buttonText="Join as Ambassador"
        />
      </div>
    </div>
  );
};
