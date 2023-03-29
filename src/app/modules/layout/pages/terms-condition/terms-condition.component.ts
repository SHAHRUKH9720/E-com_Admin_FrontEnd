import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  
  constructor() { }
  tinyAPIKEY = "hwasdyhaddsoajmo0shnlpqoz0cc99ut48e5ez91rvgx9q1y";
  content:any ;
  disableIcon=true

  ngOnInit(): void {
  }
  updateTandC(){
    console.log(this.content)
  }

}
