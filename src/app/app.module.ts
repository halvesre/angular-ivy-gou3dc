import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule, MatTableModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatPaginatorModule, MatTableModule],
  declarations: [AppComponent, HelloComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
