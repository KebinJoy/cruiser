import { gql } from "@apollo/client";
import { MovieFragmentString } from "./getMoviesByActorId";

export const loadMoreString = `
${MovieFragmentString}
  query loadMoreMoviesByActorId($id: [ID!]!, $after: String!) {
    discover(input: { people: { include: $id } }) {
      movies {
        latest(after: $after, first: 12) {
          ...MovieFragment
        }
      }
    }
  }
`;

const loadMoreMoviesByActorId = gql`
  ${loadMoreString}
`;

export default loadMoreMoviesByActorId;
