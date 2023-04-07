import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonTableService {

  private table = new Subject<any>();
  public tableObs = this.table.asObservable();

  constructor() { }

  tableRender(data,table_name){
    let table_data={
      data:data,
      table_name:table_name
    }
    this.table.next(table_data)
  }


}
