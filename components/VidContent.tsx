import React from "react";

const VidContent = () => {
  return (
    <div className="w-[90%] p-10 z-[20] flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-20 mt-24 items-center">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-6xl text-[#FFD700]">My Channel</h1>
          <p className="text-lg max-w-[600px] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            pariatur facere, modi repudiandae maiores est! Odit repudiandae
            recusandae ipsam voluptas voluptate, assumenda saepe atque, placeat
            laboriosam excepturi architecto dolor hic.
          </p>
        </div>
        <iframe
          width="590"
          height="350"
          src="https://www.youtube.com/embed/Ii4I3rXlIFk?si=bePrmx8J8_NQYjKP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; allowfullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg w-[450px] md:w-[590px] mr-6"
        ></iframe>
      </div>
    </div>
  );
};

export default VidContent;
