import { gql } from "@apollo/client";

const getMovieById = gql`
  query getMovieById($id: ID!) {
    node(id: $id) {
      ... on Movie {
        genres {
          name
        }
        homepage
        rating
        numberOfRatings
        overview
        releaseDate
        runtime
        poster(size: W500)
        streamingOptions {
          bestOffering {
            links {
              web
            }
          }
        }
      }
    }
  }
`;

export default getMovieById;
