import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  constructor() {}

  @ViewChild('fOrM') signupForm: NgForm;
  @Input()
  calType: string;
  sign: string;
  firstNumberData: number;
  secondNumberData: number;
  firstNumberId: string;
  secondNumberId: string;
  submitted = false;
  answer: string;
  firstNumberValid: boolean = true;
  secondNumberValid: boolean = true;

  ngOnInit(): void {
    switch (this.calType) {
      case 'Sum':
        this.sign = '+';
        this.firstNumberId = this.calType + 'firstNumberId';
        this.secondNumberId = this.calType + 'secondNumberId';
        break;

      case 'Difference':
        this.sign = '-';
        this.firstNumberId = this.calType + 'firstNumberId';
        this.secondNumberId = this.calType + 'secondNumberId';
        break;

      case 'Product':
        this.sign = '*';
        this.firstNumberId = this.calType + 'firstNumberId';
        this.secondNumberId = this.calType + 'secondNumberId';
        break;

      case 'Quotient':
        this.sign = '/';
        this.firstNumberId = this.calType + 'firstNumberId';
        this.secondNumberId = this.calType + 'secondNumberId';
        break;

      default:
        break;
    }
  }

  calculate() {
    let answer = 0;
    switch (this.calType) {
      case 'Sum':
        answer = +this.firstNumberData + +this.secondNumberData;
        break;

      case 'Difference':
        answer = +this.firstNumberData - +this.secondNumberData;

        break;

      case 'Product':
        answer = +this.firstNumberData * +this.secondNumberData;
        break;

      case 'Quotient':
        answer = +this.firstNumberData / +this.secondNumberData;
        break;

      default:
        break;
    }

    return answer;
  }

  onSubmit() {
    this.submitted = true;
    this.firstNumberData = this.signupForm.value.firstNumber;
    this.secondNumberData = this.signupForm.value.secondNumber;
    this.answer = this.calculate().toFixed(2);
    this.signupForm.reset();
  }
}
