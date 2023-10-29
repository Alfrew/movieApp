export interface Filters {
  include_adult: boolean;
  include_video?: boolean;
  language: "en-US";
  page: number;
  sort_by: Sorting;
  vote_average_gte?: number;
  vote_average_lte?: number;
  with_genres?: string;
  year?: number;
}

export type Sorting =
  | "popularity.asc"
  | "popularity.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export type MovieRequestType = "popular" | "nowPlaying" | "top" | "upcoming" | "general";
export type ShowRequestType = "airingToday" | "onTheAir" | "popular" | "top" | "general";
