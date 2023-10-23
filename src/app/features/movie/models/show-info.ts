import { Genre } from "./genre";
import { Language } from "./language";
import { ProductionCompany } from "./production-company";
import { ProductionCountry } from "./production-country";
import { ShowEpisode } from "./show-episode";
import { ShowSeason } from "./show-season";

export interface ShowInfo {
  adult: false;
  backdrop_path: string;
  created_by: unknown[]; //Da rivedere
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
  next_episode_to_air: null;
  networks: ProductionCompany[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: ["JP"];
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
