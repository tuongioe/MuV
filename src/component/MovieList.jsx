import React, { useRef, useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbBackground } from "react-icons/tb";
import { MovieContext } from "../context/MovieProvider";

function MovieList({ title, data = [] }) {
  const { handleTrailer } = useContext(MovieContext);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <div className="text-white p-10 mb-10 relative max-w-[100vw] overflow-hidden">
      <h2 className="uppercase text-2xl mb-4 font-bold">{title}</h2>

      {/* Nút trái */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white p-3 rounded-full z-10 hover:bg-black border-none transition-transform transform hover:scale-150 duration-300"
      >
        <IoIosArrowBack fontSize={24} />
      </button>

      {/* Danh sách phim */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide max-w-full "
      >
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] h-[300px] relative group overflow-hidden rounded-md bg-gray-800 cursor-pointer"
              onClick={() => {
                handleTrailer(item.id);
              }}
            >
              <img
                src={
                  item.poster_path
                    ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                    : "/fallback.jpg"
                }
                alt={item.title || item.original_title}
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-2">
                <p className="uppercase text-md truncate max-w-[180px]">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Nút phải */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10 hover:bg-black border-none transition-transform transform hover:scale-150 duration-300"
      >
        <IoIosArrowForward fontSize={24} />
      </button>
    </div>
  );
}

export default MovieList;
