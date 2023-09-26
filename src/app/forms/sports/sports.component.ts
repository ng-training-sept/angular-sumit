import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card3Component } from 'src/app/components/card3/card3.component';
import { Card } from 'src/app/components/card3/card3.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, Card3Component, RouterModule]
})
export class SportsComponent implements OnInit {

  sportCards: Card[] = [];

  ngOnInit(): void {
      this.sportCards = [
          {
              id: '1',
              name: 'Football',
              price: 1500,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
              description: 'Football description'
          },
          {
              id: '2',
              name: 'Football Boot',
              price: 6000,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
              description: 'Football description'
          }
      ];
  }
}