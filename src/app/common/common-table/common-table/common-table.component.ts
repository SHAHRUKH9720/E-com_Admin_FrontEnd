import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonTableService } from '../service/common-table.service';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [];

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  @Input() heading: any = [];
  @Output() page:EventEmitter<any> = new EventEmitter()
  table_name: any;
  mat_header_row: any = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _commontTableService: CommonTableService) {}

  ngOnInit(): void {
    this.heading.forEach((item) => this.mat_header_row.push(item.heading));
    this.get_table_data();
  }

  get_table_data() {
      this._commontTableService.tableObs.subscribe((res) => {
      this.table_name = res['table_name'];
      this.dataSource = new MatTableDataSource(res['data']['result']);
    });
  }

  pageChange(event) {
    this.page.emit(event)
  }
}
