import { Genre } from "src/app/features/movie/models/genre";

export abstract class Sharedfunctions {
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
