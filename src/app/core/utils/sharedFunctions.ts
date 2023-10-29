import { CardCta, CardInfo } from "src/app/features/browse/models/card";
import { CastMember } from "src/app/features/browse/models/cast-member";
import { Genre } from "src/app/features/browse/models/genre";
import { IMG_PATH } from "../constants/httpConsts";
import { Movie } from "src/app/features/browse/models/movie";
import { Show } from "src/app/features/browse/models/show";

export abstract class Sharedfunctions {
  static getRandomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static mapCastToCard(castList: CastMember[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    castList.forEach((castMember) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + castMember.profile_path,
        id: castMember.id,
        subtitle: castMember.character,
        title: castMember.name,
      };
      cardList.push(card);
    });
    return cardList;
  }

  static mapMovieToCard(movieList: Movie[], genreList: Genre[], ctaList?: CardCta[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    movieList.forEach((movie) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + movie.poster_path,
        ctas: ctaList ? ctaList : [],
        id: movie.id,
        info: `${Math.round(movie.vote_average * 10) / 10}/10`,
        subtitle: `${movie.release_date} • ${this.returnGenreById(genreList, movie.genre_ids[0])}`,
        title: movie.title,
      };
      cardList.push(card);
    });
    return cardList;
  }

  static mapShowToCard(showList: Show[], genreList: Genre[], ctaList?: CardCta[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    showList.forEach((show) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + show.poster_path,
        ctas: ctaList ? ctaList : [],
        id: show.id,
        info: `${Math.round(show.vote_average * 10) / 10}/10`,
        subtitle: `${show.first_air_date} • ${this.returnGenreById(genreList, show.genre_ids[0])}`,
        title: show.name,
      };
      cardList.push(card);
    });
    return cardList;
  }

  static returnGenreById(genreList: Genre[], id: number): string {
    let genre = genreList.find((genre) => genre.id === id);
    return genre ? genre.name : "";
  }

  static returnNumberListFromStringArray(stringArray: string): number[] {
    return stringArray.split(",").map((el) => Number(el));
  }

  static returnSelectList(array: any[], propertyValue: string, propertyViewValue: string) {
    if (!Array.isArray(array)) {
      return [];
    }

    return array.map((el) => {
      return {
        value: el.hasOwnProperty(propertyValue) ? el[propertyValue] : null,
        viewValue: el.hasOwnProperty(propertyViewValue) ? el[propertyViewValue] : null,
      };
    });
  }
}
