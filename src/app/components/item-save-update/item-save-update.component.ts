import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '../card/card.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss']
})
export class ItemSaveUpdateComponent implements OnInit {
  itemForm!: FormGroup;

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private subdirectory = '';

  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
    this.subdirectory = this.router.url
  }

  // initItemForm(): void {
  //   this.itemForm = new FormGroup({
  //     name: new FormControl(''),
  //     imageUrl: new FormControl(''),
  //     price: new FormControl(0),
  //     description: new FormControl('')
  //   });
  // }

  initItemForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }

  // we will use dialogRef later to dynamically close dialog when user clicks save
  private readonly dialogRef = inject(MatDialogRef);
  
  // injecting dialogData to access whatever data is passed when we initially open dialog
  // for example, we can send item/card information that we want to update
  // and use this information to population form
  private readonly dialogData = inject(MAT_DIALOG_DATA);
 
  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
    }
  }

  onSaveOrUpdate(): void {

    this.http.put<Card>(`${environment.baseUrl}${this.subdirectory}/${this.dialogData.id}`, this.itemForm.value).subscribe();
    
    this.dialogRef.close({ 
      data: this.itemForm.value
     });
    //  console.log("Card Updated")
  }


}

