import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
 public tableArray: any ;
  message: string = '';

  ngOnInit() {
    this.tableArray = [
      {
        empName: 'Mihir',
        Department : 'Frontend'
      },
      {
        empName: 'test',
        Department : 'QA'
      },
      {
        empName: 'Raxil',
        Department : 'BA'
      }
    ];
  }

  setAngularVersion() {
   
  }

  getChildMessage(data:any) {
    debugger
    this.message = data;
  }
}
