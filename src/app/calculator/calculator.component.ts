import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  typeArr = ['Sum', 'Difference', 'Product', 'Quotient'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
