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
    {heading:'S.No',key:'s_no',sorting:false},
    {heading:'Name',key:'name',sorting:true},
    {heading:'Email',key:'email',sorting:true},
    {heading:'Role',key:'role',sorting:true},
    {heading:'Mobile',key:'mobile',sorting:true},
    {heading:'Country',key:'country',sorting:true},
    {heading:'Status',key:'status',sorting:false},
    {heading:'Action',key:'action',sorting:false},
  ]

  constructor(
    private _layoutService:LayoutService,
    private _commonTableService:CommonTableService
  )
   { super()}

  search_value

  ngOnInit(): void {
    this.get_listing()
  }
  
  get_listing(){
    let params = {
      page:this.page,
      limit:this.limit,
      search:this.search
    }
    this._layoutService.admin_listing(params).subscribe(res=>{
      this._commonTableService.tableRender(res['data'],'admin_list')
    },
    ()=>{
      this._commonTableService.tableRender({data:[]},'')
    }
    )
  }

  searching(){
    this.search_value?this.search=this.search_value:this.search="";
    this.get_listing()
  }

  pagination(event){
    this.page =event.pageIndex+1
    this.limit =event.pageSize
    this.get_listing()
  }

}
