import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
// import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-card-2',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatCardModule, FormsModule, MatInputModule],
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {
  
  @Input({required: true}) titles: string[] = [];

  @Output() titleEvent$ = new EventEmitter<string>();
  @Output() deleteTitleEvent$ = new EventEmitter<string>();

  onAddCard(title: string): void {
    this.titleEvent$.emit(title);
  }

  onDeleteCard(title: string): void {
    this.deleteTitleEvent$.emit(title);
  }

}
