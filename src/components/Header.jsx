import React from "react";
import addPicture from "../assets/add-24.ico";
import notification from "../assets/favorite-3-24.ico";
import Story from "./Story";

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-row bg-black text-white pt-2 pb-2">
        <div className="pl-3">Instagram</div>
        <div className="flex flex-1 space-x-3 justify-end pr-2">
          <div>
            <img src={addPicture} alt="picture" />
          </div>
          <div>
            <img src={notification} alt="notification" />
          </div>
        </div>
      </div>
      <Story />
    </div>
  );
};

export default Header;
