import React from "react";
import Post from "../assets/post/post1.jpg";

const Body = ({ Picture }) => {
  const handleButton = () => {
    console.log("Button clicked");
  };

  return (
    <div className="mx-auto">
      <div className="content_body">
        <div className="flex flex-row space-x-4 bg-black text-white pt-4 pb-2">
          {/* Account Information */}
          <div className="story_">
            <div className="picture size-10 border-2 rounded-full ml-1">
              <img src={Picture} alt="gambar" style={{ borderRadius: "50%" }} />
            </div>
          </div>
          {/* Post Information */}
          <div className="post-info">
            <div className="flex flex-col">
              <div className="text-sm">rramdhanz_</div>
              <div className="text-xs">Original audio</div>
            </div>
          </div>
          <div
            className="flex flex-1 justify-end pr-2 text-xl"
            onClick={handleButton}
          >
            ...
          </div>
        </div>
        {/* Content */}
        <div className="content">
          <div>
            <img src={Post} alt="image" />
          </div>
        </div>
        <div className="footer_content flex flex-col bg-black text-white px-2 py-2">
          <div className="flex flex-row space-x-3">
            <div>
              <svg
                aria-label="Like"
                className="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Comment"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Comment</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Share Post"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Share Post</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
            <div className="flex flex-1 justify-end pr-2">
              <svg
                aria-label="Save"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Save</title>
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="pt-1 text-sm font-semibold">13,538 likes</div>
          {/* Post by */}
          <div className="text-sm font-bold">rramdhanz_</div>
          <div className="post_information text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            dolorum autem odio molestias sequi itaque, tempora ut non nobis ipsa
            eveniet magnam rem voluptatum aut tenetur quia aspernatur modi
            voluptas?
          </div>
          <div className="comment pt-1">
            <div className="text-sm text-gray-300">View all 1,259 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
