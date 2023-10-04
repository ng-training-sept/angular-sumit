import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card.model';
import { MatDialog } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../../item-save-update/item-save-update.component';

@Component({
  selector: 'app-card-item',
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CardItemComponent implements OnInit {

  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
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