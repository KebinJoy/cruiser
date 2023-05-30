import { HomePageProps } from "@/ui/pages/HomePage";
import Card from "../Card";

const MovieCollection = ({ movies }: { movies: HomePageProps["movies"] }) => {
  return (
    <>
      {(movies ?? [])?.map((movie) => {
        return (
          <Card
            key={movie?.node?.id}
            title={movie?.node?.title}
            description={movie?.node?.overview}
            image={{ url: movie?.node?.poster, alt: "" }}
          />
        );
      })}
    </>
  );
};

export default MovieCollection;
