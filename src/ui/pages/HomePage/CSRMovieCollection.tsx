import { FC, useState } from "react";
import { HomePageProps } from ".";
import CardCollection from "@/ui/components/CardCollection";
import Button from "@/ui/components/Button";
import { MovieByActorID, PageInfo } from "@/lib/types/movie";
import { loadMoreString } from "@/lib/api/queries/loadMoreMoviesByActorId";
// import { useQuery } from "@apollo/client";

const CSRMovieCollection: FC<HomePageProps> = ({ pageInfo }) => {
  const [moreMovies, setMoreMovies] = useState<HomePageProps["movies"]>([]);
  const [pageInfoSate, setPageInfo] = useState<PageInfo | undefined>(pageInfo);
  const [loading, setLoading] = useState(false);
  // https://github.com/apollographql/apollo-client/issues/8582
  // const { data, fetchMore, loading } = useQuery(loadMoreMoviesByActorId, {
  //   variables: {
  //     id: process.env.NEXT_PUBLIC_ACTOR_ID,
  //     after: pageInfoSate?.endCursor ?? "vcqesRb07J4=",
  //   },
  // });

  const disabled =
    !pageInfoSate?.endCursor || !pageInfoSate?.hasNextPage || loading;

  const onClick = async () => {
    if (!disabled && process.env.NEXT_PUBLIC_MOVIES_API_ENDPOINT) {
      setLoading(true);
      const res = await fetch(process.env.NEXT_PUBLIC_MOVIES_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: loadMoreString,
          variables: {
            id: process.env.NEXT_PUBLIC_ACTOR_ID,
            after: pageInfoSate?.endCursor,
          },
        }),
      });

      const data = (await res?.json()) as MovieByActorID;
      const latest = data?.data?.discover?.movies?.latest;
      setMoreMovies(latest?.edges ?? []);
      setPageInfo(latest?.pageInfo);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-12 flex w-full max-w-screen-lg flex-row flex-wrap items-stretch justify-center gap-12 sm:justify-between">
        {<CardCollection movies={moreMovies} />}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-12">
          <Button label="Click me" onClick={onClick} disabled={disabled} />
        </div>
      </div>
    </>
  );
};

export default CSRMovieCollection;
