import { gql } from "@apollo/client";

const searchMovies = gql`
  query searchMovies($term: String!) {
    search(term: $term) {
      pageInfo {
        hasNextPage
      }
      totalCount
      edges {
        node {
          ... on Movie {
            id
            title
            poster(size: W92)
          }
        }
      }
    }
  }
`;

export default searchMovies;
