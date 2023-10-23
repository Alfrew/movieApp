import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaHeaderComponent } from "./core/components/ma-header/ma-header.component";
import { MaFooterComponent } from "./core/components/ma-footer/ma-footer.component";
import { SmIconButtonModule } from "./shared/buttons/sm-icon-button/sm-icon-button.module";
import { SmSpinnerModule } from "./shared/components/sm-spinner/sm-spinner.module";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [AppComponent, MaHeaderComponent, MaFooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, SmIconButtonModule, SmSpinnerModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
