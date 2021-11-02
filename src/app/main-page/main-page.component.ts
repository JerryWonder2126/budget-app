import { Component, OnInit } from '@angular/core';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: IBudgetItem[] = new Array<IBudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  add_item(item: IBudgetItem): void {

    this.budgetItems.push(item);

  }

  deleteItem(item: IBudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }

}
