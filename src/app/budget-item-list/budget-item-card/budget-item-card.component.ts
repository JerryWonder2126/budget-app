import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBudgetItem } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'bgt-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  isIncome!: boolean;
  @Input() item!: IBudgetItem;
  @Output() xButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() budgetClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  onXButtonClicked() {
    this.xButtonClicked.emit();
  }

  budgetItemClicked() {
    this.budgetClicked.emit();
  }
}
