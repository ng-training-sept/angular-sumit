import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { Card } from 'src/app/components/card/card.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-grocery',
  standalone: true,
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  imports: [CommonModule, CardComponent, RouterModule],
})

export class GroceryComponent implements OnInit {

  groceryCards: Card[] = [];

  private readonly authService = inject(AuthService);


  ngOnInit(): void {
      this.groceryCards = [
          {
              id: '1',
              name: 'Apple',
              price: 300,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
              description: 'Apple description'
          },
          {
              id: '2',
              name: 'Orange Boot',
              price: 450,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Orange_Sliced_White_Background.jpg',
              description: 'Orange description'
          }
      ];
  }
}