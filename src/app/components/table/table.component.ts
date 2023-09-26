import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { IUsers } from './users';

export interface IUsers {
  username: string;
  address: string;
  age: number;
}

@Component({
  selector: 'table-filter-by-age',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule],
})

export class TableComponent {

  userData: IUsers[] = [
    { username: 'User1', address: 'Kathmandu', age: 5 },
    { username: 'User2', address: 'Kathmandu', age: 25 },
    { username: 'User3', address: 'Lalitpur', age: 5 },
    { username: 'User4', address: 'Lalitpur', age: 45 },
    { username: 'User5', address: 'Bhaktapur', age: 10 },
    { username: 'User6', address: 'Bhaktapur', age: 65 },
    { username: 'User7', address: 'Biratnagar', age: 17 },
    { username: 'User8', address: 'Syanja', age: 77 },
    { username: 'User9', address: 'Makwanpur', age: 5 },
    { username: 'User10', address: 'Palpa', age: 42 },
  ];

}
