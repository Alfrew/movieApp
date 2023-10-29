import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Genre } from "../models/genre";
import { Filters, MovieRequestType } from "../models/filters";
import { MovieInfo } from "../models/movie-info";
import { CastMember } from "../models/cast-member";
import { CrewMember } from "../models/crew-member";
import { ImageInfo } from "../models/image-info";
import { Movie } from "../models/movie";
import { API_KEY, API_URL_HEADER } from "src/app/core/constants/httpConsts";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  apiPointer: string = "movie/";
  constructor(private http: HttpClient) {}

  getMovieList(filters: Filters, requestType: MovieRequestType) {
    let filtersUrl = "include_adult=" + filters.include_adult;
    if (filters.sort_by) {
      filtersUrl += "&sort_by=" + filters.sort_by;
    }
    if (filters.page) {
      filtersUrl += "&page=" + filters.page;
    }
    if (filters.vote_average_gte) {
      filtersUrl += "&vote_average.gte=" + filters.vote_average_gte;
    }
    if (filters.vote_average_lte) {
      filtersUrl += "&vote_average.lte=" + filters.vote_average_lte;
    }
    if (filters.with_genres) {
      filtersUrl += "&with_genres=" + filters.with_genres;
    }
    if (filters.year) {
      filtersUrl += "&year=" + filters.year;
    }
    // if (filters.){filtersUrl += "&" + filters.}
    switch (requestType) {
      case "popular":
        return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "movie/popular?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "nowPlaying":
        return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "movie/now_playing?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "top":
        return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "movie/top_rated?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "upcoming":
        return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "movie/upcoming?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      default:
        return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "discover/movie?" + filtersUrl + "&api_key=" + API_KEY
        );
    }
  }

  getMovieGenresList() {
    return this.http.get<{ genres: Genre[] }>(API_URL_HEADER + "genre/movie/list?language=en&api_key=" + API_KEY);
  }

  getMovieById(id: number) {
    return this.http.get<MovieInfo>(API_URL_HEADER + this.apiPointer + id + "?language=en&api_key=" + API_KEY);
  }
  getMovieCredits(id: number) {
    return this.http.get<{ cast: CastMember[]; crew: CrewMember[]; id: number }>(API_URL_HEADER + this.apiPointer + id + "/credits?language=en&api_key=" + API_KEY);
  }
  getMovieImages(id: number) {
    return this.http.get<{ backdrops: ImageInfo[]; id: number; logos: ImageInfo[]; posters: ImageInfo[] }>(
      API_URL_HEADER + this.apiPointer + id + "/images?api_key=" + API_KEY
    );
  }
  getMovieRecomendations(id: number) {
    return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
      API_URL_HEADER + this.apiPointer + id + "/recommendations?language=en&api_key=" + API_KEY
    );
  }
  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the movie Id
   * @returns
   */
  getMovieVideos(id: number) {
    return this.http.get<any>(API_URL_HEADER + this.apiPointer + id + "/videos?language=en&api_key=" + API_KEY);
  }
  getMovieWatchProviders(id: number) {
    return this.http.get<any>(API_URL_HEADER + this.apiPointer + id + "/watch/providers?api_key=3fd2be6f0c70a2a598f084ddfb75487c");
  }
  searchMovie(searchvalue: string) {
    return this.http.get<{ page: number; results: Movie[]; total_pages: number; total_results: number }>(
      API_URL_HEADER + "search/movie?query=" + searchvalue + "&include_adult=false&language=en-US&page=1&api_key=" + API_KEY
    );
  }
}
