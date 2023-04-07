import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { CommonTableService } from 'src/app/common/common-table/service/common-table.service';
import { Pagination } from 'src/app/constant/pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends Pagination implements OnInit {

  headings = [
    {heading:'Name',key:'name'},
    {heading:'Email',key:'email'},
    {heading:'Role',key:'role'},
    {heading:'Mobile',key:'mobile'},
    {heading:'Country',key:'country'},
    {heading:'Status',key:'status'},
    {heading:'Action',key:'action'},
  ]

  constructor(
    private _layoutService:LayoutService,
    private _commonTableService:CommonTableService
  )
   { super()}

  ngOnInit(): void {
    this.get_listing()
  }
  
  get_listing(){
    let params = {
      page:this.page,
      limit:this.limit
    }
    this._layoutService.admin_listing(params).subscribe(res=>{
      console.log('here is data ',res);
      this._commonTableService.tableRender(res['data'],'admin_list')
    },
    ()=>{
      this._commonTableService.tableRender({data:[]},'')
    }
    )
  }
  pagination(event){
    console.log(event)
    this.page =event.pageIndex+1
    this.limit =event.pageSize
    console.log(this.pageOptionsOnChange);
    console.log("page",this.page)
    console.log('limit ',this.limit);
    this.get_listing()
  }

}
