import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { Card } from 'src/app/components/card/card.model';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, CardComponent, RouterModule]
})
export class SportsComponent implements OnInit {

  sportCards: Card[] = [];

  private readonly authService = inject(AuthService);
  
  // private readonly logger = inject(LOGGER);

  ngOnInit(): void {
    // this.logger.log();
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