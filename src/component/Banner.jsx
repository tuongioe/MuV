import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import IconRating from "../assets/img/rating.png";
import IconHalfRating from "../assets/img/rating-half.png";
import ImgTemp from "../assets/img/harry-potter.jpg";
import IconPlay from "../assets/img/play-button.png";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

function Banner() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // ✅ Hàm gọi API trailer cho Harry Potter
  const handleTrailer = async () => {
    setTrailerKey("");
    try {
      const movieId = 12444; // ID TMDB của Harry Potter and the Deathly Hallows Part 1
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      if (data.results && data.results.length > 0) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.log(error);
      setModalIsOpen(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>

      {/* Container responsive */}
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-center w-full h-full px-6 lg:px-10 top-0 left-0 space-y-8 lg:space-y-0 lg:justify-between">
        {/* Thông tin dưới mobile */}
        <div className="lg:w-[60%] flex flex-col space-y-6 lg:ml-[5vw] text-center lg:text-left">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-1 px-3 rounded font-bold w-20 mx-auto lg:mx-0">
            MOVIE
          </p>
          <h2 className="text-white text-4xl font-bold">Harry Potter</h2>
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconHalfRating} alt="rating" className="w-8 h-8" />
          </div>
          <p className="text-white text-md lg:text-lg lg:max-w-xl lg:text-justify lg:leading-8 hidden lg:block">
            Harry Potter and the Deathly Hallows is the epic conclusion to the
            beloved Harry Potter saga. The story follows Harry, Hermione, and
            Ron as they leave Hogwarts and set out on a perilous journey to find
            and destroy the Horcruxes that contain fragments of Voldemort's
            soul. With danger lurking at every turn and the wizarding world
            falling under dark control, their friendship and bravery are pushed
            to the limit. As the final battle between Harry and Voldemort draws
            near, the fate of both the magical and non-magical worlds rests on
            their courage and determination.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <button className="lg:w-[10vw] p-3 text-white bg-slate-900 font-bold text-lg border-none transition-transform transform hover:scale-125 duration-300">
              About
            </button>
            <button
              onClick={handleTrailer}
              className="lg:w-[10vw] p-3 text-white bg-red-600 font-bold text-lg border-none transition-transform transform hover:scale-125 duration-300"
            >
              Watch now
            </button>
          </div>
        </div>

        {/* Poster trên mobile */}
        <div className="flex justify-center lg:mr-20">
          <div
            className="relative w-[70vw] h-[60vh] max-w-[320px] max-h-[500px] group lg:w-[40vw] lg:h-[100vh] lg:max-w-[320px] lg:max-h-[500px] cursor-pointer"
            onClick={handleTrailer}
          >
            <img
              src={ImgTemp}
              alt="Harry Potter Poster"
              className="w-full h-full object-cover rounded"
            />
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer">
              <img
                src={IconPlay}
                alt="play"
                className="w-16 h-16 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Trailer */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { zIndex: 9999 },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: 0,
            background: "black",
            border: "none",
          },
        }}
      >
        {trailerKey && <YouTube videoId={trailerKey} opts={opts} />}
      </Modal>
    </div>
  );
}

export default Banner;
