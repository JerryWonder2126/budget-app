import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() budget_item!: IBudgetItem;
  @Output() formSubmit: EventEmitter<IBudgetItem> = new EventEmitter<IBudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
