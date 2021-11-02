import { Component, OnInit } from '@angular/core';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: IBudgetItem[] = new Array<IBudgetItem>();
  private _netValue: number = 0;
  isLow!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  get netValue() {
    return this._netValue;
  }

  set netValue(value) {
    this._netValue = value;
  }

  calculateTotal() {
    let total = 0;
    this.budgetItems.forEach(item => {
      total += item.amount;
    });
    this.netValue = total;
    this.isLow = this.netValue < 0 ? true : false;
  }

  add_item(item: IBudgetItem): void {

    this.budgetItems.push(item);
    this.calculateTotal();

  }

  deleteItem(item: IBudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.calculateTotal();
  }

}
