import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { Card } from 'src/app/components/card/card.model';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

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
  private readonly http = inject(HttpClient)

  ngOnInit(): void {
    this.http
    .get<Card[]>(`${environment.baseUrl}/grocery`)
    .subscribe(grocery => this.groceryCards = grocery);
  }
}