import team_member_1 from "../assets/team/hassan.jpg";
import team_member_2 from "../assets/team/taskeen.jpg";
import team_member_3 from "../assets/team/nida.jpg";
import team_member_4 from "../assets/team/manan.jpg";

export const OurTeams = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <button className="ml-5 bg-primary_purple py-2 px-6 rounded text-white cursor-pointer mt-6">
          Our Teams
        </button>
        <div className="mt-10">
          <p className="text-2xl md:text-4xl font-bold text-center">
            Meet the <span className="text-primary_purple">Core Team :D</span>
          </p>
          <p className="text-sm md:text-base text-center">
            Presenting you the Humans Of Confiniti✨
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid md:grid-cols-4 grid-rows-1 grid-cols-2">
          {[
            {
              image: team_member_1,
              name: "Hassaan Ahmad",
              role: "Community Manager",
            },
            {
              image: team_member_2,
              name: "Taskeen",
              role: "Head of Event Creatives",
            },
            {
              image: team_member_3,
              name: "Nida Dastgir",
              role: "Head of Content and PR",
            },
            {
              image: team_member_4,
              name: "Muahmmad Manan",
              role: "Marketing Head",
            },
          ].map((member, index) => (
            <div key={index} className="relative">
              <img src={member.image} alt="" />
              <div className="absolute inset-x-0 bottom-4 flex items-center flex-col text-center text-white  bg-primary_purple">
                <p className="text-white">{member.name}</p>
                <p className="text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};
