import { Inter } from "next/font/google";
import { GetStaticProps, NextPage } from "next";
import HomePage from "@/ui/pages/HomePage";
import { getMoviesByActorId } from "@/lib/api/queries";
import client from "@/lib/apollo/client";
import { MovieByActorID } from "@/lib/types/movie";

type HomeProps = {
  data: MovieByActorID;
  errors: any[];
};

// fonts
const inter = Inter({ subsets: ["latin"] });

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <HomePage
      movies={data?.data?.discover?.movies?.latest?.edges}
      pageInfo={data?.data?.discover?.movies?.latest?.pageInfo}
      className={inter?.className}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  let errors = [];
  let data = {};
  try {
    data = await client.query<MovieByActorID>({
      query: getMoviesByActorId,
      variables: { id: [process.env.ACTOR_ID] },
    });
  } catch (err: any) {
    console.log(err);
    errors?.push(err?.message);
  }

  return {
    props: {
      data: data,
      errors: errors,
    },
    revalidate: 10 * 60, // 10 mins
  };
};
