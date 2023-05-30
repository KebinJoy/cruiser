// todo #kj
export type Genre = string;

export type Movie = {
  id: string;
  title?: string;
  tagline?: string;
  runtime?: number;
  poster?: string;
  genres?: { name: Genre }[];
  homepage?: string;
  rating?: number;
  numberOfRatings?: number;
  overview?: string;
  releaseDate?: string;
};

export type PageInfo = {
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
};

export type MovieByActorID = {
  data?: {
    discover?: {
      movies?: {
        latest?: {
          edges?: { node: Movie | null }[];
          totalCount: number;
          pageInfo: PageInfo;
        };
      };
    };
  };
};
