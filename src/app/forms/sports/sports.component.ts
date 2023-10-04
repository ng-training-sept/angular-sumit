import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { Card } from 'src/app/components/card/card.model';
import { RouterModule } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, CardComponent, RouterModule]
})
export class SportsComponent implements OnInit {

  sportCards: Card[] = [];

  // private readonly authService = inject(AuthService);
  private readonly http = inject(HttpClient);

  // private readonly logger = inject(LOGGER);

  ngOnInit(): void {
    // this.logger.log();
    this.http
    .get<Card[]>(`${environment.baseUrl}/sports`)
    .subscribe(sports => this.sportCards = sports);
  }
}