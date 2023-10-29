import { Genre, Language, ProductionCompany, ProductionCountry, ShowEpisode, ShowSeason } from "@browse";

export interface ShowInfo {
  adult: false;
  backdrop_path: string;
  created_by: unknown[]; //TODO
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: false;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: ShowEpisode;
  name: string;
  networks: ProductionCompany[];
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: ShowSeason[];
  spoken_languages: Language[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
