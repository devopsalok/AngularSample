import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // tslint:disable-next-line:jsdoc-format
  /** templateUrl: './test.component.html',*/
  template: `
    <h2>
      welcome {{name}} to AdvayaCloud hub
    </h2>
    <input [id] = "myID" type ="text" value="AdvayaAlok">
    <input [disabled]= "false" id = "{{myID}}" type ="text" value="AdvayaAlok">
    <input [disabled]= "isDisabled" id = "{{myID}}" type ="text" value="AdvayaAlok">
    <h2 [style.color]= "hasError ? 'red': 'green'">Style Binding </h2>
    <h2 [ngStyle]= "titleStyles"> Style Binding 2 </h2>
    `,
  styles: []
  // tslint:disable-next-line:jsdoc-format
  /**styleUrls: ['./test.component.css']**/
})
export class TestComponent implements OnInit {

  public name = 'Advaya';
  public siteUrl = window.location.href;
  public myID = 'testId';
  public isDisabled = true;
  public successClass = 'text-special';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special': this.isSpecial,
  };
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  constructor() { }

  ngOnInit() {
  }

}
