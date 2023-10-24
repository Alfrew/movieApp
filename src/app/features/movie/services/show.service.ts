import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Filters, ShowRequestType } from "../models/filters";
import { Genre } from "../models/genre";
import { Show } from "../models/show";
import { CrewMember } from "../models/crew-member";
import { CastMember } from "../models/cast-member";
import { ImageInfo } from "../models/image-info";
import { ShowInfo } from "../models/show-info";
import { API_KEY, API_URL_HEADER } from "src/app/core/constants/httpConsts";

@Injectable({
  providedIn: "root",
})
export class ShowService {
  apiPointer: string = "tv/";
  constructor(private http: HttpClient) {}

  getShowList(filters: Filters, requestType: ShowRequestType) {
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
      filtersUrl += "&first_air_date_year=" + filters.year;
    }
    // if (filters.){filtersUrl += "&" + filters.}
    switch (requestType) {
      case "airingToday":
        return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "tv/airing_today?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "onTheAir":
        return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "tv/on_the_air?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "popular":
        return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "tv/popular?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      case "top":
        return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "tv/top_rated?language=en-US&page=" + filters.page + "&api_key=" + API_KEY
        );
      default:
        return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
          API_URL_HEADER + "discover/tv?" + filtersUrl + "&api_key=" + API_KEY
        );
    }
  }

  getShowGenresList() {
    return this.http.get<{ genres: Genre[] }>(API_URL_HEADER + "genre/tv/list?language=en&api_key=" + API_KEY);
  }

  getShowById(id: number) {
    return this.http.get<ShowInfo>(API_URL_HEADER + this.apiPointer + id + "?language=en&api_key=" + API_KEY);
  }
  getShowCredits(id: number) {
    return this.http.get<{ cast: CastMember[]; crew: CrewMember[]; id: number }>(API_URL_HEADER + this.apiPointer + id + "/credits?language=en&api_key=" + API_KEY);
  }
  getShowImages(id: number) {
    return this.http.get<{ backdrops: ImageInfo[]; id: number; logos: ImageInfo[]; posters: ImageInfo[] }>(
      API_URL_HEADER + this.apiPointer + id + "/images?api_key=" + API_KEY
    );
  }
  getShowRecomendations(id: number) {
    return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
      API_URL_HEADER + this.apiPointer + id + "/recommendations?language=en&api_key=" + API_KEY
    );
  }
  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the movie Id
   * @returns
   */
  getShowVideos(id: number) {
    return this.http.get<any>(API_URL_HEADER + this.apiPointer + id + "/videos?language=en&api_key=" + API_KEY);
  }
  getShowWatchProviders(id: number) {
    return this.http.get<any>(API_URL_HEADER + this.apiPointer + id + "/watch/providers?api_key=" + API_KEY);
  }
  searchShow(searchvalue: string) {
    return this.http.get<{ page: number; results: Show[]; total_pages: number; total_results: number }>(
      API_URL_HEADER + "search/tv?query=" + searchvalue + "&include_adult=false&language=en-US&page=1&api_key=" + API_KEY
    );
  }
}
