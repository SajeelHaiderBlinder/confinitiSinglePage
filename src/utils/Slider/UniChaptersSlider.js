import { UniChaptersCard } from "../../utils/Cards/UniChaptersCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fast_image from "../../assets/fast.jpg";
import uet_image from "../../assets/uet.jpg";
import comsats_image from "../../assets/comsats.jpg";
import gcu_image from "../../assets/gcu.jpg";
import itu_image from "../../assets/itu.jpg";
import lcw_image from "../../assets/lcw.jpg";
import kannaird_image from "../../assets/itu.jpg";
import lgu_image from "../../assets/lgu.jpg";
import numl_image from "../../assets/numl.jpeg";
import ucp_image from "../../assets/ucp.jpg";
import uoe_image from "../../assets/uoe.jpeg";

export const UniChaptersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSliderClick = () => {};

  return (
    <Slider {...settings}>
      <div className="mb-4">
        <UniChaptersCard
          text={"UET Lahore"}
          image={uet_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"FAST NUCES Lahore"}
          image={fast_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"University of Central Punjab"}
          image={ucp_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"GCU Lahore"}
          image={gcu_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"Lahore Garrison University"}
          image={lgu_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"NUML Lahore"}
          image={numl_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"ITU Lahore"}
          image={itu_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"Lahore College for Women"}
          image={lcw_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"Kannaird College"}
          image={kannaird_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"University of Education"}
          image={uoe_image}
          onClick={handleSliderClick}
        />
      </div>
      <div className="mb-4 ">
        <UniChaptersCard
          text={"COMSATS Lahore"}
          image={comsats_image}
          onClick={handleSliderClick}
        />
      </div>
    </Slider>
  );
};
