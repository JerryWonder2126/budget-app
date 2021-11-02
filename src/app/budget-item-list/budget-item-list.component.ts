import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISortedBudgetItems } from '../shared/interface/budget-item.interface';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: IBudgetItem[];
  @Output() onDelete: EventEmitter<IBudgetItem> = new EventEmitter<IBudgetItem>();

  constructor() { }

  ngOnInit(): void { }

  deleteSignal(item: IBudgetItem) {
    this.onDelete.emit(item);
  }

}
