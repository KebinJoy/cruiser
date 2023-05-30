export type MovieQueries =
  | "getMovieById"
  | "getMoviesByActorId"
  | "searchMovies";

export { default as getMovieById } from "./getMovieById";
export { default as getMoviesByActorId } from "./getMoviesByActorId";
export { default as searchMovies } from "./searchMovies";
export { default as loadMoreMoviesByActorId } from "./loadMoreMoviesByActorId";
