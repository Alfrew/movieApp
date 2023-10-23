import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LanguageCodePipe } from "./language-code-pipe/language-code.pipe";

@NgModule({
  declarations: [LanguageCodePipe],
  imports: [CommonModule],
  exports: [LanguageCodePipe],
})
export class LanguageCodePipeModule {}
