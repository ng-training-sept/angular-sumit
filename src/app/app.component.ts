import { Component, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { SportsComponent } from './forms/sports/sports.component';
import { Router, RouterModule, RouterOutlet, RouterState } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    HeaderComponent,
    CardComponent,
    SportsComponent,
    RouterModule,
    RouterOutlet,
    HttpClientModule,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [AuthService],

})
export class AppComponent {
  
  // ------

  private readonly authService = inject(AuthService);

}
