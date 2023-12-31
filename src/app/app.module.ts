import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaFooterComponent } from "./core/components/ma-footer/ma-footer.component";
import { MaHeaderComponent } from "./core/components/ma-header/ma-header.component";
import { MaSearchComponent } from "./core/components/ma-search/ma-search.component";

import { SmIconButtonModule } from "./shared/buttons/sm-icon-button/sm-icon-button.module";
import { SmSpinnerModule } from "./shared/components/sm-spinner/sm-spinner.module";
import { ImageModule } from "./shared/components/image/s-image.module";

@NgModule({
  declarations: [AppComponent, MaFooterComponent, MaHeaderComponent, MaSearchComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ImageModule,
    MatAutocompleteModule,
    MatIconModule,
    SmIconButtonModule,
    SmSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
