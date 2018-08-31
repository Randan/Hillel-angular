import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  public countByArr: any = [];
  public HighAndLowArrStr: any = [];
  public HighAndLowArrNum: any = [];
  public HighAndLowMax: number;
  public HighAndLowMin: number;

  countBy = (multiple: number, length: number) => {
    this.countByArr = [];
    for (let i = 0; this.countByArr.length < length; i++) {
      if (i % multiple === 0 && i > 0) {
        this.countByArr.push(i);
      }
    }
    return (`
      ${length} numbers miltuple ${multiple}:
      ${this.countByArr}.
    `);
  }

  arrStrToArrNum = () => {
    this.HighAndLowArrNum = this.HighAndLowArrStr.map(function(item, index, arr) {
      const number: any = parseInt(item, 10);
      return isNaN(number) ? item : number;
    });
  }

  HighAndLow = (string: string) => {
    this.HighAndLowArrStr = string.split(' ');
    this.arrStrToArrNum();
    this.HighAndLowMax = this.HighAndLowArrNum[0];
    this.HighAndLowMin = this.HighAndLowArrNum[0];
    for (let i = 0; i < this.HighAndLowArrNum.length; i++) {
      if (this.HighAndLowArrNum[i] > this.HighAndLowMax) {
        this.HighAndLowMax = this.HighAndLowArrNum[i];
      }
      if (this.HighAndLowArrNum[i] < this.HighAndLowMin) {
        this.HighAndLowMin = this.HighAndLowArrNum[i];
      }
    }
    return (`
      ${string}:
      Highest number is ${this.HighAndLowMax}.
      Lowest number is ${this.HighAndLowMin}.
    `);
  }

  constructor() { }

  ngOnInit() {
    // this.countBy(3, 5);
    // this.HighAndLow('16 36 15 6 64 9 95 12 15');
  }

}
