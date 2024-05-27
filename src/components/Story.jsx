import React from "react";
import myPicture from "../assets/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Story = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mx-auto">
      <div className="box_ bg-black bg-opacity-85 text-white pb-3 pt-3 pl-3">
        <Slider {...settings}>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2">You're story</div>
          </div>
          {/* Friend Stories */}
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3">Rama 2</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3">Rama 3</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3">Rama 4</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3">Rama 4</div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Story;
