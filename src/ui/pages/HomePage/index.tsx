import { FC } from "react";
import { Movie, PageInfo } from "@/lib/types/movie";
import AppNavBar from "../app/AppNavBar";
import Error from "../../components/Error";
import CardCollection from "../../components/CardCollection";
import CSRMovieCollection from "./CSRMovieCollection";

export type HomePageProps = {
  movies?: { node: Movie | null }[];
  pageInfo?: PageInfo;
  className?: string;
};

const HomePage: FC<HomePageProps> = ({ movies, pageInfo, className }) => {
  return (
    <>
      <AppNavBar />
      <h1 className="m-16 text-3xl font-bold">Tomland</h1>
      <p className="text-medium mx-16 my-8">
        Mission made possible - watch your favourite Tom Cruise movies.
      </p>
      <h2 className="mx-16 my-8 text-2xl font-bold">Movies</h2>
      <main
        className={`flex flex-col items-center justify-between p-8 sm:px-10 md:p-12 lg:p-24 ${className}`}
      >
        {(movies?.length == 0 || !movies?.length) && <Error />}

        <div className="flex w-full max-w-screen-lg flex-row flex-wrap items-stretch justify-center gap-12 sm:justify-between">
          {<CardCollection movies={movies} />}
        </div>
        <CSRMovieCollection movies={movies} pageInfo={pageInfo} />
      </main>
    </>
  );
};

export default HomePage;
