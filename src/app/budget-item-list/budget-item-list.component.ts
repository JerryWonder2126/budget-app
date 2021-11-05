import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { IBudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'bgt-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: IBudgetItem[];
  @Output() onDelete: EventEmitter<IBudgetItem> = new EventEmitter<IBudgetItem>();
  // @Output() onUpdate: EventEmitter<IBudgetItem[]> = new EventEmitter<IBudgetItem[]>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modal: MatDialog) { }

  ngOnInit(): void { }

  deleteSignal(item: IBudgetItem) {
    this.onDelete.emit(item);
  }

  onBudgetClicked(item: IBudgetItem) {
    const modalRef = this.modal.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    modalRef.afterClosed().subscribe((updatedItem) => { 
      if(updatedItem) {
        // console.log(updatedItem);
        this.onUpdate.emit(updatedItem);
      }
    })
  }

}
