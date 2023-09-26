import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { Card2Component } from './components/card2/card2.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { Card3Component } from './components/card3/card3.component';
import { SportsComponent } from './forms/sports/sports.component';
import { Router, RouterModule, RouterOutlet, RouterState } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatCardModule,
    MatInputModule,
    FormsModule,
    InputComponent,
    MatIconModule,
    TableComponent,
    Card2Component,
    MatFormFieldModule,
    HeaderComponent,
    Card3Component,
    SportsComponent,
    RouterModule,
    RouterOutlet,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng';

  username = '';

  // Task

  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  
  addCard(title: string) {
    this.cardsTitle.push(title);
  }

  // Using filter method to create a remove method
  removeCard(title: string){
    let index = this.cardsTitle.indexOf(title);
    console.log(this.cardsTitle.splice(index, 1));
  }

}