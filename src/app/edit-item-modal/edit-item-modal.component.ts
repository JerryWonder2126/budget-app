import { Component, Inject, Input, OnInit } from '@angular/core';
import { IBudgetItem } from '../shared/models/budget-item.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'bgt-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @Input() item!: IBudgetItem;

  constructor(
    private dialogRef: MatDialogRef<EditItemModalComponent>, 
    @Inject(MAT_DIALOG_DATA) data: IBudgetItem
  ) {
    this.item = data;
  }

  ngOnInit(): void {
  }

  save(formData: IBudgetItem) {
    this.dialogRef.close(formData);
  }

}
