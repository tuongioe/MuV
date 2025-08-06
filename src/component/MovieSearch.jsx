import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

function MovieSearch({ title, data }) {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-2xl mb-4 font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-5">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 xl:w-[16vw] xl:h-[40vh] sm:w-[50vw] sm:h-[40vh] md:w-[20vw] relative group overflow-hidden rounded-md bg-gray-800 ml-4 cursor-pointer"
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
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
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
    </div>
  );
}

export default MovieSearch;
