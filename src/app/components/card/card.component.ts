import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
// import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from 'src/app/directives/special.directive';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';
import { ImpureDemoPipe } from 'src/app/pipes/impure-demo.pipe';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     MatLabel
//   ],
//   providers: []

// })

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    SpecialDirective,
    ReversePipe,
    ImpureDemoPipe,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // title: string = 'Binding';
  // port: number = 4200

  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;
  likeCount: number = 0;
  title: string = 'Card title';
  imageUrl: string =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';
  port: number = 4200;
  size: number = 5;
  server: { id: number; status: string } = { id: 10, status: 'offline' };
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';

  titles: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  isSpecial: boolean = true;

  onLike(): void {
    this.likeCount++;
    // alert('You liked Shiba!')
  }

  getServerStatus(): string {
    return this.server.status;
  }

  birthday = new Date(1988, 3, 15);

  toggleStatus(): void {
    this.server.status = this.server.status === 'offline' ? 'online' : 'offline';
  }

}
