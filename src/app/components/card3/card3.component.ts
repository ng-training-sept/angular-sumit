import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card3.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-3',
  standalone: true,
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})

export class Card3Component {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @Input() cards: Card[] = [];

  //['mypage', 'child'] /mypage/child
  goToItemDetails(data: Card): void {
    this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route }).then()

    //
  }


}