import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { BrowseRoutingModule } from "./browse-routing.module";
import { FiltersBottomSheetComponent } from "./components/filters-bottom-sheet/filters-bottom-sheet.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { MovieInfoPage } from "./pages/movie-info/movie-info.page";
import { MoviesPage } from "./pages/movies/movies.page";
import { ProviderElementComponent } from "./components/provider-element/provider-element.component";
import { ShowInfoPage } from "./pages/show-info/show-info.page";
import { ShowsPage } from "./pages/shows/shows.page";

import { ElementCardModule } from "src/app/shared/components/element-card/element-card.module";
import { ImageModule } from "src/app/shared/components/image/s-image.module";
import { LanguageCodePipeModule } from "src/app/shared/pipes/language-code-pipe/language-code-pipe.module";
import { MaSectionModule } from "src/app/shared/containers/ma-section/ma-section.module";
import { MinutesConverterPipeModule } from "src/app/shared/pipes/minutes-converter-pipe/minutes-converter-pipe.module";
import { NumberSuffixPipeModule } from "src/app/shared/pipes/number-suffix-pipe/number-suffix-pipe.module";
import { PaginatorModule } from "src/app/shared/components/paginator/paginator.module";
import { ScmInputSelectModule } from "src/app/shared/inputs/scm-input-select/scm-input-select.module";
import { SmFabButtonModule } from "src/app/shared/buttons/sm-fab-button/sm-fab-button.module";
import { SmFlatButtonModule } from "src/app/shared/buttons/sm-flat-button/sm-flat-button.module";
import { SmIconButtonModule } from "src/app/shared/buttons/sm-icon-button/sm-icon-button.module";
import { SmInputMultiSelectModule } from "src/app/shared/inputs/sm-input-multi-select/sm-input-multi-select.module";
import { SmInputNumberModule } from "src/app/shared/inputs/sm-input-number/sm-input-number.module";
import { SmInputSelectModule } from "src/app/shared/inputs/sm-input-select/sm-input-select.module";

@NgModule({
  declarations: [FiltersBottomSheetComponent, FiltersComponent, MovieInfoPage, MoviesPage, ProviderElementComponent, ShowInfoPage, ShowsPage],
  imports: [
    BrowseRoutingModule,
    CommonModule,
    ElementCardModule,
    FormsModule,
    ImageModule,
    LanguageCodePipeModule,
    MaSectionModule,
    MatBottomSheetModule,
    MatIconModule,
    MatSlideToggleModule,
    MinutesConverterPipeModule,
    NumberSuffixPipeModule,
    PaginatorModule,
    ScmInputSelectModule,
    SmFabButtonModule,
    SmFlatButtonModule,
    SmIconButtonModule,
    SmInputMultiSelectModule,
    SmInputNumberModule,
    SmInputSelectModule,
  ],
})
export class BrowseModule {}
