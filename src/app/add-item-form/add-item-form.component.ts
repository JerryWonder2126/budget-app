import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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
  isNewItem!: boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.budget_item){
      this.isNewItem = false;
    }else{
      this.isNewItem = true;
      this.budget_item = {id: 0, amount: 0, description: ''};
    }
  }

  onSubmit(form: NgForm): void {
    let result = form.value;
    if(!this.isNewItem){
      result = {id: this.budget_item.id, ...form.value}
    }
    this.formSubmit.emit(result);
    form.reset();
  }

}
