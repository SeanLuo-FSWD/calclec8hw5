import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  submitted = false;
  prices = {
    Apples: 0.99,
    Plums: 1.99,
    Pears: 2.99,
    Peaches: 3.99,
  };
  added_arr = [];
  subtotal: number = 0;
  taxes: number = 0;
  total: number = 0;
  addErrMsg: string = '';

  constructor() {}
  @ViewChild('invForm') signupForm: NgForm;
  @ViewChild('addForm') addForm: NgForm;

  ngOnInit(): void {
    this.calculate();
  }

  calculate() {
    this.subtotal = 0;
    this.taxes = 0;
    this.total = 0;
    this.added_arr.forEach((element) => {
      this.subtotal += element.amount;
    });

    this.subtotal = Number(this.subtotal.toFixed(2));

    this.taxes = Number((this.subtotal * 0.07).toFixed(2));

    console.log('this.total: ' + this.total);
    console.log('this.subtotal: ' + this.subtotal);
    console.log('this.taxes: ' + this.taxes);

    let preTotal = this.subtotal + this.taxes;
    this.total = Number(preTotal.toFixed(2));
  }

  onSubmit() {
    this.submitted = true;
    this.firstName = this.signupForm.value.firstName;
    this.lastName = this.signupForm.value.lastName;
    this.address = this.signupForm.value.address;
  }

  onAdd() {
    if (!this.addForm.value.quantity || isNaN(this.addForm.value.quantity)) {
      this.addErrMsg = 'Please specify quantity!';
    } else {
      let item = { fruit: '', price: 0, qty: 0, amount: 0 };
      item.fruit = this.addForm.value.fruits;
      item.price = this.prices[this.addForm.value.fruits];
      item.qty = this.addForm.value.quantity;
      item.amount = item.price * item.qty;
      item.amount = Number(item.amount.toFixed(2));
      console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(item.amount);

      this.added_arr.push(item);
      this.calculate();
    }
  }

  onDelete(index: number) {
    this.added_arr.splice(index, 1);
    this.calculate();
  }
}
