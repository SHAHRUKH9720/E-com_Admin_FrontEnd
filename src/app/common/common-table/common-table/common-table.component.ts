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
  table_data_length
  mat_header_row: any = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  sortData(event){
    console.log("sorting event ",event)
  }
  constructor(private _commontTableService: CommonTableService) {}

  ngOnInit(): void {
    this.heading.forEach((item) => this.mat_header_row.push(item.heading));
    console.log(this.heading)
    this.get_table_data();
  }
  getAction(element){
    console.log('element data ...',element)
  }

  get_table_data() {
      this._commontTableService.tableObs.subscribe((res) => {
      this.table_name = res['table_name'];
      res['data']['result'].forEach((element,index) => {
        element["s_no"]= res.data.limit * (res.data.page - 1) + (index + 1)
      });
      console.log();
      this.dataSource = new MatTableDataSource(res['data']['result']);
      this.table_data_length = res['data']['totalCount']
    });
  }

  pageChange(event) {
    this.page.emit(event)
  }
}
