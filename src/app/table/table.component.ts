import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

import { MatPaginator, MatTableDataSource, PageEvent } from "@angular/material";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[];

  @Input() displayedColumnsTemp: string[];
  @Input() receivedData: any;
  @Input() tableTitle: string;
  @Input() columns: any[] = [];
  @Input() metaCount: number;

  @Output() clickedItem = new EventEmitter();
  @Output() pageEvent = new EventEmitter<PageEvent>();

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  pageIndex = 0;
  pageSize = 25;
  length;
  toppingList: string[];

  constructor() {}

  ngOnInit() {}
}
