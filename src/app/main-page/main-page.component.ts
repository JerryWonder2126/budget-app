import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget-service.service';
import { IBudgetFormResponse } from '../shared/interface/IBudgetForm.interface';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems!: IBudgetItem[];
  private _netValue: number = 0;
  isLow!: boolean;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.loadAll();
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
    this.budgetItems = this.budgetService.store;
    this.budgetItems.forEach(item => {
      total += item.amount;
    });
    this.netValue = total;
    this.isLow = this.netValue < 0 ? true : false;
  }

  add_item(item: IBudgetFormResponse): void {
    this.budgetService.addBudget(item.amount, item.description);
    this.calculateTotal();
  }

  updateItem(item: IBudgetItem) {
    this.budgetService.updateBudget(item);
    this.calculateTotal();
  }

  deleteItem = (item: IBudgetItem) => {
    this.budgetService.deleteBudget(item);
    this.calculateTotal();
  }

}
