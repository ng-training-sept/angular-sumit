import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule]
})

export class CardComponent {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);


  @Input({ required: true }) cards: Card[] = [];

  //['mypage', 'child'] /mypage/child
  goToItemDetails(data: Card): void {
    this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route }).then()

    //
  }

  openItemDialog(data: Card): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {
      data // initial data to dialog (remember dialogData in ItemSaveUpdateComponent)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        // emit update event and call service from parent to update card
      }
    });
  }


}