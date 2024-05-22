import React from "react";
import myPicture from "../assets/1.jpg";

const Story = () => {
  return (
    <div className="container mx-auto">
      <div className="box_ bg-black bg-opacity-95 text-white pb-3 pt-3 pl-3">
        <div className="flex flex-row space-x-4">
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
          {/* Friend Story */}
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3"> Rama 2</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3"> Rama 3</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3"> Rama 4</div>
          </div>
          <div className="story_">
            <div className="picture size-14 border-2 rounded-full ml-1">
              <img
                src={myPicture}
                alt="gambar"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="text-xs pt-2 pl-3"> Rama 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
