import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  confirmModalTitle: string;
  confirmModalQuestion: string;

  constructor(private dialogRef: MatDialogRef<ConfirmModalComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.confirmModalTitle = data['title'];
    this.confirmModalQuestion = data['question'];
  }

  ngOnInit() {
  }

  confirmed() {
    this.dialogRef.close(true);
  }

  closed() {
    this.dialogRef.close(false);
  }
}
