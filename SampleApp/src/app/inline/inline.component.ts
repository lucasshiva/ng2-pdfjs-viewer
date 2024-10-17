import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { PdfJsViewerComponent } from "@lucasshiva/ng2-pdfjs-viewer";

@Component({
  selector: "app-inline",
  templateUrl: "./inline.component.html",
  styleUrls: ["./inline.component.scss"],
})
export class InlineComponent implements AfterViewInit {
  @ViewChild("inlinePdfViewer", { static: true })
  public inlinePdfViewer: PdfJsViewerComponent;
  isPdfLoaded = false;

  constructor() {}

  ngAfterViewInit() {}
}
