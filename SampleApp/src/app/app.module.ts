import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
// ----> Import PdfJsViewerModule here
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PdfJsViewerModule } from "@lucasshiva/ng2-pdfjs-viewer";
import { BigComponent } from "./big/big.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { InlineComponent } from "./inline/inline.component";

const MATERIAL_IMPORTS = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [AppComponent, InlineComponent, BigComponent, DynamicComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfJsViewerModule,
    MatGridListModule,
    MatTableModule,
    MATERIAL_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
