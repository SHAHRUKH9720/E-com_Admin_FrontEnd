import { MatPaginator } from "@angular/material/paginator";

export class Pagination{
search:string;
page:number;
limit:number
pageOptions:number[]


constructor(){
    this.page = 1;
    this.limit=10;
    this.pageOptions = [5,10,20]
    }

set pageOptionsOnChange(options:MatPaginator | any){
        this.page = options.pageIndex +1;
        this.limit = options.pageSize
}


}