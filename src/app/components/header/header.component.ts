import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';
import { ResourceLoader } from '@angular/compiler';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Card } from '../card/card.model'; 
import { environment } from 'environment';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, RouterLink, MatIconModule, MatDialogModule,CardComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [ AuthService ]
})
export class HeaderComponent implements OnInit{

  private readonly authService = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private subdirectory = '';

  constructor(){
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authenticate();
    console.log("Logged in");
  }

  addNew(): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent);
    this.subdirectory = this.router.url.split('/')[1]

    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
          // console.log(result.data)
          // this.subdirectory = this.router.url
          // console.log(this.subdirectory);

        // emit update event and call service from parent to update card

      
        // this.http.post<Card>(((environment.baseUrl)+(this.subdirectory)) , result.data).subscribe();
        // this.http.post<Card>(`${environment.baseUrl}/sports`, result.data).subscribe(card => console.log(card));
        console.log(`${environment.baseUrl}/${this.subdirectory}`)
  
        this.http.post<Card>(`${environment.baseUrl}/${this.subdirectory}`, result.data).subscribe();
      }
    });
  }
}

