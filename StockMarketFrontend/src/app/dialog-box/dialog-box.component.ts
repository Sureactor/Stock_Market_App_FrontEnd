import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
