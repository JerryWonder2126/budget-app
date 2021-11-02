import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bgt-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isIncome!: boolean;
  @Input() amount!: number;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
