import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card3.model';

@Component({
  selector: 'app-card-3',
  standalone: true,
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class Card3Component {

  @Input() cards: Card[] = [];
}