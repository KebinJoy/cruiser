import { gql } from "@apollo/client";

export const MovieFragmentString = `
fragment MovieFragment on MovieConnection {
  totalCount
  pageInfo {
    hasNextPage
    startCursor
    endCursor
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      poster(size: W342)
      overview
    }
  }
}
  `;
export const MovieFragment = gql`
  ${MovieFragmentString}
`;

const getMoviesByActorId = gql`
  ${MovieFragment}
  query getMoviesByActorId($id: [ID!]!) {
    discover(input: { people: { include: $id } }) {
      movies {
        latest(first: 12) {
          ...MovieFragment
        }
      }
    }
  }
`;

export default getMoviesByActorId;
