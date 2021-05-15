import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import requests from "../utils/requests";
import MovieDescription from "./MovieDescription";
import { forwardRef } from "react";

const ThumbNail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={() => {
        <MovieDescription result={result} />;
      }}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.title}
        layout="responsive"
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} • `}
          {""}
          {result.release_date || result.first_air_date} • {""}
          <ThumbUpIcon className="h-8 mb-1" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default ThumbNail;
