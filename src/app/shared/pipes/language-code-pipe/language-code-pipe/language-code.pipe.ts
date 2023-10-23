import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "languageCode",
})
export class LanguageCodePipe implements PipeTransform {
  transform(languageCode: string): unknown {
    return new Intl.DisplayNames("en", { type: "language" }).of(languageCode);
  }
}
