import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  // @Input()tableArray:any;

  // @Output() passData = new EventEmitter<string>();

  @Input() public set tableArray(value: any) {
   
  };

  public get tableArray(): any {
    debugger
    return this.tableData;
  }

  public data: any;
  private tableData: any;

  constructor() {
    console.log('tableArray : ' , this.tableArray);
    
    // this.angularVersion = 0;
  }

  ngOnInit(): void {
    console.log('tableArray.... : ' , this.tableArray);
    
  }


  // ngOnChanges(changes: any): void {
  //   debugger
  //   console.log('changes at on Init : ' , changes);    
  // }

  // passDataToParent(data: any) {
  //   debugger
  //   this.passData.emit('Message from Child to Parent - Hey Whatsupp');
  // }
}
