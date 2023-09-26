import { CommonModule } from '@angular/common';
import { Card3Component } from 'src/app/components/card3/card3.component';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/components/card3/card3.model';

@Component({
  selector: 'app-grocery',
  standalone: true,
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  imports: [CommonModule, Card3Component, RouterModule],
})

export class GroceryComponent implements OnInit {

  groceryCards: Card[] = [];

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